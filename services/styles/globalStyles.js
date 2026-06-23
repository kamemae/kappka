import { StyleSheet } from "react-native";

const GLOBAL_RADIUS = 16;
const GLOBAl_GREEN = "#4CAF50";
const GLOBAL_DARK_TEXT_COLOR = "#1a1a1a";
const GLOBAL_LIGHT_TEXT_COLOR = "#fff";
const GLOBAL_BOTTOM_MARGIN = 7;
const GLOBAL_PADDING = 18;
const GLOBAL_ELEVATION = 3;
const APP_BG = "#f4faf4";


module.exports = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: APP_BG
    ,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        paddingVertical: 6,
    },

    headerLeft: { 
        flexDirection: "row", 
        alignItems: "center" 
    },

    logoCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: GLOBAl_GREEN,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
    },

    logoText: {
        fontSize: 18,
        fontWeight: "800",
        color: GLOBAL_DARK_TEXT_COLOR,
        letterSpacing: 1.5,
    },

    headerRight: { 
        flexDirection: "row", 
        alignItems: "center" 
    },
    
    avatar: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: "#78909C",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
    },

    userName: { 
        fontSize: 15, 
        fontWeight: "600", 
        color: GLOBAL_DARK_TEXT_COLOR,
    },

    scroll: { 
        flex: 1 
    },

    scrollContent: { 
        paddingHorizontal: GLOBAL_PADDING, 
        paddingTop: 4 
    },


    // HERO CARDSY
    heroCard: {
        backgroundColor: APP_BG,
        borderRadius: GLOBAL_RADIUS,
        padding: GLOBAL_PADDING,
        marginBottom: GLOBAL_BOTTOM_MARGIN,
        elevation: GLOBAL_ELEVATION,
    },


    heroBadges: { 
        flexDirection: "row", 
        gap: GLOBAL_PADDING 
    },

    
    // STATY
    statBadge: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: APP_BG,
        borderRadius: GLOBAL_RADIUS,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    
    statLabel: { 
        fontSize: 14, 
        fontWeight: "700",
        opacity: 0.7 
    },

    statValue: { 
        fontSize: 15, 
        fontWeight: "500", 
        color: GLOBAL_DARK_TEXT_COLOR, 
    },


    // GRID
    grid: {
        flexDirection: "row",
        gap: 12,
        marginBottom: GLOBAL_BOTTOM_MARGIN,
    },
    gridRight: {
        flex: 1, 
        gap: GLOBAL_BOTTOM_MARGIN 
    },


    // ACTION CARDS
    actionCard: {
        borderRadius: GLOBAL_RADIUS,
        padding: GLOBAL_PADDING,
        overflow: "hidden",
        minHeight: 100,

    },

    actionCardLarge: {
        flex: 1,
        minHeight: 230,
    },
    
    actionCardTitle: {
        fontSize: 16,
        fontWeight: "900",
        color: GLOBAL_LIGHT_TEXT_COLOR,
        lineHeight: 16,
    },

    actionCardSub: {
        fontSize: 12,
        color: GLOBAL_LIGHT_TEXT_COLOR,
        marginTop: 2,
        fontWeight: "400",
    },

    actionCardIcon: {
        marginTop: "auto",
        alignSelf: "center",
        paddingTop: 6,
    },

    actionCardBacgkroundIcons: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        opacity: 0.2,
        justifyContent: 'space-around',
        alignItems: 'center',
        transform: [
            { rotate: '-30deg' }, { scale: 2 }
        ]
    },


    // LISTSY
    listSection: {
        backgroundColor: GLOBAL_LIGHT_TEXT_COLOR,
        borderRadius: GLOBAL_RADIUS,
        paddingHorizontal: GLOBAL_PADDING,
        elevation: GLOBAL_ELEVATION,
    },

    listRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
    },

    listRowLeft: { 
        flexDirection: "row", 
        alignItems: "center", 
        gap: GLOBAL_BOTTOM_MARGIN
    },

    listRowLabel: { 
        fontSize: 16, 
        fontWeight: "600", 
        color: "#2a2a2a" 
    },

    // JOHNY ROZDZIAŁEK
    listDivider: { 
        height: 1, 
        backgroundColor: "#f0f0f0" 
    },


    // NAVBAR
    bottomNav: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderTopWidth: 2,
        borderTopColor: "#eee",
        paddingBottom: 2,
        paddingTop: 4,
    },

    tab: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 4,
    },

    tabLabel: { 
        fontSize: 12, 
        color: "#aaa", 
        marginTop: 2, 
        fontWeight: "500" 
    },
    
    tabLabelActive: { 
        color: GLOBAl_GREEN,
        fontWeight: "700" 
    },

});
