import { useRoute } from "@react-navigation/native";
import React, {useEffect,useState} from "react";
import { Text, StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native";
import { COLORS } from "../../colors";
 import api from "../../services/api";

import Markdown from "react-native-markdown-display";
import Markdownstyles from "../../styles/markdownStyles";


export default function Post() {

    const [loading, setLoading] = useState(true);

    const route = useRoute()
    const owner_username = route.params.owner_username;
    const slug = route.params.slug;
    async function GetContent() {
        const baseUrl = 'https://www.tabnews.com.br';
          try {
              const resultado =  await api.get(`${baseUrl}/api/v1/contents/${owner_username}/${slug}`)
              return resultado.data
              
          }
          
          catch (error) {
              console.log(error)
              return {}
          }
      }

    const [lista, setLista] = useState([])

    const getContent = async () => {
        const resultado = await GetContent()
        setLista(resultado)
        setLoading(false)
     }


     useEffect(() => {
        getContent()
        
     }, [])


     if (loading == false) {
  return <>
    
    <View style={styles.post}>
        
        <Text style={styles.title}>{lista.title}</Text>
        <Markdown
         style={Markdownstyles}
         >{`${lista.body}`}</Markdown>
    </View>
    
  </>
} else {
    return <Loading />
}
} 


function Loading() {
    return <>
    <ActivityIndicator size={'large'} color={COLORS.White} />
    </>
}

const styles = StyleSheet.create({
    post: {
        flex: 1,
        backgroundColor: COLORS.LightGray,
      marginLeft: 10,
        marginTop: 10,
    },
    title: {
        color: COLORS.White,
        fontFamily: 'Roboto-Regular',
        fontSize: 24,
        paddingVertical: 10,
    },
    body: {
        color: COLORS.White,
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        paddingVertical: 10,
        
    },
})