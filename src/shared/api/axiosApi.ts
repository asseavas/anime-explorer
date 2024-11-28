import axios from 'axios';
import {API_URl} from "@/shared/config/consts";

export const axiosApi = axios.create({
  baseURL: API_URl,
});
