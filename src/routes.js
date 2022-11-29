import React, {  useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecentScreen from "./screens/Recent";
import PostScreen from "./screens/Post";

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

          <Stack.Screen name="Post" component={PostScreen} 
                  
                  />
          </>
      </Stack.Navigator>
    );

  

  
}

