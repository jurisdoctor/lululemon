import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import ProductScreen from "./src/screens/ProductScreen";
import { StatusBar } from "expo-status-bar";
import products from "./src/data/products";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      <ProductDetailScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
