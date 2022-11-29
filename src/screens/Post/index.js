import React, {useEffect,useState} from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { COLORS } from "../../colors";


import TopMenu from "../../components/topMenu";
import BottomMenu from '../../components/BottomMenu';
import Post from "./post";



export default function PostScreen() {


  return <>
    
    <View style={styles.screen}>
    <TopMenu />

  <ScrollView>
    <Post />
    </ScrollView>

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