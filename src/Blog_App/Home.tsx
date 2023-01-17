import React from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
type arrBlogProps = {
  content: string;
  image: string;
  email: string;
  date: string;
  title: string;
};
type loginProps = {
  email: string;
  password: string;
};
type arrblogProps = {
  LoginArr: loginProps | null;
  arrBlog: arrBlogProps[];
  setBlog: React.Dispatch<React.SetStateAction<arrBlogProps[]>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setLogin: React.Dispatch<React.SetStateAction<loginProps | null>>;
  EditData: arrBlogProps | null;
  SetEdit: React.Dispatch<React.SetStateAction<arrBlogProps | null>>;
};
const Home = (props: arrblogProps) => {
  const navigate = useNavigate();
  // for edit data
  const editPost = (i: number) => {
    if (props.LoginArr !== null) {
      if (props.LoginArr.email === props.arrBlog[i].email) {
        props.SetEdit(props.arrBlog[i]);
        console.log(props.arrBlog[i]);
        props.setIndex(i);
        navigate("/add_post");
      } else {
        alert("Your are not edit another person blog");
      }
    }
  };
  // delete item
  const deleteItem = (i: number) => {
    if (props.LoginArr !== null) {
      if (props.LoginArr.email === props.arrBlog[i].email) {
        props.setIndex(i);
        props.arrBlog.splice(i, 1);
        props.setBlog([...props.arrBlog]);
        let jsonPostArr = JSON.stringify(props.arrBlog);
        localStorage.setItem("postArr", jsonPostArr);
      } else {
        alert("Not allow delete another person blog");
      }
    }
  };
  return (
    <>
      <div className="container-fluid">
        <h2 className="text-center mt-3 fw-bold text-primary">Users Blog</h2>
        {props.arrBlog.map((item, i) => {
          return (
            <div className="col-7 m-auto container text-center border mt-4  p-2">
              <div className="col-11 container   mt-4 p-4 text-end">
                {props.LoginArr !== null ? (
                  <>
                    <a className="fs-6 fw-bold" onClick={() => editPost(i)}>
                      Edit Post<i className="bi bi-pencil-fill "></i>
                    </a>
                    <a
                      className="fs-6 fw-bold ms-3"
                      onClick={() => deleteItem(i)}
                    >
                      Delete<i className="bi bi-trash3"></i>
                    </a>
                  </>
                ) : (
                  <p></p>
                )}
              </div>
              <img alt="1" height="200px" width="90%" src={item.image} />
              <div className="col-11 container mt-4 text-start">
                <h4>{item.content}</h4>
              </div>
              <div className="col-11 container  border mt-4 p-4 text-start">
                <p>{item.content}</p>
              </div>
              <div className="d-flex justify-content-between pe-5 ps-5 pt-3 ">
                <p>{item.email}</p>
                <p>{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
