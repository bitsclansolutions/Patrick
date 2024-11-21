export const endpoints = {
  login: () => "/api/login",
  createUser: () => "/api/users",
  getUsers: () => "/api/users",
  updateUser: (id) => `/api/users/${id}`,
  blockUser: (id, blockStatus) => `/api/users/${id}/${blockStatus}`,
  deleteUser: (id) => `/api/users/${id}`,
  getSpecificUser: (id) => `/api/users/${id}`,
  resetPasswordEmail: () => "/api/password/email",
  resetPassword: (resetToken) => `/api/password/reset/${resetToken}`,
};
