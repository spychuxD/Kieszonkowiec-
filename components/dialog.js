import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import theme from "../theme";
import { hexToRgba } from "../functions/common";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const CustomDialog = ({ visible, title, description, onCancel, type }) => {
  if (!visible) return null;
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Icon
              name="shield-alert"
              size={64}
              color={type === 'error' ? theme.light.error : type === 'success' ?  theme.light.success :  theme.light.warning}
              style={styles.shadow}
            />
          <Text style={styles.modalDescription}>{description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onCancel}
              style={[styles.button, styles.buttonCancel]}
            >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: hexToRgba(theme.light.secoundary),
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: theme.light.accent,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: theme.light.accent,
  },
  modalDescription: {
    marginBottom: 15,
    textAlign: "center",
    color: theme.light.primary,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "cenetr",
    width: "100%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCancel: {
    backgroundColor: theme.light.accent,
  },
  buttonDelete: {
    backgroundColor: "#f44336",
  },
  textStyle: {
    color: theme.light.secoundary,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomDialog;
