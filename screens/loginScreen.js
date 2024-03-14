import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function LoginScreen() {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                style={styles.linearGradient}
                colors={['#410066', '#462183', '#3537AC', '#2869B8', '#2382BE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Header title='LOGOWANIE'></Header>
                <View style={styles.container}>
                    <Icon name='shield-home' size={128} color='#FFB703' />
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Hasło'
                    />
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#E0A100' : '#FFB703',
                            },
                            styles.wrapperCustom,
                        ]}>
                        <Text style={styles.text}>ZALOGUJ</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 64
    },
    linearGradient: {
        width: '100%',
        height: '100%'
    },
    input: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '#FFB703',
        padding: 10,
        color: '#FFB703',
        textAlign: 'center'
    },
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 12,
    },
});