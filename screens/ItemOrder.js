import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ItemOrder({ coffee }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <MaterialCommunityIcons name="coffee" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{coffee.name}</Text>
          <Text style={styles.price}>{coffee.price} BYN</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.quantity}>{coffee.quantity}</Text>
        <Text style={styles.total}>{coffee.total} BYN</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#999",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  total: {
    fontSize: 14,
    color: "#999",
  },
});

export default ItemOrder;