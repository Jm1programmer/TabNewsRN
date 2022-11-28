import React from "react";
import { Text, StyleSheet, View, Dimensions, TouchableOpacity} from "react-native";

import Logo from '../../assets/logo.png'

import { COLORS } from "../colors";

import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';

export default function Posts() {
  return <>
    <View style={styles.Posts}>
        <Text style={styles.Title}>1.  🌟 Meus projetos para mobile</Text>
        <Text style={styles.Info}>24 tabcoins · Aguiar · 1 dia</Text>
    </View>

  </>
}



const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    Posts: {
        width: '95%',
        minHeight: windowHeight / 7,
        backgroundColor: COLORS.DarkGray,
       margin: 10,
        justifyContent: 'space-between',
     
        paddingHorizontal: 40,
        alignSelf: 'center',
        borderRadius: 15,
        
       

    },

    Title: {
      color: COLORS.White,
      fontFamily: 'Roboto-Regular',
      fontSize: 14,
      paddingVertical: 10,
    },

    Info: {
        color: COLORS.White,
      fontFamily: 'Roboto-Regular',
      fontSize: 14,
      paddingVertical: 25,
      alignSelf: 'flex-end'
    }

})