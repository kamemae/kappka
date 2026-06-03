import { router } from 'expo-router';
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { ActionCard } from "../../services/components/actioncard";
import { Tab } from '../../services/components/bottommenu';
import { Header } from '../../services/components/header';
import { ListRow } from '../../services/components/listrow';
import { StatInformation } from '../../services/components/statinformation';
const styles = require("../../services/styles/globalStyles");

export default function Home() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <View style={styles.safe}>
            <Header/>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <StatInformation/>

                <View style={styles.grid}>
                    <ActionCard 
                        title="Zeskanuj BUTELKE" 
                        subtitle="Użyj aparatu w telefonie aby zeskanować" 
                        icon="camera" 
                        bg="#4CAF50" 
                        isLarge onPress={() => { 
                            router.push('/scanner');
                        }}
                    />
                    
                
                    <View style={styles.gridRight}>
                        <ActionCard 
                            title="Strefa z NAGRODAMI" 
                            subtitle="Nagrody za osiągniete cele" 
                            icon="gift" 
                            bg="#FF9800" 
                            onPress={() => {
                                router.push('/rewards');
                            }}
                        />

                        <ActionCard 
                            title="STATYSTYKI" 
                            subtitle="Twoje Statystyki" 
                            icon="stats" 
                            bg="#FF6B35" 
                            onPress={() => {
                                router.push('/stats')
                            }}
                        />
                    </View>
                </View>

                <View style={styles.listSection}>
                    <ListRow icon="clock" label="Ostatnia Aktywność" onPress={() => {}}/>
                    <View style={styles.listDivider}/>

                    <ListRow icon="shop" label="Sklep" onPress={() => {}}/>
                    <View style={styles.listDivider}/>

                    <ListRow icon="trophy" label="Osiągnięcia" onPress={() => {}}/>
                    <View style={styles.listDivider}/>

                    <ListRow icon="bell" label="Powiadomienia" onPress={() => {}}/>
                    <View style={styles.listDivider}/>

                    <ListRow icon="info" label="O Aplikacji" onPress={() => { router.push('/about') }}/>
                    <View style={styles.listDivider}/>
                </View>

                <View style={{ height: 16 }}/>

                <View style={[styles.actionCardIcon]}>
                    <Text style={{ color: "#adadad" }}>©2026 kamemae. All rights reserved.</Text>
                </View>

                <View style={{ height: 16 }}/>
            </ScrollView>


            <View style={styles.bottomNav}>
                <Tab icon="home" label="Strona Główna" active={activeTab === "home"} onPress={() => setActiveTab("home")}/>
                <Tab icon="pet" label="Kaucuś" active={activeTab === "pet"} onPress={() => setActiveTab("pet")}/>
                <Tab icon="shop" label="Sklep" active={activeTab === "shop"} onPress={() => setActiveTab("shop")}/>
                <Tab icon="person" label="Profil" active={activeTab === "profile"} onPress={() => setActiveTab("profile")}/>
            </View>
        </View>
    );
}