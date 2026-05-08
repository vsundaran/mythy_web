import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://asp-mythy-api-prod-uaen.azurewebsites.net' ||  'http://localhost:5001/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic API Hook for GET requests
export const useApiGet = (key: string[], url: string, options = {}) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data } = await api.get(url);
      return data;
    },
    ...options,
  });
};

// Generic API Hook for POST requests
export const useApiPost = (url: string, options = {}) => {
  return useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await api.post(url, payload);
      return data;
    },
    onSuccess: () => {
      // Invalidate queries if needed
      // queryClient.invalidateQueries({ queryKey: [...] });
    },
    ...options,
  });
};

export default api;
