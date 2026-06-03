import { Text, View } from "react-native";
import { Icon } from '../../services/components/icons';
const styles = require("../../services/styles/globalStyles");

export const StatBadge = ({ icon, label, value, accent, }: {
    icon: string;
    label: string;
    value: string; 
    accent: string;
}) => (
    <View style={[styles.statBadge, { borderColor: accent + "44" }]}>
            <Icon name={icon} size={18} color={accent} /><View style={{ marginLeft: 6 }}>
            <Text style={[styles.statLabel, { color: accent }]}>{label}</Text>
            <Text style={styles.statValue}>{value}</Text>
        </View>
    </View>
);