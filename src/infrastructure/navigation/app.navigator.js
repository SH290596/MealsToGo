import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../components/Utility/safe-area.component";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { RetaurantsNavigator } from "./restaurants.navigator";
import { RestaurantsScreen } from "../../features/restaurants/Screens/restaurants.screen";

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Maps: "md-map",
  Settings: "md-settings",
};
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "grey",
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Maps" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
