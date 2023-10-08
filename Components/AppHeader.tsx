import { View, Text, StyleSheet, Image } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {
  LayoutDashboard,
  Search,
  SlidersHorizontal,
} from "lucide-react-native";
import { Link } from "expo-router";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import BottomSheet from "./BottomSheet";

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Search size={20} color={Colors.gbeige} style={styles.searchIcon} />
        <TextInput style={styles.input} placeholder="Search..." />
      </View>
      <Link href={"/(modal)/filter"} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <SlidersHorizontal
            size={20}
            style={styles.optionButton}
            color={Colors.secondary}
          />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const AppHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView>
      <BottomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("@/assets/images/Logo.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
          <Text style={styles.title}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dashboardButton}>
          <LayoutDashboard size={20} color={Colors.secondary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    width: 60,
    height: 50,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dashboardButton: {
    backgroundColor: Colors.gbeige,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.skyyblue,

    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    color: "black",
  },
  searchIcon: { paddingLeft: 7, paddingRight: 30 },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default AppHeader;
