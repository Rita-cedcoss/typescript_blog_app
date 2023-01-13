import React from 'react'
import { Link } from 'react-router-dom'
type objProps= {
  name: string;
  email: string;
  number: string;
  profile: string;
  password: string;
  confirmpwd: string;
}
type navProps={
  formDataArr:objProps[],
  setFormArr:React.Dispatch<React.SetStateAction< objProps[]>>
}
const Navbar = (props:navProps) => {
  const logout=()=>{
   localStorage.removeItem('arr');
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div className="container-fluid">
      <div>
        <Link to="/home">
        <a className="navbar-brand" href="dfgdf">
            <img
              className="logo"
              alt=""
              height="50px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjf6Enuiq8VEbYiDg5qWtZCjF81NBE95mkuTJMXonKlMrlrtF1geRu08YTlKM-bXItic&usqp=CAU"
            />
            <span className='fs-2 ms-3 fw-bold'>Blog</span>
        </a>
        </Link>
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
         
          <Link to="/add_post">
          <a className="nav-link active" href="sd">
              <span className="fontsm fw-bold">Add Post</span>
              
            </a>
            </Link>
          </li>
          <li className="nav-item me-5">
            <Link to="/">
            <a className="nav-link active" href="sd">
              <span className="fontsm fw-bold ">Sign Up</span>
            </a>
            </Link>
          </li>
          <li className="nav-item ">
          <Link to="/">
            <a className="nav-link active" href="sd">
              <span className="fontsm fw-bold " onClick={logout}>Log Out</span>
            </a>
            </Link>
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