import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView from "react-native-maps";

const locationSearch = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: 88.5021,
    longitude: 23.4013,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView showsUserLocation={false} style={styles.map} />
      <View style={styles.absoluteBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  absoluteBox: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: Colors.secondary,
    padding: 16,
    margin: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  boxIcon: {
    position: "absolute",
    left: 15,
    top: 18,
    zIndex: 1,
  },
});

export default locationSearch;

// <GooglePlacesAutocomplete
// placeholder="Search or move the map"
// fetchDetails={true}
// onPress={(data, details) => {
//   const point = details?.geometry?.location;
//   if (!point) return;
//   setLocation({
//     ...location,
//     latitude: point.lat,
//     longitude: point.lng,
//   });
// }}
// query={{
//   key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
//   language: 'en',
// }}
// renderLeftButton={() => (
//   <View style={styles.boxIcon}>
//     <Ionicons name="search-outline" size={24} color={Colors.medium} />
//   </View>
// )}
// styles={{
//   container: {
//     flex: 0,
//   },
//   textInput: {
//     backgroundColor: Colors.grey,
//     paddingLeft: 35,
//     borderRadius: 10,
//   },
//   textInputContainer: {
//     padding: 8,
//     backgroundColor: '#fff',
//   },
// }}
// />
