// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService.js';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setUser(null);

    try {
      const userData = await fetchUserData(username.trim());
      setUser(userData);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub username..."
      />
      <button type="submit">Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            width="100"
            height="100"
          />
          <p>Username: {user.login}</p>
          <p>Name: {user.name || 'No name available'}</p>
        </div>
      )}
    </form>
  );
};

export default Search;

