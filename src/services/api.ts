import axios from "axios";

const baseUrl = process.env.API_BASE_URL || "https://shaw-and-partners-test-api.herokuapp.com";

export const api = axios.create({
  baseURL: baseUrl + "/api",
});
