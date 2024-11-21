import api from "../../utils/axiosInstance";
import { endpoints } from "../../utils/endpoints";

export const getAllUsersService = async () => {
  const response = await api.get(endpoints.getUsers());
  return response;
};
