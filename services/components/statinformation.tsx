import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

import { StatBadge } from '../../services/components/statbadge';
import { getKaucja, getLastStreak, getStreak } from '../api/database/api';
const styles = require("../../services/styles/globalStyles");

export const StatInformation = () => {
    const [kaucja, setKaucja] = useState(0);
    const [streak, setStreak] = useState(0);
    const [lastStreak, setLastStreak] = useState(0);

    useEffect(() => {
        getKaucja().then((kaucja) => {
            if(kaucja) 
                setKaucja(kaucja);
        });

        getStreak().then((streak) => {
            if(streak)
                setStreak(streak);
        });

        getLastStreak().then((lastStreak) => {
            if(lastStreak)
                setLastStreak(lastStreak)
        })

    }, []);

    useFocusEffect(
        useCallback(() => {
            getKaucja().then((kaucja) => {
                if(kaucja) 
                    setKaucja(kaucja);
            });

            getStreak().then((streak) => {
                if(streak)
                    setStreak(streak);
            });


            return () => {

                
            };
        }, [])
    );

    return (
        <View style={styles.heroCard}>
            <View style={styles.heroBadges}>
                <StatBadge icon="flame" label="STREAK:" value={streak.toString() + " dni"} accent="#FF6B35"/>
                <StatBadge icon="gem" label="KAUCJA:" value={kaucja.toString().replace('.', ',') + " gr"} accent="#1E88E5"/>
            </View>
        </View>
    )
}
                