import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig"; // Twoja konfiguracja Firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomDialog from "../components/dialog";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogDescription, setDialogDescription] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log("Zmiana stanu autoryzacji:", user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.clear();
      setDialogTitle("Wylogowano");
      setDialogDescription("Użytkownik został wylogowany");
      setDialogVisible(true);
    } catch (error) {
      console.error("Problem przy wylogowywaniu:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, logout }}>
      {children}
      <CustomDialog
        visible={dialogVisible}
        title={dialogTitle}
        description={dialogDescription}
        type="success"
        onCancel={() => setDialogVisible(false)}
      />
    </AuthContext.Provider>
  );
};
