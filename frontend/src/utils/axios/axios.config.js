import axios from "axios";

// const api_version = "api/v1";
const API_URL = `http://localhost:8000/api/v1`; // dev

const axiosApi = axios.create({
  baseURL: API_URL,
});

export const get = async (url, config = {}) => {
  try {
    const res = await axiosApi.get(url, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const post = async (url, body, config = {}) => {
  try {
    const res = await axiosApi.post(url, body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const put = async (url, body, config = {}) => {
  try {
    const res = await axiosApi.put(url, body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const remove = async (url, config = {}) => {
  try {
    const res = await axiosApi.delete(url, config);
    return res.data;
  } catch (error) {
    return error;
  }
};
