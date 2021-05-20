import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlacesListScreen from "../screens/PlacesListScreen";
import { Platform, Text, View } from "react-native";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="PlacesList"
      screenOptions={defaultNavigationOptions}
    >
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
      <Stack.Screen name="PlacesList" component={PlacesListScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
    </Stack.Navigator>
  );
}
