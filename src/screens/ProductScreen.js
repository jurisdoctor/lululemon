import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedProduct } from "../store/productsSlice";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { products } = useSelector((state) => state.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            console.log(item);
            dispatch(setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 1,
    width: "50%",
  },
  image: {
    aspectRatio: 1,
    width: "100%",
  },
});

export default ProductScreen;
