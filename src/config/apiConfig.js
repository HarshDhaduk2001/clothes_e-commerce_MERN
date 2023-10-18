import axios from "axios";

export const API_BAST_URL = "http://localhost:8000";
const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: API_BAST_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
