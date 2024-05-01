import React, { useState, useEffect, useContext } from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Button from "../../Components/Button";
import { loginUser, loadUser } from "../../Services/AuthService";
import AuthContext from "../../Context/AuthContext";
import Colors from "../../Constants/Color";
import ImageURL from "../../Constants/Image";
import { Controller, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./style";
import { loginSchema } from "../../Utils/validation";

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const validatedData = loginSchema.parse(data);
      await loginUser(validatedData);
      const user = await loadUser();
      console.info(`USER DATA LOGIN: ${user.name}`, user);
      setUser(user);

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Logged in successfully!",
      });
      navigation.navigate("Home");
    } catch (error) {
      console.error(`Error logging in:${user.name}`, error);

      if (error instanceof z.ZodError) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error.issues.map((issue) => issue.message).join("\n"),
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Login failed: " + error.message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginBottom: "25%",
        }}
      >
        <Image
          source={ImageURL.saiILamaLogo}
          style={{
            height: 100,
            width: 100,
            top: 60,
          }}
        />
      </View>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              keyboardType="email-address"
            />
          )}
          name="email"
          rules={{ required: "Email is required" }}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}

        <View style={styles.passwordContainer}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={!showPassword}
              />
            )}
            name="password"
            rules={{ required: "Password is required" }}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
        <Button
          title={loading ? "" : "Login"}
          onPress={handleSubmit(handleLogin)}
          loading={loading}
          textColor={Colors.white}
        />
      </View>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
        variant="link"
        textColor={Colors.primary}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
