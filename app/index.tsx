import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Categories from "@/Components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Restaurants from "@/Components/Restaurants";

const Page = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.header}>Dashboard </Text>
        <Categories />
        <Text style={styles.header}>Hey! Look into Last Week's Progress </Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Page;
