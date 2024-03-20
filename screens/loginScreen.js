import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/header";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";
import theme from "../theme";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import CustomDialog from "../components/dialog";
import { useAuth } from "../contexts/AuthContext";
export default function LoginScreen() {
  const { currentUser } = useAuth(); // Użyj currentUser do sprawdzenia, czy użytkownik jest zalogowany
  const navigation = useNavigation();

  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogDescription, setDialogDescription] = useState("");

  const handleLogin = async (email, password) => {
    try {
      //   await firebase.auth().signInWithEmailAndPassword(email, password);
      await signInWithEmailAndPassword(
        auth,
        "dawid.spychalski00@gmail.com",
        "spychaczxd13"
      );
      console.log("Zalogowano użytkownika");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setDialogTitle("Błąd podczas logowania");
        setDialogDescription(
          "Podano niepoprawne dane do logowania. (e-mail i/lub hasło)"
        );
        setDialogVisible(true);
        console.log(error);
      } else if (error.code === "auth/too-many-requests") {
        setDialogTitle("Błąd podczas logowania");
        setDialogDescription(
          "Dostęp został tymczasowo zablokowany z powodu zbyt wielu nieudanych prób logowania. Zaleca się reset hasła lub spróbowanie ponownie później"
        );
        setDialogVisible(true);
        console.log(error);
      } else if (error.code === "auth/user-not-found") {
        setDialogTitle("Błąd podczas logowania");
        setDialogDescription(
          "Błąd ten pojawia się, gdy nie ma użytkownika odpowiadającego podanemu emailowi przy próbie logowania lub resetowania hasła."
        );
        setDialogVisible(true);
        console.log(error);
      } else if (error.code === "auth/wrong-password") {
        setDialogTitle("Błąd podczas logowania");
        setDialogDescription(
          "Podane hasło jest nieprawidłowe dla danego e-maila."
        );
        setDialogVisible(true);
        console.log(error);
      } else if (error.code === "auth/email-already-in-use") {
        setDialogTitle("Błąd podczas logowania");
        setDialogDescription(
          "Adres e-mail jest już używany przez innego użytkownika."
        );
        setDialogVisible(true);
        console.log(error);
      } else if (error.code === "auth/invalid-email") {
        setDialogTitle("Błąd podczas logowania");
        setDialogDescription("Podany adres email jest nieprawidłowy.");
        setDialogVisible(true);
        console.log(error);
      } else {
        console.error(error);
      }
    }

    // auth()
    //   .createUserWithEmailAndPassword(
    //     "jane.doe@example.com",
    //     "SuperSecretPassword!"
    //   )
    //   .then(() => {
    //     console.log("User account created & signed in!");
    //   })
    //   .catch((error) => {
    //     if (error.code === "auth/email-already-in-use") {
    //       console.log("That email address is already in use!");
    //     }

    //     if (error.code === "auth/invalid-email") {
    //       console.log("That email address is invalid!");
    //     }

    //     console.error(error);
    //   });

    // navigation.navigate('home')
  };
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);

  // Efekt sprawdzający, czy użytkownik jest zalogowany
  useEffect(() => {
    if (currentUser) {
      navigation.navigate("home"); // Przekieruj do strony głównej, jeśli użytkownik jest zalogowany
    }
    if (currentUser === null) {
        navigation.navigate("login")
    }
  }, [currentUser, navigation]);
  return (
    <SafeAreaView style={styles.flex1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          style={styles.linearGradient}
          colors={theme.light.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Header title="LOGOWANIE"></Header>
          <View
            style={{
              flex: 1,
              padding: 32,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Icon
              name="shield-home"
              size={220}
              color={theme.light.primary}
              style={styles.shadow}
            />
            <View style={{ width: "100%" }}>
              <TextInput
                style={styles.input}
                placeholder="E-MAIL"
                placeholderTextColor={theme.light.primary}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="HASŁO"
                placeholderTextColor={theme.light.primary}
              />
              <Pressable
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                style={styles.pressableText}
                onPress={handleLogin}
              >
                <Text
                  style={[
                    styles.textCenter,
                    styles.textBold,
                    {
                      color: isPressed
                        ? "rgba(255, 255, 255, 0.5)"
                        : "rgba(255, 255, 255, 0.9)",
                    },
                  ]}
                >
                  PRZYPOMNIENIE HASŁA
                </Text>
                <Icon
                  name="arrow-right-thin"
                  size={32}
                  color={
                    isPressed
                      ? "rgba(255, 255, 255, 0.5)"
                      : "rgba(255, 255, 255, 0.9)"
                  }
                />
              </Pressable>
            </View>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? "rgba(0, 0, 0, 0.4)"
                    : "rgba(0, 0, 0, 0.2)",
                },
                styles.pressable,
              ]}
              onPress={handleLogin}
            >
              <Text
                style={[
                  styles.textCenter,
                  styles.textSize20,
                  styles.textColorPrimary,
                ]}
              >
                ZALOGUJ
              </Text>
            </Pressable>
            <Pressable
              onPressIn={() => setIsPressed2(true)}
              onPressOut={() => setIsPressed2(false)}
              style={styles.pressableText}
              onPress={handleLogin}
            >
              <Text
                style={[
                  styles.textCenter,
                  styles.textBold,
                  {
                    color: isPressed2
                      ? "rgba(255, 255, 255, 0.5)"
                      : "rgba(255, 255, 255, 0.9)",
                  },
                ]}
              >
                REJESTRACJA
              </Text>
              <Icon
                name="arrow-right-thin"
                size={32}
                color={
                  isPressed2
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgba(255, 255, 255, 0.9)"
                }
              />
            </Pressable>
          </View>
        </LinearGradient>
      </ScrollView>
      <CustomDialog
        visible={dialogVisible}
        title={dialogTitle}
        description={dialogDescription}
        onCancel={() => setDialogVisible(false)}
      />
    </SafeAreaView>
  );
}
