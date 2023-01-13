import React from "react";
import SignUp from "./SignUp";
type arrBlogProps={
    content:string,
    image:string
  }

  type arrblogProps={
    arrBlog:arrBlogProps[];
    
  }

const Home = (props:arrblogProps) => {
const editPost=(i:number)=>
{
  console.log(i)
}

//   localStorage
  return (
    <>
      <div className="container-fluid">
        <h2 className="text-center mt-3 fw-bold text-primary">Users Blog</h2>
        {props.arrBlog.map((item,i) => {
          return (
            <div className="col-7 m-auto container text-center border mt-4  p-2">
              <div className="col-11 container   mt-4 p-4 text-end">
                <a className="fs-6 fw-bold" onClick={()=>editPost(i)}>Edit Post<i className="bi bi-pencil-fill "></i></a>
              </div>
              <img alt="1" height="200px" width="90%" src={item.image} />
              <div className="col-11 container  border mt-4 p-4 text-start">
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
