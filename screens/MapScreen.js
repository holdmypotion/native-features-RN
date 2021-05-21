import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Map Screen</Text>
      <Text></Text>
      <Button
        title="To Next"
        onPress={() => navigation.navigate("PlacesList")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
