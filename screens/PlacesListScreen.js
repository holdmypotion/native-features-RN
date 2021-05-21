import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectAllPlaces } from "../store/placesSlice";
import PlaceItem from "../components/PlaceItem";

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

  const places = useSelector(selectAllPlaces);
  console.log(places);
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            navigation.navigate("PlaceDetail", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
}
