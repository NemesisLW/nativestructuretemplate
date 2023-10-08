import { View, Text, StyleSheet } from "react-native";
import React, { forwardRef, useCallback, useMemo, useState } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { ChevronRight, MapPin } from "lucide-react-native";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const snapPoints = useMemo(() => ["32%"], []);
  const { dismiss } = useBottomSheetModal();

  const [selectedOption, setSelectedOption] = useState("Chats");

  //   Toggle Logic is Broken
  const toggleOption = () => {
    setSelectedOption((prevOption) =>
      prevOption === "Chats" ? "Journals" : "Chats"
    );
  };

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: Colors.primary }}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity
            style={[
              styles.toggleActive,
              selectedOption === "Chats" && {
                backgroundColor: Colors.skyyblue,
              },
            ]}
          >
            <Text id="Chats" style={styles.optionsText} onPress={toggleOption}>
              Chats
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleActive,
              selectedOption === "Journals" && {
                backgroundColor: Colors.skyyblue,
              },
            ]}
          >
            <Text style={styles.optionsText} onPress={toggleOption}>
              Journals
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subheader}>Quick Search</Text>
      <Link href={"/(modal)/locationSearch"} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <MapPin size={20} color={Colors.secondary} />
            <Text style={{ flex: 1 }}>
              Drop Your Location | What are you looking for...?
            </Text>
            <ChevronRight size={20} color={Colors.secondary} />
          </View>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    color: "white",
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 32,
  },
  toggleActive: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  optionsText: {
    color: "#fff",
    fontWeight: "700",
  },

  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 16,
    fontWeight: "600",
    margin: 10,
    color: "white",
  },
  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderColor: Colors.skyyblue,
    borderWidth: 3,
    borderRadius: 25,
  },
});

export default BottomSheet;
