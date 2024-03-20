import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Modal, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles';
import theme from '../theme';
import { hexToRgba } from '../functions/common';
import { useAuth } from '../contexts/AuthContext';
import { checkAsyncStorage } from '../functions/common';
export default function Header({ title, backButton }) {
    const navigation = useNavigation();
    const [settingsVisible, setSettingsVisible] = useState(false);
    const { logout } = useAuth();
    const handleBack = () => {
        navigation.goBack();
    }

    const toggleSettingsModal = () => {
        setSettingsVisible(!settingsVisible);
    }

    const options = [
        { id: '1', title: 'DODAJ NOWY ', isIcon: true },
        { id: '2', title: 'EDYTUJ INFORMACJE O ', isIcon: true },
        { id: '3', title: 'ZAMKNIJ', isIcon: false },
        // Add more options as needed
    ];

    return (
        <View style={styles.header}>
            {backButton ? <TouchableOpacity onPress={handleBack}>
                <Icon name='arrow-left-thin' size={32} color={theme.light.primary}/>
            </TouchableOpacity> : <TouchableOpacity onPress={logout}>
                <Icon name='account' size={32} color={theme.light.primary}/>
            </TouchableOpacity> }
            <Text style={[styles.textCenter, styles.textBold, styles.textSize20, styles.textColorPrimary]}>{title}</Text>
            <TouchableOpacity onPress={toggleSettingsModal}>
                <Icon name='cogs' size={32} color={theme.light.primary}/>
            </TouchableOpacity>

            {/* Modal for settings options */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={settingsVisible}
                onRequestClose={toggleSettingsModal}
            >
            <View style={styles.modalView}>
                <SafeAreaView style={{flex: 1}}>
                    <FlatList
                        data={options}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.menuItem}
                                onPress={() => {
                                    // Handle option selection
                                    console.log(item.title);
                                    toggleSettingsModal(); // Close modal after selection
                                }}
                            >
                            <View style={styles.pressableText}>
                                <Text style={styles.menuItemText}>{item.title}</Text>
                                {item.isIcon ? <Icon name="home" size={32} color={theme.light.primary}></Icon> : null}
                            </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                </View>
            </Modal>
        </View>
    );
}
