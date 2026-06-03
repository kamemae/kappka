import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../components/icons';
const styles = require('../styles/globalStyles');

export const ActionCard = ({ title, subtitle, icon, bg, onPress, isLarge } : {
    title: string;
    subtitle?: string;
    icon: string;
    bg: string;
    onPress?: () => void;
    isLarge?: boolean;
}) => {
    const bgIcons = Array.from({ length: 32 });


    return (    
        <TouchableOpacity activeOpacity={0.82} onPress={onPress} style={[ styles.actionCard, {backgroundColor: bg}, isLarge && styles.actionCardLarge]}>
            <View style={styles.actionCardBacgkroundIcons} pointerEvents='none'>
                {bgIcons.map((_, index) => (
                    <View key={index} style={{ margin: 4 }}>
                        <Icon name={icon} size={isLarge ? 36 : 28 } color='#fff' />
                    </View>
                    
                )
                )}
            </View>
            <Text style={styles.actionCardTitle}>{title}</Text>
            { 
                subtitle && <Text style={styles.actionCardSub}>{subtitle}</Text> 
            }
            <View style={styles.actionCardIcon}>
                <Icon name={icon} size={isLarge ? 42 : 32} color="#fff" />
            </View>
        </TouchableOpacity>
    );
};

