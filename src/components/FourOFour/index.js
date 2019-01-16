import React from 'react'
import { Link } from 'react-router-dom'
const FourOFour = () => (
  <div className="notfound">
    <div>
      <div className="notfound-404">
        <h1>404</h1>
      </div>
      <h2>we are sorry, but the page you requested was not found</h2>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  </div>
)

export default FourOFour
