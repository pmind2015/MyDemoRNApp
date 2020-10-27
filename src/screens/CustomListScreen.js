import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { randomHex } from "randomize-hex";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
const CustomList = () => {
  const [text, setText] = useState("");
  const [persons, setPersons] = useState([
    { name: "Амараа", color: "#D63031" },
    { name: "Нараа", color: "#AE1438" },
    { name: "Болдоо", color: "#74B9FF" },
    { name: "Сараа", color: "#26ae60" },
    { name: "Урнаа", color: "#6A89CC" }
  ]);

  const handleClick = name => {
    Alert.alert(`Сайн байна уу : ${name}`);
  };

  const addNewItem = () => {
    setPersons(persons => [...persons, { name: text, color: randomHex() }]);
  };

  return (
    <ScrollView style={css.myList}>
      <View style={css.addContainer}>
        <MyInput
          style={css.addInput}
          onChangeText={newText => setText(newText)}
        />
        <MyButton title="Нэм" onPress={addNewItem} />
      </View>
      {persons.map((el, index) => (
        <View
          key={index}
          style={{ ...css.listItem, backgroundColor: el.color }}
        >
          <Text>
            {index + 1}) {el.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CustomList;

const css = StyleSheet.create({
  myList: {
    marginHorizontal: 20
  },
  listItem: {
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },
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
