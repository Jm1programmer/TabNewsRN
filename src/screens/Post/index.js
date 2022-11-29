import React, {useEffect,useState} from "react";
import { Text, StyleSheet, View } from "react-native";

import { COLORS } from "../../colors";


import TopMenu from "../../components/topMenu";
import BottomMenu from '../../components/BottomMenu'




export default function PostScreen() {


  return <>
    
    <View style={styles.screen}>
    <TopMenu />
   
 

    </View>
    <BottomMenu />
  </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.LightGray,
    },
})