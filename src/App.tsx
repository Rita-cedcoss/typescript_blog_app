import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Blog_App/Navbar';
import "./Blog_App/BlogApp.css"
import Footer from './Blog_App/Footer';
import SignUp from './Blog_App/SignUp';
import Home from './Blog_App/Home';
import SignIn from './Blog_App/SignIn';
import { Route, Routes } from 'react-router-dom';
import AddPost from './Blog_App/AddPost';
import { json } from 'stream/consumers';
type objProps= {
  name: string;
  email: string;
  number: string;
  profile: string;
  password: string;
  confirmpwd: string;
}
type arrBlogProps={
  content:string,
  image:string
}
function App() {
  const [formDataArr,setFormArr]=useState<objProps[]>([]);
  // const [formDataArr,setFormArr]=useState<objProps[]>([]);
  let arrBlog1 = [
    {
      content:
        "   With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not onlyNow to compose a text Lorem Ipsum is much more fun!",
      image:
        "https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?b=1&s=612x612&w=0&k=20&c=_C4iNvLOzKbbfbeTMsJ4mQf8OGQwYWJ8GWKLKRglrF8=",
      },
    {
      content:
        "   With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not onlyNow to compose a text Lorem Ipsum is much more fun!",
      image:
        "https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?b=1&s=612x612&w=0&k=20&c=_C4iNvLOzKbbfbeTMsJ4mQf8OGQwYWJ8GWKLKRglrF8=",
      },
    {
      content:
        "   With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not onlyNow to compose a text Lorem Ipsum is much more fun!",
      image:
        "https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?b=1&s=612x612&w=0&k=20&c=_C4iNvLOzKbbfbeTMsJ4mQf8OGQwYWJ8GWKLKRglrF8=",
      },
  ];

  
 
 
  let [arrBlog,setBlog]=useState<arrBlogProps[]>(arrBlog1)
  useEffect(()=>{
   
    // setBlog([...arrBlog1]);
    let arr=localStorage.getItem("postArr");
    let signarr=localStorage.getItem("arr");
    if(arr!==null && signarr!==null)
    {
        console.log();
        setBlog(JSON.parse(arr));
        setFormArr(JSON.parse(signarr));
    }
  },[]) 
  console.log(formDataArr);
  return (
  <>
  <Navbar formDataArr={formDataArr} setFormArr={setFormArr}/>
  <Routes>
    <Route path='/home' element={<Home arrBlog={arrBlog} />}></Route>
    <Route path='/' element={<SignUp formDataArr={formDataArr} setFormArr={setFormArr}/>}/>
    <Route path="/signin" element={<SignIn formDataArr={formDataArr} />}/>
    <Route path="/add_post" element={<AddPost  arrBlog={arrBlog} setBlog={setBlog} formDataArr={formDataArr}/>}></Route>
  </Routes>
  <Footer/>
  </>
  );
}

export default App;
