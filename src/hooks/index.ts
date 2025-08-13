import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URI,

  headers: {
    "Content-Type": "application/json",
  },
});

interface ApiRequest {
  method?: string;
  url: string;
  data?: Record<string, string>;
  headers?: Record<string, string>;
}

const defaultRequest: ApiRequest = {
  url: "",
  method: "get",
  data: {},
  headers: {},
};

const useMutateApi = (options?: Record<string, unknown>) => {
  const mutation = useMutation({
    mutationFn: async (request: ApiRequest = defaultRequest) =>
      (await axiosInstance.post("/proxy", request)).data,
    mutationKey: [],
    ...options,
  });
  return mutation;
};

export { useMutateApi };
