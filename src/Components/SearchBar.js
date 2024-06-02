
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  return (
    <div className="search-bar">
      <input
        type="text"
        className="news-input"
        placeholder="e.g science"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={() => onSearch(query)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
