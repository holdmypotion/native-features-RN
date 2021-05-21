import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import ImgPicker from "../components/ImgPicker";

import Colors from "../constants/Colors";
import { addPlace } from "../store/placesSlice";

export default function NewPlaceScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Place",
    });
  });

  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    // Maybe add Validations here
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    console.log(titleValue, selectedImage);
    dispatch(addPlace({ title: titleValue, image: selectedImage }));
    navigation.goBack();
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath.toString());
  };
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
          autoFocus
        />
        <ImgPicker onImageTaken={imageTakenHandler} />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: { margin: 30 },
  label: { fontSize: 18, marginBottom: 15 },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});
