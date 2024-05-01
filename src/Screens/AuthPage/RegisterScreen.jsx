import { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { registerUser } from "../../Services/AuthService";
import { useForm, Controller } from "react-hook-form";
import { registerSchema } from "../../Utils/validation";
import Toast from "react-native-toast-message";
import AuthContext from "../../Context/AuthContext";
import Button from "../../Components/Button";
import Colors from "../../Constants/Color";
import ImageURL from "../../Constants/Image";
import { styles } from "./style";
const RegisterScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
    // Add setValue from useForm
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("name", "menoc61");
    setValue("email", "meno@example.com");
    setValue("password", "momeni@c61");
    setValue("phone", "1234567890");
    setValue("gender", "Male");
    setValue("birthday", "2000-01-01");
    setValue("address", "123 Main St");
  }, [setValue]);
  const handleRegister = async (formData) => {
    try {
      setLoading(true);
      const validatedData = registerSchema.parse(formData);
      const user = await registerUser(validatedData);
      console.info(`USER DATA REGISTER: ${user.name}`, user);
      setUser(user);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Registration successful"+ user.message ,
      });
      navigation.navigate("Home");
    } catch (error) {
      console.error(`Registration failed: ${user.name}`, error.message);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Registration failed: " + error.message,
      });
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
              style={styles.input}
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
          rules={{ required: "Name is required" }}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

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
        {errors.email && <Text>{errors.email.message}</Text>}

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
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Phone"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="phone"
          rules={{ required: "Phone is required" }}
        />
        {errors.phone && <Text>{errors.phone.message}</Text>}

        <View style={styles.input}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Picker
                selectedValue={value}
                onValueChange={onChange}
                onBlur={onBlur}
                style={{ color: Colors.black }}
              >
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            )}
            name="gender"
            rules={{ required: "Gender is required" }}
          />
        </View>
        {errors.gender && <Text>{errors.gender.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Birthday"
              onBlur={onBlur}
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="birthday"
          rules={{ required: "Birthday is required" }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="address"
          rules={{ required: "Address is required" }}
        />

        <Button
          title={loading ? "" : "Register"}
          onPress={handleSubmit(handleRegister)}
          loading={loading}
          textColor={Colors.white}
        />

        <Button
          title="Login"
          onPress={() => {
            navigation.navigate("Login");
          }}
          variant={"link"}
          textColor={Colors.primary}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;