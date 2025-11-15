import React, { useState,useEffect } from 'react'
import NewsItems from './NewsItems.jsx'
function NewsBoard({category}) {

    const [articles,setArticles] = useState([''])

    useEffect(()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=03c61b6d8941404c9fef010bdf01f892`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles)).catch(err=>console.log(err))
    },[category])
  return (
    <div>
         <h2 className='text-center'>Latest <span>News</span></h2>
    {articles.map((news,index)=>{
      return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} newsUrl={news.url}/>
    })}
    </div>
  )
}

export default NewsBoard