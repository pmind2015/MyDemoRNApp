import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import FlexboxScreen from "./src/screens/FlexboxScreen";
import FlatListScreen from "./src/screens/FlatListScreen";
import CustomListScreen from "./src/screens/CustomListScreen";
import PositionScreen from "./src/screens/PositionScreen";
import CourseListScreen from "./src/screens/CourseListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3498DB" },
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 22 }
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={({ route }) => ({
            title: route.params.garchig
              ? route.params.garchig
              : "Та нэвтэрнэ үү"
          })}
          initialParams={{ phone: 99332233, password: "213secret" }}
        />
        <Stack.Screen name="Flexbox" component={FlexboxScreen} />
        <Stack.Screen
          name="List"
          component={FlatListScreen}
          options={{ headerStyle: { backgroundColor: "#3498DB" } }}
        />
        <Stack.Screen
          name="CustomList"
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 100, height: 50 }}
                source={require("./assets/img/shop.png")}
              />
            )
          }}
          component={CustomListScreen}
        />
        <Stack.Screen name="Position" component={PositionScreen} />
        <Stack.Screen name="Course" component={CourseListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
