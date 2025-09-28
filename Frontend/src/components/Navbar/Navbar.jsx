import React from 'react'

function Navbar() {
  return (
    <>
      <div>
        <div>Image</div>
        <div>
            <Link to = "/">Home</Link>
            <Link to = "/pricing">Pricing</Link>
            <Link to ="/blogs">Blogs</Link>
        </div>
        <div>
            <Link to = "/login">Login</Link>
            <Link to = "/signup">Sign Up</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
