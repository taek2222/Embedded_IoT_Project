import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Modal_Title from "./Modal/Modal_Title.js";
import Avg_Temperature from "./Modal/Avg_Temperature.js";
import Avg_Fine_dust from "./Modal/Avg_Fine_dust.js";
import Avg_Humid from "./Modal/Avg_Humid.js";

const Modal_ = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Modal_Title/>
          <Avg_Temperature/>
          <Avg_Fine_dust/>
          <Avg_Humid/>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>닫기</Text>
          </TouchableOpacity>
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
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 350,
    height: 415,
  },
  button: {
    marginTop: 15,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Modal_;
