import axios from 'axios';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
});

export const searchUsers = async (username, location, minRepos) => {
  let query = '';
  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await github.get(`/search/users?q=${encodeURIComponent(query.trim())}`);
  return response.data;
};

