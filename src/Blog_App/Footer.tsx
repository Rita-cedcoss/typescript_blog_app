import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="container-fluid  bg-dark-subtle mt-5">
        <div className=" container-fluid border-top border-bottom">
          <div className="row">
            <div className="col-3 p-3 text-align-center  border-end">
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
            </div>
            <div className="col-3 p-3 text-align-center border-end">
              <h6>Information</h6>
                <p>About US</p>
              <p>Privacy</p>
              <p>Store Locator</p>
            </div>
            <div className="col-3 p-3 text-align-center border-end">
              <h6>Shopping</h6>
              <p>Your Account</p>
              <p>FAQ</p>
              <p>Return Policy</p>
            </div>
            <div className="col-3 p-3 text-align-center border-end">
              <h6>Engage</h6>
              <p>Contact Us</p>
              <p>Share Feedback</p>
              <p>Coperate Site</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer