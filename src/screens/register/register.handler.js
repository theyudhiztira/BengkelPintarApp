import React from "react";
import Axios from 'axios';

export const registerHandler = async(data) => {
  try {
    const register = await Axios.post('https://a82fi9kfm5.execute-api.ap-southeast-1.amazonaws.com/auth/register', data)

    return {
      status: true,
      data: register.data.data
    }
  } catch (error) {
    if (error.response.status === 401) {
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