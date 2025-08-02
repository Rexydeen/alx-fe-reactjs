// src/services/github.js
import axios from 'axios';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const github = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const fetchUser = async (username) => {
  const response = await github.get(`/users/${username}`);
  return response.data;
};