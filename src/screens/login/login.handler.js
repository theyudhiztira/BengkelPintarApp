import React from "react";
import Axios from "axios";
import { AuthContext } from "../../context/authContext";


export const loginHandler = async(data) => {
  try {
    const login = await Axios.post('https://a82fi9kfm5.execute-api.ap-southeast-1.amazonaws.com//auth/login', data)
    
    return {
      status: true,
      data: login.data.data
    }
  } catch (error) { 
    if(error.response.status === 401){
      return {
        status: false,
        message: error.response.data.error
      }
    }
    
    return {
      status: false,
      message: "Server is currently down!"
    }
  }
}