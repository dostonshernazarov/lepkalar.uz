import axios from 'axios';

const API_URL = 'https://api.lepkalar.uz/v1';

export const getMouldingById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/mouldings/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error fetching moulding');
  }
};

export const listMouldings = async (filters = {}) => {
  try {
    const queryString = new URLSearchParams(filters).toString();
    const response = await axios.get(`${API_URL}/mouldings/list?${queryString}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error fetching mouldings list');
  }
};

export const listCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/mouldings/category`);
    return response.data.list;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error fetching categories');
  }
};

export const listMaterials = async () => {
  try {
    const response = await axios.get(`${API_URL}/mouldings/material`);
    return response.data.list;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error fetching materials');
  }
};

export const getAboutCompany = async () => {
  try {
    const response = await axios.get(`${API_URL}/about`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error fetching company info');
  }
};
