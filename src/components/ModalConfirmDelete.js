import React from "react";
import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import MyButton from "./MyButton";

const ModalConfirmDelete = ({ visible, cancel, deleteItem, item }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 16 }}>
          <Text style={{ color: "red" }}>{item}</Text> бичлэгийг устгахад
          итгэлтэй байна уу?
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            width: "60%",
            justifyContent: "space-around"
          }}
        >
          <MyButton style={css.button} title="Хаах" onPress={cancel} />
          <MyButton style={css.button} title="Устга" onPress={deleteItem} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalConfirmDelete;

const css = StyleSheet.create({ button: { width: "40%" } });
