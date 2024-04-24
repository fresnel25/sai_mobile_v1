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
import axios from "../../Utils/axios";
import * as SecureStore from "expo-secure-store";



export default function LoginPage({navigation}) {
    
  const [email, setEmail] = useState("ngaleufresnel@gmail.com");
  const [password, setPassword] = useState("25576738");
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    setErrors({});
    try {
      const { data } = await axios.post("api/users/login", {
        email,
        password,
      });
      if(data.status) {
        console.log("res", data);
        const { token, user } = data;
        await SecureStore.setItemAsync("token", token);
        navigation.navigate("Home",{accessToken:token, user});
      }
      else{
        alert("login error");
      }
      
    } catch (e) {
      if (e.response?.status === 422) {
        setErrors(e.response.data.errors);
      } else {
        console.error(e); 
      }
    }
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
