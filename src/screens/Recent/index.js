import React, {useEffect,useState} from "react";
import { Text, StyleSheet, View } from "react-native";

import { COLORS } from "../../colors";


import TopMenu from "../../components/topMenu";
import BottomMenu from '../../components/BottomMenu';
import PostsFlatList from "../../components/postsFlatlist";
import api from "../../services/api";


export default function RecentScreen() {



 
 

  return <>
    
    <View style={styles.screen}>
    <TopMenu />
    <PostsFlatList />
 

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