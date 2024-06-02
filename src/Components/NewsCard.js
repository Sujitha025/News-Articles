
import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="card" onClick={() => window.open(article.url, "_blank")}>
      <div className="card-header">
        <img src={article.urlToImage || 'https://via.placeholder.com/400x200'} alt="news-img" />
      </div>
      <div className="card-content">
        <h3>{article.title}</h3>
        <h6 className="news-source">{article.source.name} {new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/jakarta" })}</h6>
        <p className="news-desc">{article.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
