import api from "../../utils/axiosInstance";
import { endpoints } from "../../utils/endpoints";

export const ResetPasswordService = async (resetToken, data) => {
  const response = await api.post(endpoints.resetPassword(resetToken), data);
  return response;
};
