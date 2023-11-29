import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import ProductScreen from "./src/screens/ProductScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      {/* <ProductDetailScreen /> */}
      <ShoppingCart />
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
