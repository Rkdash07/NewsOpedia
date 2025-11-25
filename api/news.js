export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the category from query parameters
  const { category = 'general' } = req.query;

  // Get API key from environment variables
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ 
      error: 'NewsAPI key not configured. Please set NEWS_API_KEY in Vercel environment variables.' 
    });
  }

  try {
    // Construct the NewsAPI URL
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    
    // Fetch from NewsAPI
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('NewsAPI error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: `NewsAPI error: ${response.status}`,
        details: errorText 
      });
    }

    const data = await response.json();
    
    // Return the data to the client
    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch news',
      details: error.message 
    });
  }
}
