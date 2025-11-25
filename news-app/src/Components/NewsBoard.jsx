import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems.jsx'

function NewsBoard({ category }) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        
        // Use proxy API endpoint (Vercel serverless function)
        // This keeps the API key secure on the server-side
        const apiUrl = `/api/news?category=${category}`
        
        fetch(fetchUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                return response.json()
            })
            .then(data => {
                // Check if data.articles exists and is an array
                if (data && Array.isArray(data.articles)) {
                    setArticles(data.articles)
                } else {
                    setArticles([])
                    setError('No articles found')
                }
            })
            .catch(err => {
                console.error('Error fetching news:', err)
                setError('Failed to load news. Please try again later.')
                setArticles([])
            })
            .finally(() => {
                setLoading(false)
            })
    }, [category])

    return (
        <div>
            <h2 className='text-center'>Latest <span>News</span></h2>
            
            {loading && (
                <div className="text-center my-5">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading news...</p>
                </div>
            )}
            
            {error && !loading && (
                <div className="alert alert-warning text-center mx-auto" style={{ maxWidth: '600px', marginTop: '20px' }}>
                    <strong>⚠️ {error}</strong>
                    <p className="mb-0 mt-2 small">
                        Please check that the API proxy is configured correctly.
                    </p>
                </div>
            )}
            
            {!loading && !error && articles.length === 0 && (
                <div className="text-center my-5">
                    <p>No news articles available at the moment.</p>
                </div>
            )}
            
            {!loading && !error && articles.length > 0 && (
                <div>
                    {articles.map((news, index) => {
                        // Only render if news object exists and has required properties
                        if (!news || !news.title) return null
                        return (
                            <NewsItems 
                                key={index} 
                                title={news.title} 
                                description={news.description} 
                                src={news.urlToImage} 
                                newsUrl={news.url}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default NewsBoard