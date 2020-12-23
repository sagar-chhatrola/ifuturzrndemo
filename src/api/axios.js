import axios from "axios";
import { API_URL } from "./config";
import { reset } from "../services/RootNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';

// const logout = () =>{
//             reset('Login')
//             AsyncStorage.removeItem('user_type')
//             AsyncStorage.removeItem('access_token')
// }

const convertJsonToFormData = (json) =>{
    var form_data = new FormData();

    for ( var key in json ) {
        form_data.append(key, json[key]);
    }

    return form_data

}

export const axiosPost = async (url,data,Content_Type) =>{
    const header = {Authorization:`Bearer ${global.access_token}`,'Content-Type': Content_Type || 'multipart/form-data'};
    try{
        console.log("data",data,global.access_token)
        if(Content_Type!='application/json'){
            data = convertJsonToFormData(data)
        }
        
        
        
        let response = await axios.post(`${API_URL}${url}`, data,{headers:header})
        if(response.status==401){
            //logout()
        }
        

        return response
    }
    catch(e){
        
        if(e.response.status==401){
            //logout()
        }
        

        return {success:false,error:e}
    }
    
}

export const axiosGet = async (url) =>{
    const header = {Authorization:`Bearer ${global.access_token}`};
    try{
        
    let response = await axios.get(`${API_URL}${url}`,{headers:header})
    if(response.status==401){
        //logout()
    }
    

    return response
    }
    catch(e){
        if(e.response.status==401){
            //logout()
        }
        

        return {success:false,error:e}
    }
}

export const axiosPut = async (url,data) =>{
    const header = {Authorization:`Bearer ${global.access_token}`,'Content-Type': 'multipart/form-data'};
    try{
    console.log("data",data)
    data = convertJsonToFormData(data)
    let response = await axios.put(`${API_URL}${url}`, data,{headers:header})
    if(response.status==401){
        //logout()
    }
    return response
    }
    catch(e){
        if(e.response.status==401){
            //logout()
        }
        return {success:false,error:e}
    }
}

export const axiosPatch = async (url,data) =>{
    const header = {Authorization:`Bearer ${global.access_token}`,'Content-Type': 'multipart/form-data'};
    try{
     console.log("data",data)
     data = convertJsonToFormData(data)
    let response = await axios.patch(`${API_URL}${url}`, data,{headers:header})
    if(response.status==401){
        //logout()
    }
    return response
    }
    catch(e){
        if(e.response.status==401){
            //logout()
        }
        return {success:false,error:e}
    }
}

export const axiosDelete = async (url) =>{
    const header = {Authorization:`Bearer ${global.access_token}`};
    try{

    let response = await axios.delete(`${API_URL}${url}`,{headers:header})
    console.log("response",response.data)
    if(response.status==401){
        //logout()
    }
    return response
    }
    catch(e){
        if(e.response.status==401){
            //logout()
        }
        return {success:false,error:e}
    }
}