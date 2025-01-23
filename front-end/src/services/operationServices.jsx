import axios from 'axios';

const API_URL = 'http://localhost:8000/api/operations'; 

export const createOperation = async (operation) => {
  return axios.post(API_URL, operation, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
