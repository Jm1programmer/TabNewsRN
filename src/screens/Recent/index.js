import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { COLORS } from "../../colors";


import TopMenu from "../../components/topMenu";
import BottomMenu from '../../components/BottomMenu'
import Posts from "../../components/posts";



export default function RecentScreen() {
  return <>
    
    <View style={styles.screen}>
    <TopMenu />
    
    <Posts />
    <Posts />

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