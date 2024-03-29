export function hexToRgba(hex, alpha = 1) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
    let g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
    let b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

import AsyncStorage from '@react-native-async-storage/async-storage';

export async function checkAsyncStorage(hex, alpha = 1) {
    try {
        const keys = await AsyncStorage.getAllKeys();
        console.log(keys)
        const items = await AsyncStorage.multiGet(keys);

        items.forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });
    } catch (error) {
        console.error('Error accessing AsyncStorage: ', error);
    }
};

// Wywołaj funkcję, aby zobaczyć zawartość AsyncStorage