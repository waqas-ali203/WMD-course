import useCounter from "@/hooks/useCounter";
import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const Counter = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>

      <View style={styles.buttonRow}>
        <View style={styles.buttonBox}>
          <Button onPress={increment} title="+" color="#007AFF" />
        </View>
        <View style={styles.buttonBox}>
          <Button onPress={decrement} title="-" color="#FF9500" />
        </View>
        <View style={styles.buttonBox}>
          <Button onPress={reset} title="Reset" color="#FF3B30" />
        </View>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100,
    alignItems: "center",
  },
  counter: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 40,
  },
  buttonRow: {
    display : "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  buttonBox: {
    width:"30%",
    borderRadius: 15,
    overflow: "hidden",
  },
});
