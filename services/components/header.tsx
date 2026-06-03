import { useEffect, useState } from "react";
import { StatusBar, Text, View } from "react-native";

import { Icon } from '../../services/components/icons';
import { getUsername } from '../api/database/api';
const styles = require("../../services/styles/globalStyles");

export const Header = () => {
    const [username, setUsername] = useState<string>('kappka-user');

    useEffect(() => {
        getUsername().then((username) => {
            if(username) 
                setUsername(username);
        });
    }, []);


    return (
        <View>
            <StatusBar barStyle="dark-content" backgroundColor="#f4faf4"/>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={styles.logoCircle}>
                        <Icon name="recycle" color="#fff"/>
                    </View>
                    <Text style={styles.logoText}>kAPPka</Text>
                </View>
                <View style={styles.headerRight}>
                    <View style={styles.avatar}>
                        <Icon name="person" size={20} color="#fff"/>
                    </View>
                    <Text style={styles.userName}>Witaj, {username}</Text>
                </View>
            </View>
        </View>
    );
}