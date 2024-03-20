import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import theme from '../theme';
export default function LoginScreen() {
    const navigation = useNavigation()
    const handleLogin = () => {
        navigation.navigate('home')
    }
    const [isPressed, setIsPressed] = useState(false);
    const [isPressed2, setIsPressed2] = useState(false);

    return (
        <SafeAreaView style={styles.flex1}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <LinearGradient
                    style={styles.linearGradient}
                    colors={theme.light.linearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Header title='LOGOWANIE'></Header>
                    <View style={{ flex: 1, padding: 32, alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Icon name='shield-home' size={220} color={theme.light.primary} style={styles.shadow} />
                        <View style={{ width: '100%' }}>
                            <TextInput
                                style={styles.input}
                                placeholder='E-MAIL'
                                placeholderTextColor={theme.light.primary}
                                keyboardType='email-address'

                            />
                            <TextInput
                                style={styles.input}
                                placeholder='HASŁO'
                                placeholderTextColor={theme.light.primary}
                            />
                            <Pressable
                                onPressIn={() => setIsPressed(true)}
                                onPressOut={() => setIsPressed(false)}
                                style={styles.pressableText}
                                onPress={handleLogin}
                            >
                                <Text style={[styles.textCenter, styles.textBold, { color: isPressed ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.9)' }]}>PRZYPOMNIENIE HASŁA</Text>
                                <Icon name='arrow-right-thin' size={32} color={isPressed ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.9)'} />
                            </Pressable>
                        </View>
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.2)',
                                },
                                styles.pressable,
                            ]}
                            onPress={handleLogin}
                        >
                            <Text style={[styles.textCenter, styles.textSize20, styles.textColorPrimary]}>ZALOGUJ</Text>
                        </Pressable>
                        <Pressable
                            onPressIn={() => setIsPressed2(true)}
                            onPressOut={() => setIsPressed2(false)}
                            style={styles.pressableText}
                            onPress={handleLogin}
                        >
                            <Text style={[styles.textCenter, styles.textBold, { color: isPressed2 ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.9)' }]}>REJESTRACJA</Text>
                            <Icon name='arrow-right-thin' size={32} color={isPressed2 ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.9)'} />
                        </Pressable>
                    </View>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    )
}