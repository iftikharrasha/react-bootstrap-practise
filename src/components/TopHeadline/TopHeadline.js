import React, { useEffect, useState } from 'react';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5a3c78c1225e419198f076e0caa1ba3d';
        fetch(url).then(res => res.json()).then(data => setArticles(data.articles))
    }, [])

    return (
        <div>
            <h2>Top Headlines: {articles.length}</h2>
        </div>
    );
};

export default TopHeadline;