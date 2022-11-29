
import api from "./api";

export async function GetContent() {
  const baseUrl = 'https://www.tabnews.com.br';
    try {
        const resultado =  await api.get(`${baseUrl}/api/v1/contents?page=10`)
        return resultado.data

    }
    
    catch (error) {
        console.log(error)
        return {}
    }
}