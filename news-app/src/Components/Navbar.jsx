import React from 'react'

function Navbar({setCategory}) {
 return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">News O <span className="badge bg-danger">Pedia</span></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ cursor: 'pointer' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('technology')} style={{ cursor: 'pointer' }}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('health')} style={{ cursor: 'pointer' }}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('business')} style={{ cursor: 'pointer' }}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('science')} style={{ cursor: 'pointer' }}>Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('sports')} style={{ cursor: 'pointer' }}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('entertainment')} style={{ cursor: 'pointer' }}>Entertainment</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar