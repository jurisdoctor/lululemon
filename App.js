import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import products from "./src/data/products";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        numColumns={2}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  itemContainer: {
    padding: 1,
    width: "50%",
  },

  image: {
    aspectRatio: 1,
    width: "100%",
  },
});
