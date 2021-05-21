import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as FileSystem from "expo-file-system";

const initialState = {
  places: [],
  status: "idle",
  error: null,
};

export const addPlace = createAsyncThunk(
  "places/addPlace",
  async ({ title, image }) => {
    try {
      const fileName = image.split("/").pop();
      const newPath = FileSystem.documentDirectory + fileName;
      const res = await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const newPlace = {
        id: new Date().toString(),
        title: title,
        imageUri: newPath,
      };

      return newPlace;
    } catch (err) {
      throw err;
    }
  }
);

export const placesSlice = createSlice({
  name: "place",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPlace.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPlace.fulfilled, (state, action) => {
        state.status = "idle";
        state.places.push(action.payload);
      })
      .addCase(addPlace.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default placesSlice.reducer;

export const selectAllPlaces = (state) => state.places.places;

export const selectPlaceById = (state, placeId) =>
  state.places.places.find((place) => place.id === placeId);
