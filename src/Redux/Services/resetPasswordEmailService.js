import api from "../../utils/axiosInstance";
import { endpoints } from "../../utils/endpoints";

export const ResetPasswordEmailService = async (data) => {
  const response = await api.post(endpoints.resetPasswordEmail(), data);
  return response;
};
