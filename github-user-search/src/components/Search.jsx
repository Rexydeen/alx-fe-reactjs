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
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            width={100}
            height={100}
            style={{ borderRadius: '50%' }}
          />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;