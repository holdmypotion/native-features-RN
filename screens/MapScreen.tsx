import React from "react"
import {StyleSheet, View, Text, Button} from "react-native"
import { MapNavigationProp } from "../types";

type Props = {
  navigation: MapNavigationProp
}

export default function MapScreen({navigation}:Props) {
  return (
    <View style={styles.container}>
      <Text>Map Screen</Text>
      <Button title="To Next" onPress={() => navigation.navigate("PlacesList")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});