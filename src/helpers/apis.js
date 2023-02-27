import axios from "axios";
import { baseURL } from "../utils/api";

export const getServices = async (
     ) => {
    const { data } = await axios({
        url: `${baseURL}/user/getServices`,
        method: "GET",
    
    });
    console.log('getCategories', data)
    return data?.services
};
export const getPolicyTerms = async (
    ) => {
   const { data } = await axios({
       url: `${baseURL}/policyterms/getpolicyterms`,
       method: "GET",
   
   });
   console.log('getCategories', data)
   return data
};

