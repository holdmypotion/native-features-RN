import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function PlacesListScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "All Places",
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Entypo
              name="add-to-list"
              size={24}
              color="white"
              onPress={() => {
                navigation.navigate("NewPlace");
              }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <View>
      <StatusBar style="light" />
      <Text>places List</Text>
    </View>
  );
}
