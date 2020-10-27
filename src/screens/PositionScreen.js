import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const PositionScreen = () => {
  return (
    <View style={css.parent}>
      <View style={css.view2}></View>
      <ScrollView>
        <View style={css.view1}></View>
        <View style={css.view3}></View>
        <View style={css.view1}></View>
        <View style={css.view3}></View>
        <View style={css.view1}></View>
        <View style={css.view3}></View>
        <View style={css.view1}></View>
        <View style={css.view3}></View>
        <View style={css.view1}></View>
        <View style={css.view3}></View>
        <View style={css.view1}></View>
        <View style={css.view3}></View>
        <View style={css.view1}></View>
        <View style={css.view3}></View>
      </ScrollView>
    </View>
  );
};

export default PositionScreen;

const css = StyleSheet.create({
  parent: {
    flex: 1,
    borderColor: "black",
    borderWidth: 3,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  view1: {
    height: 70,
    width: 70,
    borderColor: "red",
    borderWidth: 3
  },
  view2: {
    bottom: 10,
    right: 10,
    position: "absolute",
    height: 70,
    width: 70,
    borderColor: "green",
    borderWidth: 3
  },
  view3: {
    height: 70,
    width: 70,
    borderColor: "purple",
    borderWidth: 3
  }
});
