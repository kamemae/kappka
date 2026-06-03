import { router } from 'expo-router';
import { useState } from "react";
import { ScrollView, View } from "react-native";

import { ActionCard } from "../../services/components/actioncard";
import { Tab } from '../../services/components/bottommenu';
import { Header } from '../../services/components/header';
import { ListRow } from '../../services/components/listrow';
import { StatBadge } from '../../services/components/statbadge';
const styles = require("../../services/styles/globalStyles");
export default function Home() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <View style={styles.safe}>
            <Header/>

            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.heroCard}>
                    <View style={styles.heroBadges}>
                        <StatBadge icon="flame" label="STREAK:" value="67" accent="#FF6B35"/>
                        <StatBadge icon="gem" label="KAUCJA:" value="w chuj" accent="#1E88E5"/>
                    </View>
                </View>

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
                    <ListRow icon="clock" label="Ostatnia Aktywność"/>
                    <View style={styles.listDivider}/>

                    <ListRow icon="shop" label="Sklep"/>
                    <View style={styles.listDivider}/>

                    <ListRow icon="trophy" label="Osiągnięcia"/>
                    <View style={styles.listDivider}/>

                    <ListRow icon="bell" label="Powiadomienia"/>
                    <View style={styles.listDivider}/>

                    <ListRow icon="info" label="O Aplikacji"/>
                    <View style={styles.listDivider}/>

                    <ListRow icon="izrael" label="Rozjebać izreal"/>
                    <View style={styles.listDivider}/>
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