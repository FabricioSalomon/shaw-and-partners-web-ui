import axios from "axios";

const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";

export const api = axios.create({
  baseURL: baseUrl + "/api",
});
