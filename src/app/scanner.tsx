
import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Text, Vibration, View } from "react-native";
import getInformationWithBarcode from '../../services/api/openfoodfacts/api';

import { ActionCard } from "../../services/components/actioncard";
import { Header } from '../../services/components/header';
const styles = require("../../services/styles/globalStyles");


interface BarcodeData {
    type: string;
    data: string;
}
export default function scanner() {
    const [perm, requestPerm] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const [barcode, setBarcode] = useState<BarcodeData | null>(null);
    const cooldown = useRef(false);


    useEffect(() => {
        if(!perm || !perm.granted) 
            requestPerm();
    }, [perm]);

    const handleBarCodeScan = async ({ type, data }: { type: string; data: string }) => {
        if(cooldown.current) return;
        cooldown.current = true;
        setScanned(true);
        setBarcode({ type, data });
        Vibration.vibrate(100);
        
        const result = await getInformationWithBarcode(data);
        
        if(result) {
            const bottle = result?.product?.packaging;
            alert(`${JSON.stringify(data)}`);
        } else {
            alert("Nie znaleziono takiej butelki");
        }

        setTimeout(() => {
            cooldown.current = false;
            setScanned(false);
        }, 2000);
    }


    if(!perm) {
        return (
            <View style={styles.safe}>
                <Header/>
                <View style={[styles.heroCard, { height: 350, justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={{ color: '#666' }}>Ładowanie...</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.safe}>
            <Header/>
            <View style={[styles.heroCard, { height: 500, overflow: 'hidden', padding: 0, margin: 16, backgroundColor: '#fff'}]}>
            {
                perm.granted ? ( 
                    <CameraView 
                        facing='back' 
                        style={{ flex: 1, borderRadius: 14, overflow: 'hidden' }}
                        barcodeScannerSettings={{
                            barcodeTypes: [
                                'ean13', 'ean8', 'upc_a', 'upc_e'
                            ]
                        }}
                        onBarcodeScanned={scanned ? undefined : handleBarCodeScan}
                    /> 
                    ) : (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 18 }}>
                            <ActionCard
                                title="Brak dostępu do Aparatu" 
                                subtitle="Kliknij tutaj, aby spróbować ponownie." 
                                icon="camera" 
                                bg="#c5b30c" 
                                isLarge
                                onPress={() => requestPerm()}
                            />
                        </View>
                    )
            }   
            </View>
            <View style={{ paddingHorizontal: 18, marginTop: 10 }}>
                <ActionCard title='Powrót do Menu' subtitle='Zamknij skaner i wróć do poprzedniej strony' icon="chevron" bg="#4CAF50" onPress={() => router.dismissAll()}/>
            </View>
        </View>
    );
}