import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import MyButton from "../components/MyButton";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false
  })
});

const Home = ({ navigation }) => {
  const createNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the first local notification we are sending!",
        data: { mySpecialData: "Some text" }
      },
      trigger: {
        seconds: 5
      }
    });
  };

  function schedulePushNotification() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" }
      },
      trigger: { seconds: 5 }
    });
    console.log("ppp");
  }
  return (
    <View>
      <Text style={{ textAlign: "center", marginVertical: 20 }}>
        Амазон номын дэлгүүр
      </Text>

      <MyButton
        onPress={() => navigation.navigate("Course")}
        title="1234.mn - Шинэ хичээлүүд"
      />

      <MyButton
        onPress={() => navigation.navigate("Login")}
        title="Логин дэлгэц"
      />

      <MyButton
        onPress={() => navigation.navigate("Flexbox")}
        title="Flexbox"
      />

      <MyButton onPress={() => navigation.navigate("List")} title="FlatList" />

      <MyButton
        onPress={() => navigation.navigate("CustomList")}
        title="CustomList"
      />

      <MyButton
        onPress={() => navigation.navigate("Position")}
        title="Position"
      />

      <MyButton onPress={schedulePushNotification} title="Position" />
    </View>
  );
};

export default Home;
