/*
import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, Text, TouchableOpacity, View } from 'react-native';
*/
// openfoodfacts
//import getFoodData from '../../services/api/openfoodfacts/api';

export default function Page() {
  /*
    const [data, setData] = useState<any>(null);

    const [perm, requestPerm] = useCameraPermissions();
    const [isCamOn, setIsCamOn] = useState(false);

    useEffect(() => {
      getFoodData().then((wynik: any) => {
        setData(wynik);
      });
    }, []);


    const openCam = async() => {
      if(!perm || !perm.granted) {
        const response = await requestPerm();

        if(response.granted) {
          setIsCamOn(true);
        }
      } else {
        setIsCamOn(true);
      }
    };

    if(isCamOn) {
      return (
        <View>
          <CameraView facing='back' style={{ flex: 1 }}>
            <View>
              <TouchableOpacity onPress={() => setIsCamOn(false)}>
                <Text>ZAMKNIJ SKANER</Text>
              </TouchableOpacity>
            </View>
          </CameraView>
        </View>
      )
    }
    





    const testApi = () => {
      if(data) {
        Alert.alert(
          "Alert",
          `${data.product.packaging}`,
          [{ text: "OK" }]
        );
      } else {
        Alert.alert("Błąd", "Nie znaleziono żadnych danych do wyświetlenia.");
      }
    };


    const user = "cwel";

    const textStyle = require("../../services/styles/userStatsText");
    return (
      <View>
        <StatusBar style="auto"/>

        <View>
          <Text style={textStyle.textStyle}>Witaj, {user}</Text>

        </View>


        <Button title="API TEST" onPress={testApi}/>

        <Button title="SKLEP" onPress={ () => router.push('./shop') }/>

        <Button title="SKLEP" onPress={ () => router.push('./KappkaHomeScreen') }/>

        <Button title="SKANER" onPress={ () => router.push('./scanner') }/>


        <Button title="PROFIL" onPress={ () => router.push('./profile') }/>

        
        <Button title="KAUCUŚ" onPress={ () => router.push('./pet') }></Button>
      </View> 
  );
  */
 return(
  <></>
 );
}


