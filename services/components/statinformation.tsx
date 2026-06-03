import { useEffect, useState } from "react";
import { View } from "react-native";

import { StatBadge } from '../../services/components/statbadge';
import { getKaucja, getStreak } from '../api/database/api';
const styles = require("../../services/styles/globalStyles");

export const StatInformation = () => {
    const [kaucja, setKaucja] = useState(0);
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        getKaucja().then((kaucja) => {
            if(kaucja) 
                setKaucja(kaucja);
        });

        getStreak().then((streak) => {
            if(streak)
                setStreak(streak);
        });
        
    }, []);

    return (
        <View style={styles.heroCard}>
            <View style={styles.heroBadges}>
                <StatBadge icon="flame" label="STREAK:" value={streak.toString()} accent="#FF6B35"/>
                <StatBadge icon="gem" label="KAUCJA:" value={kaucja.toString()} accent="#1E88E5"/>
            </View>
        </View>
    )
}
                