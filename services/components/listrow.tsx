import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../../services/components/icons';

const styles = require('../styles/globalStyles');

export const ListRow = ({ icon, label }: { icon: string; label: string }) => (
  <TouchableOpacity activeOpacity={0.7} style={styles.listRow}>
    <View style={styles.listRowLeft}>
      <Icon name={icon} size={18} color="#4CAF50" />
      <Text style={styles.listRowLabel}>{label}</Text>
    </View>
    <Icon name="arrow_right" size={20} color="#999" />
  </TouchableOpacity>
);
