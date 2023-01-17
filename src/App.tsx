import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Blog_App/Navbar";
import "./Blog_App/BlogApp.css";
import Footer from "./Blog_App/Footer";
import SignUp from "./Blog_App/SignUp";
import Home from "./Blog_App/Home";
import SignIn from "./Blog_App/SignIn";
import { Route, Routes } from "react-router-dom";
import AddPost from "./Blog_App/AddPost";
type objProps = {
  name: string;
  email: string;
  number: string;
  profile: string;
  password: string;
  confirmpwd: string;
};
type arrBlogProps = {
  content: string;
  image: string;
  email: string;
  date: string;
  title: string;
};
type login = {
  email: string;
  password: string;
};
function App() {
  const [formDataArr, setFormArr] = useState<objProps[]>([]);
  const [login, setlogin] = useState<login | null>(null);
  const [editData, setEdit] = useState<arrBlogProps | null>(null);
  const [index, setIndex] = useState<number>(0);
  var month = [
    "January",
    "february",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var day = month[new Date().getMonth()];
  var date = `${new Date().getDate()} ${day} ${new Date().getFullYear()}`;
  let arrBlog1 = [
    {
      content:
        "   With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not onlyNow to compose a text Lorem Ipsum is much more fun!",
      image:
        "https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?b=1&s=612x612&w=0&k=20&c=_C4iNvLOzKbbfbeTMsJ4mQf8OGQwYWJ8GWKLKRglrF8=",
      email: "helo@gmail.com",
      date: date,
      title: "Nmaste India",
    },
  ];
  let [arrBlog, setBlog] = useState<arrBlogProps[]>(arrBlog1);
//  render first time data
  useEffect(() => {
    let LoginArr = localStorage.getItem("LoginArr");
    let postarr = localStorage.getItem("postArr");
    let signarr = localStorage.getItem("arr");
    if (postarr !== null) {
      setBlog(JSON.parse(postarr));
    }
    if (signarr !== null) {
      setFormArr(JSON.parse(signarr));
    }
    if (LoginArr !== null) {
      setlogin(JSON.parse(LoginArr));
    }
  }, []);
  console.log(index);
  return (
    <>
      <Navbar
        formDataArr={formDataArr}
        setFormArr={setFormArr}
        LoginArr={login}
        setLogin={setlogin}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              arrBlog={arrBlog}
              setBlog={setBlog}
              LoginArr={login}
              setLogin={setlogin}
              EditData={editData}
              SetEdit={setEdit}
              setIndex={setIndex}
              index={index}
            />
          }
        ></Route>
        <Route
          path="/signup"
          element={<SignUp formDataArr={formDataArr} setFormArr={setFormArr} />}
        />
        <Route
          path="/signin"
          element={
            <SignIn
              formDataArr={formDataArr}
              setLogin={setlogin}
              LoginArr={login}
            />
          }
        />
        <Route
          path="/add_post"
          element={
            <AddPost
              arrBlog={arrBlog}
              setBlog={setBlog}
              formDataArr={formDataArr}
              EditData={editData}
              SetEdit={setEdit}
              setIndex={setIndex}
              index={index}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
