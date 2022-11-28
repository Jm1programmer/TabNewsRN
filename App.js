import React, {useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from "./src/routes";


export default  function App() {
  
  return <>



      <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
    
  </>
 

}

