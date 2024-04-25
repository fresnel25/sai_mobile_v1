import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Home } from "./src/Components/_Layout";
import RegisterScreen from "./src/Screens/AuthPage/RegisterScreen";
import LoginScreen from "./src/Screens/AuthPage/LoginScreen";
import AuthContext from "./src/Context/AuthContext";
import { loadUser } from "./src/Services/AuthService";
import { useState, useEffect } from "react";
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
    return null; 
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          {user ? (
            <Stack.Screen name="Home" component={Home} />
          ) : (
            <Stack.Screen name="Welcome" component={Welcome} />
          )}
          {/* <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Welcome" component={Welcome} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
