import { getTokenInMemory } from "@/auth/tokenMemory";
import ApiClientError from "@/errors/apiClientError";
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = getTokenInMemory();
  config.headers["token"] = token;

  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw new ApiClientError("Http error", error);
  }
);

export default apiClient;
