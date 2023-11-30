import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { selectDeiveryPrice, selectSubtotal } from "../store/cartSlice";

import CartListItem from "../components/CartListItem";
import cart from "../data/cart";
import { useSelector } from "react-redux";

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeiveryPrice);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>${subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>${deliveryFee}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Tax</Text>
        <Text style={styles.text}>${(subtotal * 0.0975).toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>
          ${(subtotal * 1.0975 + deliveryFee).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    borderColor: "gainsboro",
    borderTopWidth: 1,
    margin: 20,
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    color: "gray",
    fontSize: 16,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },

  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 100,
    bottom: 100,
    padding: 20,
    width: "90%",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ShoppingCart;
