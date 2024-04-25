import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { loadUser } from "./src/Services/AuthService";
import AuthContext from "./src/Context/AuthContext";

import { Welcome, Home } from "./src/Components/_Layout";

import RegisterScreen from "./src/Screens/AuthPage/RegisterScreen";
import LoginScreen from "./src/Screens/AuthPage/LoginScreen";
import SplashScreen from "./src/Screens/OnBordingPage/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await loadUser();
        setUser(user);
      } catch (error) {
        console.error("Error loading user:", error);
      } finally {
        setStatus("idle");
      }
    };

    fetchUser();
  }, []);

  if (status === "loading") {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name="Home" component={Home} />
          ) : (
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
