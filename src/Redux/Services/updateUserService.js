import api from "../../utils/axiosInstance";
import { endpoints } from "../../utils/endpoints";

export const updateUserService = async (data) => {
  const response = await api.put(endpoints.updateUser(data?.id), data);
  return response;
};
