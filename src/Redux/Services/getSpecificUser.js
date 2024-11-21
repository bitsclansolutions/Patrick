import api from "../../utils/axiosInstance";
import { endpoints } from "../../utils/endpoints";

export const getSpecificUser = async (id) => {
    console.log("id", id);
  
    const response = await api.get(endpoints.getSpecificUser(id));
    return response;
  };