import { router } from 'expo-router';
import { ScrollView, View } from "react-native";

import { ActionCard } from "../../services/components/actioncard";
import { Header } from '../../services/components/header';
const styles = require("../../services/styles/globalStyles");

export default function rewards() {
    return (
        <View style={styles.safe}>
            <Header/>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <ActionCard 
                    title="Ta część aplikacji pojawi się w przyszłych aktualizacjach." 
                    subtitle="Nad aplikacją pracuje sam, dlatego na tą funkcje musisz jeszcze poczekać. Aby wrócić kliknij w tego boxa." 
                    icon="hammer" 
                    bg="#af4c4c" 
                    isLarge onPress={() => { 
                        router.dismissAll();
                    }}
                />
            </ScrollView>
        </View>
    )
}