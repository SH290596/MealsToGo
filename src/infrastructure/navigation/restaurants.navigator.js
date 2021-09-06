import React from "react";

import { RestaurantsScreen } from "../../features/restaurants/Screens/restaurants.screen";
import { createStackNavigator } from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

export const RetaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
