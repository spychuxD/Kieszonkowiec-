import { StyleSheet } from 'react-native';
import theme from './theme';
import { hexToRgba } from './functions/common';
export default StyleSheet.create({
    shadow: {
        shadowColor: theme.light.accent,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },
    //=========MAIN=========
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 32
    },
    flex1: {
        flex: 1
    },
    linearGradient: {
        width: '100%',
        height: '100%'
    },
    input: {
        width: '100%',
        fontSize: 18,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: theme.light.primary,
        borderRadius: 10,
        padding: 10,
        color: theme.light.primary,
        textAlign: 'center',
    },
    //=========TEXT=========
    textCenter: {
        textAlign: 'center'
    },
    textSize12: {
        fontSize: 12
    },
    textSize16: {
        fontSize: 16
    },
    textSize20: {
        fontSize: 20
    },
    textBold: {
        fontWeight: 'bold'
    },
    textColorPrimary: {
        color: theme.light.primary
    },
    textColorSuccess: {
        color: theme.light.success
    },
    textColorError: {
        color: theme.light.error
    },
    textColorWarning: {
        color: theme.light.warning
    },
    //========================
    pressable: {
        borderRadius: 999,
        paddingHorizontal: 32,
        paddingVertical: 16,
        shadowColor: theme.light.accent,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressableNewSpending: {
        borderRadius: 999,
        padding: 16,
        shadowColor: theme.light.accent,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressableTopNav: {
        padding: 16,
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 10
    },
    pressableNav: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressableText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spendingItem: {
        backgroundColor: hexToRgba(theme.light.accent, 0.1),
        paddingVertical: 16,
        margin: 8,
        borderRadius: 10
    },
    spendingItemHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    spendingItemBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    spendingItemFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    //===================================
    justifyCenter: {
        justifyContent: 'center'
    },
    alignCenter: {
        alignItems: 'center'
    },
    wrapper: {
        width: '300px',
        height: '300px'
    },
    menuItem: {
        padding: 20, 
        borderBottomWidth: 1, 
        borderColor: theme.light.accent,
    },
    menuItemText: {
        fontSize: 18,
        color: theme.light.primary,
        textAlign: 'center'
    },
    modalView: {
        position: "absolute",
        top: 100, // Positions the modal at the top
        width: '100%',
        backgroundColor: hexToRgba(theme.light.secoundary, 0.9),
        padding: 20,
        shadowColor: theme.light.accent,
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24
    },

});