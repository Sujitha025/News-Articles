import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import NewsCard from './Components/NewsCard';

const API_KEY = "735c083008cf4a3c85964712e1130ef8";
const url = "https://newsapi.org/v2/everything?q=";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [curSelectedNav, setCurSelectedNav] = useState(null);

  useEffect(() => {
    fetchNews('India');
  }, []);

  const fetchNews = async (query) => {
    try {
      const response = await axios.get(`${url}${query}&apiKey=${API_KEY}`);
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleNavItemClick = (id) => {
    fetchNews(id);
    setCurSelectedNav(id);
  };

  const handleSearch = (query) => {
    if (!query) return;
    fetchNews(query);
    setCurSelectedNav(null);
  };

  return (
    <div>
  
    <NavBar onNavItemClick={handleNavItemClick}> <SearchBar onSearch={handleSearch} /></NavBar>
      <main>
        <div className="cards-container container flex">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};
 export default App;
