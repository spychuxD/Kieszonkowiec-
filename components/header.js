import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Header({ title }) {
    return (
        <View style={styles.container}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
            <TouchableOpacity>
                <Icon name='arrow-left-thin' size={38} color='#FFB703'/>
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity>
                <Icon name='dots-vertical' size={32} color='#FFB703'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 32
    },
    text: {
        color: '#FFB703',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
});