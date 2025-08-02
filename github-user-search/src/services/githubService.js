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

  const fullUrl = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`;

  const response = await axios.get(fullUrl, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  });

  return response.data;
};


