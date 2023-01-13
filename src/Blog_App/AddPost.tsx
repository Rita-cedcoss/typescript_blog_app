import { stringify } from 'querystring';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
type arrBlogProps={
  content:string,
  image:string
}
type objProps= {
  name: string;
  email: string;
  number: string;
  profile: string;
  password: string;
  confirmpwd: string;
}
type addpostProps={
  arrBlog:arrBlogProps[],
  formDataArr:objProps[],
  setBlog:React.Dispatch<React.SetStateAction< arrBlogProps[]>>;
}
const AddPost = (props:addpostProps) => {
  console.log(props.arrBlog)
  let textRef=useRef<HTMLTextAreaElement>(null);
  let fileRef=useRef<HTMLInputElement>(null);
  let navigate=useNavigate();
  const add_post=()=>{
    console.log(props.formDataArr)
    if(props.formDataArr){    
    if(textRef.current!==null&& fileRef.current!==null)
    {
      let obj={
        content:textRef.current.value,
        image:fileRef.current.value,
        email:props.formDataArr[props.formDataArr.length-1].email
      }
      console.log(obj)
      let temp=props.arrBlog;
      temp.push(obj);
      props.setBlog([...temp]);
      let jsonPostArr=JSON.stringify(temp);
      localStorage.setItem("postArr",jsonPostArr);
      alert("successfull Data")
    }
  }else{
    alert("Please signup your acount")
    navigate('/signin')
  }
  }
  return (
    <div className='col-5 container border mt-5 p-3'>
      <h4 className='text-start '>Add Post </h4>
  <div className="mb-3">
    <label className="form-label">Content</label>
    <textarea className="form-control" ref={textRef} placeholder="Leave a comment here"></textarea>
  </div>
  <div className="mb-3">
    <label className="form-label">Upload image</label>
    <input type="file" ref={fileRef} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={add_post}>Add Post</button>
    </div>
  )
}

export default AddPost
