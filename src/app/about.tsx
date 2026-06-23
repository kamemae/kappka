import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { ScrollView, View } from "react-native";

import { ActionCard } from "../../services/components/actioncard";
import { Header } from '../../services/components/header';
const styles = require("../../services/styles/globalStyles");


export default function About() {
    return (
        <View style={styles.safe}>
            <Header/>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <ActionCard 
                    title="Repozytorium na GITHUB" 
                    subtitle="Kliknij w boxa, aby otworzyć repozytorium aplikacji w przeglądarce." 
                    icon="info" 
                    bg="#1e3c64" 
                    onPress={() => { 
                        Linking.openURL("https://github.com/kamemae/kappka");
                    }}
                />

                <View style={{height: 8}}/>

                <ActionCard 
                    title="Powrót na strone główną" 
                    subtitle="Kliknij tego boxa aby wrócić na strone główną." 
                    icon="home" 
                    bg="#220505" 
                    onPress={() => { 
                        router.dismissAll();
                    }}

                />


            </ScrollView>
        </View>
    )
}