import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

export default function({ route, navigation }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    // Alert.alert(`Таны утас: ${phone}, нууц үг: ${password}`);
    navigation.push("Login", {
      phone,
      password,
      garchig: "Таны нууц үг дээр байна"
    });
  };

  const phone1 = route.params ? route.params.phone : "no";
  const password1 = route.params ? route.params.password : "no";
  const name = route.params ? route.params.name : "no";

  return (
    <View>
      <Text>
        {phone1} ==> {password1} ==> {name}
      </Text>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={require("../../assets/img/shop.png")}
      />
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        {phone} - {password}
      </Text>

      <MyInput
        askeyboardType="number-pad"
        placeholder="Та утасны дугааараа оруулна уу"
        onChangeText={setPhone}
      />

      <MyInput
        secureTextEntry={true}
        placeholder="Нууц үгээ оруулна уу"
        onChangeText={setPassword}
      />
      <MyButton
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
      <MyButton title="Нэвтрэх" onPress={loginHandler} />
      <MyButton title="Буцах" onPress={() => navigation.popToTop()} />
      <MyButton title="List" onPress={() => navigation.navigate("List")} />
    </View>
  );
}

const css = StyleSheet.create({
  inputField: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10
  },
  button: {
    marginVertical: 5
  }
});
