import React from 'react'

function NewsItems({title,description,src,newsUrl}) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{maxWidth: "345px"}}>
  <img src={(src||'https://picsum.photos/330/200')} style={{height:"200px",width:"330px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{(title || "").slice(0, 40)}</h5>
    <p className="card-text">{(description || "News has been updated as per the latest information available.").slice(0, 50)}</p>
    <a href={newsUrl} className="btn btn-danger btn-sm" style={{mx: "auto", display: "block"}}>Read Me</a>
  </div>
</div>
  )
}

export default NewsItems