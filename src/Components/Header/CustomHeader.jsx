import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Colors from "../../Constants/Color";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../Constants/Routes";

const CustomHeader = () => {
  const { top } = useSafeAreaInsets();
const navigation = useNavigation();
  const handleStatisticsPress = () => {
    navigation.navigate(Routes.Statistics, { presentation: 'modal' });
  };

  const handleProfilePress = () => {
    navigation.navigate(Routes.Profile, { presentation: 'modal' });
  };

  return (
    <BlurView intensity={80} tint="light" style={{ paddingTop: top }}>
      <View
        style={[
          styles.container,
          {
            height: 60,
            gap: 10,
            paddingHorizontal: 20,
            backgroundColor: "transparent",
          },
        ]}
      >
        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcon}
            name="search"
            size={20}
            color={Colors.dark}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={Colors.dark}
          />
        </View>
        <TouchableOpacity style={styles.circle} onPress={handleStatisticsPress}>
          <Ionicons name={"stats-chart"} size={20} color={Colors.dark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={handleProfilePress}>
          <Ionicons name={"people"} size={20} color={Colors.dark} />
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    padding: 10,
    backgroundColor: Colors.gray,
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    borderRadius: 30,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: Colors.lightGray,
    color: Colors.dark,
    borderRadius: 30,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});
