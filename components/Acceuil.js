import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = require('../assets/acceuil.png')

export default function Acceuil() {
  return(
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    </ImageBackground>
  </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "white"
  }
});