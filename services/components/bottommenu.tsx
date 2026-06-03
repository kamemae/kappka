import { Text, TouchableOpacity } from "react-native";
import { Icon } from '../../services/components/icons';
const styles = require("../../services/styles/globalStyles");

export const Tab = ({ icon, label, active, onPress,} : {
    icon: string;
    label: string;
    active: boolean;
    onPress: () => void;
}) => (
    <TouchableOpacity style={styles.tab} onPress={onPress} activeOpacity={0.8}>
        <Icon name={icon} size={22} color={active ? "#4CAF50" : "#aaa"} />
        <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
    </TouchableOpacity>
);