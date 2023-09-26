import axios from 'axios';

const staticServerUri = process.env.REACT_APP_PATH || '';

const instance = axios.create({
  baseURL: staticServerUri + '/api/v1', // "http://localhost:8080/",
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getTest = async (props) => {
  return await instance.get(`/test`);
};

export { getTest, instance };
