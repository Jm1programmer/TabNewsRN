import React from "react";
import {  StyleSheet, View, Dimensions, TouchableOpacity} from "react-native";

import Logo from '../../assets/logo.png'

import { COLORS } from "../colors";

import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export default function BottomMenu() {
  const navigation = useNavigation()
  return <>
  
    <View style={styles.BottomMenu}>

    <TouchableOpacity onPress={() => {
      navigation.navigate('Recent')
    }} >
     <AIcon style={styles.SearchIcon} name="home" size={25} color={COLORS.White} />
    </TouchableOpacity>

    <TouchableOpacity>
    <AIcon style={styles.SearchIcon} name="hearto" size={25} color={COLORS.White} />
    </TouchableOpacity>
   
    <TouchableOpacity>
     <FIcon style={styles.SearchIcon} name="plane" size={25} color={COLORS.White} />
    </TouchableOpacity>
  
  <TouchableOpacity>
    <FIcon style={styles.SearchIcon} name="user-circle" size={25} color={COLORS.White} />
  </TouchableOpacity>

   
    </View>

  </>
}



const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    BottomMenu: {
        width: '100%',
        height: windowHeight / 11,
        backgroundColor: COLORS.LightGray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        elevation: 10,

        
        borderColor: "rgba(0,0,0,.2)",
        borderWidth: 1,

    },

})