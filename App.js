import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Welcome, TabNavigation, Profile } from "./src/Components/_Layout";
import {RegisterScreen, LoginScreen, Splash} from "./src/Screens";
import { loadUser } from "./src/Services/AuthService";
import AuthContext from "./src/Context/AuthContext";
import Routes from "./src/Constants/Routes";

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
        console.warn("Error loading user:", error);
      } finally {
        setStatus("idle");
      }
    };

    fetchUser();
  }, []);

  if (status === "loading") {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.Tab}>
          {user ? (
            <Stack.Screen name={Routes.Tab} component={TabNavigation} options={{headerShown: false}} />
          ) : (
            <Stack.Screen
              name={Routes.Welcome}
              component={Welcome}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Routes.Register} component={RegisterScreen} />
            <Stack.Screen name={Routes.Login} component={LoginScreen} />
          </Stack.Group>
            <Stack.Screen name={Routes.Profile} component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}
