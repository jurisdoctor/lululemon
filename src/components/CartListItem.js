import { Image, StyleSheet, Text, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import { changeQuantity } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const CartListItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(
      changeQuantity({
        productId: cartItem.product.id,
        amount: 1,
      })
    );
  };

  const decreaseQuantity = () => {
    dispatch(
      changeQuantity({
        productId: cartItem.product.id,
        amount: -1,
      })
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.footer}>
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>
            ${cartItem.product.price * cartItem.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    aspectRatio: 1,
    width: "40%",
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  size: {
    color: "gray",
    fontSize: 16,
  },
  quantity: {
    color: "gray",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  footer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: "auto",
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: "auto",
  },
});

export default CartListItem;
