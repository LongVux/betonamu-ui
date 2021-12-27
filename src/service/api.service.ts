import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `http://localhost:8080`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
