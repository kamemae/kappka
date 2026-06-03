import { StatusBar, Text, View } from "react-native";

import { Icon } from '../../services/components/icons';
const styles = require("../../services/styles/globalStyles");

export const Header = () => {
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
                    <Text style={styles.userName}>Witaj, USER</Text>
                </View>
            </View>
        </View>
    );
}