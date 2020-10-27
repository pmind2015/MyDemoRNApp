import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { randomHex } from "randomize-hex";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import ModalConfirmDelete from "../components/ModalConfirmDelete";

const FlastListScreen = ({ navigation }) => {
  const [item, setItem] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [persons, setPersons] = useState([
    { name: "Амараа", color: "#D63031" },
    { name: "Нарсаа", color: "#AE1438" },
    { name: "Болдоо", color: "#74B9FF" },
    { name: "Сараа", color: "#26ae60" },
    { name: "Урнаа", color: "#6A89CC" }
  ]);

  const handleClick = name => {
    // let sum = 0;

    // persons.forEach(el => {
    //   sum = sum + el.name.length;
    //   console.log(el.name + " ===> " + el.name.length);
    //   console.log("Нийлбэр : " + sum);
    // });

    // if (sum % 2 == 1) Alert.alert(`Нийлбэр : ${sum} бөгөөд сондгой юм байна!`);
    // else Alert.alert(`Нийлбэр : ${sum} бөгөөд тэгш юм байна!`);

    setItem(name);
    setShowModal(true);
  };

  const deleteItem = () => {
    setPersons(oldPersons => oldPersons.filter(el => el.name !== item));
    setShowModal(false);
  };

  const addNewItem = () => {
    setPersons(persons => [...persons, { name: text, color: randomHex() }]);
    navigation.navigate("Login", { name: text });
  };

  return (
    <View>
      <ModalConfirmDelete
        deleteItem={deleteItem}
        item={item}
        visible={showModal}
        cancel={() => setShowModal(false)}
      />

      <View style={css.addContainer}>
        <MyInput
          style={css.addInput}
          onChangeText={newText => setText(newText)}
        />
        <MyButton title="Нэм" onPress={addNewItem} />
      </View>

      <FlatList
        keyExtractor={person => person.color}
        data={persons}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleClick(item.name)}>
            <View
              style={{
                backgroundColor: item.color,
                padding: 20,
                marginHorizontal: 10
              }}
            >
              <Text>
                {index + 1}) {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FlastListScreen;

const css = StyleSheet.create({
  addContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center"
  },
  addInput: {
    width: "70%"
  }
});
