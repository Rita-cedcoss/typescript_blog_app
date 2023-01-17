import { stringify } from 'querystring';
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
type arrBlogProps={
  content:string,
  image:string,
  email:string,
  date:string,
  title:string
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
  index:number,
    setIndex:React.Dispatch<React.SetStateAction<number>>
    EditData:arrBlogProps|null;
    SetEdit:React.Dispatch<React.SetStateAction<arrBlogProps|null>> 
}
const AddPost = (props:addpostProps) => {
  console.log(props.arrBlog)
  let textRef=useRef<HTMLTextAreaElement>(null);
  let fileRef=useRef<HTMLInputElement>(null);
  let titleRef=useRef<HTMLInputElement>(null);
  let textupdateRef=useRef<HTMLTextAreaElement>(null as any);
  let titleupdateRef=useRef<HTMLInputElement>(null as any);
  let fileupdateRef=useRef<HTMLInputElement>(null as any);
  let navigate=useNavigate();
  var month =['January','february','March','April','May','June','July','August','September','October','November','December']
  
  const add_post=()=>{ 
    var day = month[new Date().getMonth()]
  var date = `${new Date().getDate()} ${day} ${new Date().getFullYear()}`
  console.log(date);
    console.log(props.formDataArr)
    if(props.formDataArr){    
    if(textRef.current!==null&& fileRef.current!==null && titleRef.current!==null)
    {
      let obj={
        title:titleRef.current.value,
        content:textRef.current.value,
        image:"https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg",
        email:props.formDataArr[props.formDataArr.length-1].email,
        date:date,
      }
      console.log(obj)
      let temp=props.arrBlog;
      temp.push(obj);
      props.setBlog([...temp]);
      let jsonPostArr=JSON.stringify(temp);
      localStorage.setItem("postArr",jsonPostArr);
      navigate("/");
      alert("successfull Data")
    }
  }else{
    alert("Please signup your acount")
    navigate('/signin')
  }
  }
  useEffect(()=>{
    if(props.EditData!=null){
      textupdateRef.current.value=props.EditData?.content;
      titleupdateRef.current.value=props.EditData.title;
    }
   
  },[])
  const update_post=()=>{ 
       var day = month[new Date().getMonth()]
       var date = `${new Date().getDate()} ${day} ${new Date().getFullYear()}`
       props.arrBlog[props.index].title=titleupdateRef.current.value;
       props.arrBlog[props.index].content=textupdateRef.current.value;
       props.arrBlog[props.index].date=date
       props.setBlog(props.arrBlog);
       navigate("/");
       props.SetEdit(null);
  }
  if(props.EditData!==null){
  
    return (
      <div className='col-5 container border mt-5 p-3'>
        <h4 className='text-start '>Add Post </h4>
        <div className="mb-3">
      <label className="form-label">Title</label>
      <input className="form-control" ref={titleupdateRef} placeholder="Leave a comment here"/>
    </div>
    <div className="mb-3">
      <label className="form-label">Content</label>
      <textarea className="form-control" ref={textupdateRef} placeholder="Leave a comment here"></textarea>
    </div>
    <div className="mb-3">
      <label className="form-label">Upload image</label>
      <input type="file" ref={fileupdateRef} className="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={update_post}>Update Post</button>
      </div>
    )
  }
  else{
  return (
    <div className='col-5 container border mt-5 p-3'>
      <h4 className='text-start '>Add Post </h4>
      <div className="mb-3">
      <label className="form-label">Title</label>
      <input className="form-control" ref={titleRef} placeholder="Leave a comment here"/>
    </div>
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
}

export default AddPost
