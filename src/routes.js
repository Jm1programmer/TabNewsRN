import React, {  useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecentScreen from "./screens/Recent";
import { COLORS } from "./colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();







export default function StackRoutes() {

    return (
      <Stack.Navigator 
      screenOptions={{
    headerShown: false,
  }}
    
  >
          <>
          <Stack.Screen name="Recent" component={RecentScreen} 
         
           />
          </>
      </Stack.Navigator>
    );

  

  
}

