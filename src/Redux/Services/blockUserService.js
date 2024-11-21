import api from "../../utils/axiosInstance";
import { endpoints } from "../../utils/endpoints";

export const blockuserService = async (id, blockStatus) => {
  console.log("id", id, "blockStatus", blockStatus);

  const response = await api.post(endpoints.blockUser(id, blockStatus));
  return response;
};
