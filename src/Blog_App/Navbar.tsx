import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div className="container-fluid">
      <div>
        <a className="navbar-brand" href="dfgdf">
            <img
              className="logo"
              alt=""
              height="50px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjf6Enuiq8VEbYiDg5qWtZCjF81NBE95mkuTJMXonKlMrlrtF1geRu08YTlKM-bXItic&usqp=CAU"
            />
            <span className='fs-2 ms-3 fw-bold'>Blog</span>
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse grow" id="navbarNav">
        <ul className="navbar-nav fs-5 align-items-center">
          <li className="nav-item me-2">
          </li>
          <li className="nav-item me-5">
            <a className="nav-link active" href="sd">
              <i
                className="bi bi-geo-alt-fill"
                style={{ fontSize: "30px", color: "#147618" }}
              ></i>
              <span className="fontsm">Sign In</span>
              
            </a>
          </li>
          <li className="nav-item ">
          </li>
          <li className="nav-item me-5">
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar