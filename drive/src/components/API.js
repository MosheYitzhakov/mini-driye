import axios from "axios";


export const instance = axios.create({
    baseURL: process.env.NODE_ENV === "development"? "http://localhost:7000":"",
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });