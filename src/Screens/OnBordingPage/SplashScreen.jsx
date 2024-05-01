import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { BlurView } from "expo-blur";
import Colors from "../../Constants/Color";

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <BlurView intensity={100} style={StyleSheet.absoluteFill}>
        <View style={styles.content}>
          <Text style={styles.title}>Sai I Lama Beauty Spa Salon</Text>
          <Text style={styles.subtitle}>Where Beauty Meets Serenity</Text>
          <ActivityIndicator color={Colors.white} size="large" />
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.white,
    marginBottom: 20,
  },
});

export default Splash;
