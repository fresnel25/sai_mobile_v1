import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Home from "../Home";
import Statistics from "../Statistics";
import Notification from "../Notification";
import { InvoicePage, AppointmentPage } from "../../../Screens";
import Routes from "../../../Constants/Routes";
import Colors from "../../../Constants/Color";
import CustomHeader from "../../Header/CustomHeader";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case Routes.Home:
              iconName = focused ? "home" : "home-outline";
              break;
            case Routes.Statistics:
              iconName = focused ? "stats-chart" : "stats-chart-outline";
              break;
            case Routes.Appointment:
              iconName = focused ? "calendar" : "calendar-outline";
              break;
            case Routes.Invoice:
              iconName = focused ? "receipt" : "receipt-outline";
              break;
            case Routes.Notification:
              iconName = focused ? "notifications" : "notifications-outline";
              break;
            default:
              iconName = Routes.Home;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.grey,
        tabBarBackground: () => (
          <BlurView
            intensity={100}
            style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          />
        ),
        tabBarStyle: {
          backgroundColor: Colors.transparent,
          borderRightLeftRadius: 30,
          position: "absolute",
          elevation: 0,
          // marginHorizontal: 20,
          // marginBottom: 20,
          padding: 5,
          height: 70,
        },
      })}
    >
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{ header: () => <CustomHeader/> }}
      />
      <Tab.Screen
        name={Routes.Statistics}
        component={Statistics}
        options={{ presentation: "modal" }}
      />
      <Tab.Screen
        name={Routes.Appointment}
        component={AppointmentPage}
        options={{ presentation: "card" }}
      />
      <Tab.Screen name={Routes.Invoice} component={InvoicePage} />
      <Tab.Screen name={Routes.Notification} component={Notification} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
