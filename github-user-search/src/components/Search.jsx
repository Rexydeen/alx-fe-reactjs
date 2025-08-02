import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const queryParts = [];
      if (username.trim()) queryParts.push(`user:${username.trim()}`);
      if (location.trim()) queryParts.push(`location:${location.trim()}`);
      if (minRepos.trim()) queryParts.push(`repos:>=${minRepos.trim()}`);
      const query = queryParts.join(' ');

      const results = await fetchUserData(query);
      setUsers(results.items || []);
    } catch (err) {
      setError('Something went wrong while searching users.');
    } finally {
      setLoading(false);
    }
  };
};

export default Search;
