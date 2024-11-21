import api from "../../utils/axiosInstance";
import { endpoints } from "../../utils/endpoints";

export const deleteUserService = async (id) => {
  const response = await api.delete(endpoints.deleteUser(id));
  return response;
};
