import { Text } from 'react-native';
export const Icon = ({ name, size = 22, color = "#333" }: { name: string; size?: number; color?: string }) => {
    const s = { fontSize: size, color, lineHeight: size + 4 };
    const icons: Record<string, string> = {
        flame: "🔥",
        gem: "💎",
        camera: "📷",
        gift: "🎁",
        leaf: "🌿",
        stats: "📊",
        clock: "🕐",
        bulb: "💡",
        users: "👥",
        arrow_right: "›",
        home: "🏠",
        trophy: "🏆",
        shop: "🛍️",
        person: "👤",
        recycle: "♻️",
        bottle: "🍶",
        pet: "🦴",
        info: "ℹ️",
        bell: "🔔",
        hammer: "🛠️",
    };
    return <Text style={s}>{icons[name] ?? "●"}</Text>;
}