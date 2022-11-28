import React from "react";
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from "react-native";

import Logo from '../../assets/logo.png'

import { COLORS } from "../colors";

import Icon from 'react-native-vector-icons/Feather';

export default function TopMenu() {
  return <>
    <View style={styles.TopMenu}>

    <View style={styles.Logo}>
    <Image style={styles.ImageLogo} source={Logo} resizeMode={'contain'} />
    <Text style={styles.TextLogo}>TabNews</Text>
    </View>

    <View style={styles.Header}>
      <TouchableOpacity>
       <Icon style={styles.SearchIcon} name="search" size={25} color={COLORS.White} />
      </TouchableOpacity>
        

          <Tab data={2} color={COLORS.BlueTabCoins}/>
          <Tab data={4} color={COLORS.GreenTabCash}/>

    </View>

    </View>

  </>
}

const Tab = ({data, color}) => {
  return <>
  <TouchableOpacity style={styles.TabView}>

      <View style={[styles.Tab, {backgroundColor: color}]}></View>
      <Text style={styles.TabNumber}>{data}</Text>

    </TouchableOpacity>
  </>
}

const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    TopMenu: {
        width: '100%',
        height: windowHeight / 11,
        backgroundColor: COLORS.LightGray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      
        shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
    },

    Logo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ImageLogo: {
      width: 35,
      height: 35,
    },

    TextLogo: {
      color: COLORS.White,
      fontFamily: 'Roboto-Bold',
      marginHorizontal: 5,
      fontSize: 18,
    },


    Header: {
      flexDirection: 'row',
      alignItems: 'center'
     
    },

    SearchIcon: {
      marginHorizontal: 15,
    },
    TabView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 5,
    },

    TabNumber: {
        color: COLORS.White,
        fontFamily: 'Roboto-Regular',
        marginHorizontal: 5,
        fontSize: 14,
    },

    Tab: {
      width: 15,
      height: 15,
      borderRadius: 6,
      backgroundColor: COLORS.BlueTabCoins
    },
})