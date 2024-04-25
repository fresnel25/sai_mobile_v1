import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Platform,
} from "react-native";
import React from "react";
import { useState } from "react";
import FormTextField from "../../Components/Input/FormTextField";
import { loadUser, login } from "../../Services/AuthService";

const LoginScreen =({ navigation }) =>{
  const [email, setEmail] = useState("hote1@gmail.com");
  const [password, setPassword] = useState("hote1");
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    setErrors({});

      await login({ email, password });
      const user = await loadUser();
      navigation.navigate("Home", user);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20, rowGap: 17 }}>
        <FormTextField
          label={"Email address:"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          errors={errors.email}
        />
        <FormTextField
          label={"Password:"}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          errors={errors.password}
        />
        <Button title="Se connecter" onPress={handleLogin}></Button>
      </View>
    </SafeAreaView>
  );
}
export default LoginScreen;