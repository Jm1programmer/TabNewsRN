

import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import Posts from "./posts";
import { COLORS } from "../colors";

import api from "../services/api";

export default function PostsFlatList() {
    const per_page = 5;
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

async function GetContent() {

  
  const baseUrl = 'https://www.tabnews.com.br';
    try {
        const resultado =  await api.get(`${baseUrl}/api/v1/contents?page=${page}&per_page=${per_page}`)
        return resultado.data

    }
    
    catch (error) {
        console.log(error)
        return {}
    }
}

   
    const [lista, setLista] = useState([]);
        
    const getContent = async () => {
        const resultado = await GetContent()
        setLista(prev => [...prev,...resultado])
        setPage(page + 1)
        setLoading(false)
     }
    
    
     useEffect(() => {
        if (loading) return;

        setLoading(true)

      getContent()
     }, [])
return <>
        <FlatList 
        data={lista}
        renderItem={({ item }) =>  <Posts  {...item}  />  }
        keyExtractor={({id}) => id}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<ActivityIndicator size={'large'} color={COLORS.White} />}
        onEndReached={getContent}
        onEndReachedThreshold={0.1}
        
         />

         
    </>
}


