import React from "react";
import { Text, StyleSheet, View, Dimensions, TouchableOpacity} from "react-native";

import Logo from '../../assets/logo.png'

import { COLORS } from "../colors";

import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export default function Posts({title, tabcoins, owner_username, children_deep_count, slug }) {

 

 const navigation = useNavigation()
  return <>
    <TouchableOpacity style={styles.Posts} onPress={() => {
      navigation.navigate('Post', {slug: slug, owner_username: owner_username,})
    }} >
        <Text style={styles.Title}>{title}</Text>
        <Text style={styles.Info}>{tabcoins} tabcoins · {owner_username} · {children_deep_count} comentarios</Text>
    </TouchableOpacity>

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
      fontSize: 12,
      alignSelf: 'flex-end',
      paddingVertical: 26,
     
    }

})