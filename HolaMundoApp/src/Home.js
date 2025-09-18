import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>Bienvenido a mi página React 🚀</Text>
      <Text style={styles.homeSubtitle}>Este es un nuevo componente llamado Home.</Text>
    </View>
  );
}
const data = [
  { id: "1", title: "Primer elemento", color: "#ff9a9e" },
  { id: "2", title: "Segundo elemento", color: "#fad0c4" },
  { id: "3", title: "Tercer elemento", color: "#fbc2eb" },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: item.color }]}>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.header}>Mi Lista</Text>}
        ListFooterComponent={<Text style={styles.footer}>Fin de la lista</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  homeContainer: {
    padding: 20,
    alignItems: "center",
  },
  homeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  homeSubtitle: {
    fontSize: 16,
    color: "#666",
  },
  item: {
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
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


