import React from "react";
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
import {FlatList, SafeAreaView } from "react-native";
import{ Home } from "./src/Home";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola React Native!</Text>
      <Text style={styles.subtitle}>Styling con StyleSheet</Text>
      <Text style={styles.parrafo}>Este es un parrafo de prueba para comprender un poco mejor el desarrollo movil</Text>
      <Button title="Link" onPress={() => Alert.alert("Botón presionado")} />
    </View>
  );
}

//prueba commit

// Define los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    
  },

  parrafo: {
    fontSize: 10,
    justifyContent: "center",
    fontFamily: "Arial",
    color: "black",
    padding: 20,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  container1: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  item: {
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  footer: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
    color: "#666",
  },
  separator: {
    height: 10,
    backgroundColor: "transparent",
  },

  
});
