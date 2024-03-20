import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles';
import theme from '../theme';

export default function Header({ title, backButton }) {
    const navigation = useNavigation()
    const handleBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.header}>
            {backButton ? <TouchableOpacity onPress={handleBack}>
                <Icon name='arrow-left-thin' size={32} color={theme.light.primary}/>
            </TouchableOpacity> : <TouchableOpacity>
                <Icon name='account' size={32} color={theme.light.primary}/>
            </TouchableOpacity> }
            <Text style={[styles.textCenter, styles.textBold, styles.textSize20, styles.textColorPrimary]}>{title}</Text>
            <TouchableOpacity>
                <Icon name='cogs' size={32} color={theme.light.primary}/>
            </TouchableOpacity>
        </View>
    )
}