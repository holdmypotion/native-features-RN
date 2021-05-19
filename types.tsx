import { StackNavigationProp } from "@react-navigation/stack"

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
}

export type AppStackParamList = {
  Map: undefined;
  NewPlace: undefined;
  PlacesList: undefined;
  PlaceDetail: undefined;
}

export type MapNavigationProp = StackNavigationProp<AppStackParamList, 'Map'>;
export type NewPlaceNavigationProp = StackNavigationProp<AppStackParamList, 'NewPlace'>;
export type PlaceDetailNavigationProp = StackNavigationProp<AppStackParamList, 'PlaceDetail'>;
export type PlacesListNavigationProp = StackNavigationProp<AppStackParamList, 'PlacesList'>;