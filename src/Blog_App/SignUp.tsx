import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
type objProps = {
  name: string;
  email: string;
  number: string;
  profile: string;
  password: string;
  confirmpwd: string;
};
type singupProps = {
  formDataArr: objProps[];
  setFormArr: React.Dispatch<React.SetStateAction<[] | objProps[]>>;
};
const SignUp = (props: singupProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const numRef = useRef<HTMLInputElement>(null);
  const picRef = useRef<HTMLInputElement>(null);
  const passwdRef = useRef<HTMLInputElement>(null);
  const confirmpasswdRef = useRef<HTMLInputElement>(null);
  let navigate=useNavigate();
  // const [formDataArr,setFormArr]=useState<objProps[]>([]);
  const [name, setName] = useState("");
  const validateName = () => {
    if (nameRef.current !== null) {
      let name = nameRef.current.value;
      if (name.match(/^[a-zA-Z ]{2,30}$/)) {
        setName("");
      } else {
        setName("please enter  alphabets in name ");
      }
    }
  };
  const validateEmail = () => {
    if (emailRef.current !== null) {
      let email = emailRef.current.value;
      if (
        email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setName("");
      } else {
        setName("please enter valid email ");
      }
    }
  };
  const validateNumber = () => {
    if (numRef.current !== null) {
      let num = numRef.current.value;
      if (
        num.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
      ) {
        setName("");
      } else {
        setName("please enter valid number");
      }
    }
  };
  const validatePassword = () => {
    if (passwdRef.current !== null) {
      let pwd = passwdRef.current.value;
      if (pwd.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
        setName("");
      } else {
        setName("please enter valid password");
      }
    }
  };
  const validateConfpwd = () => {
    if (confirmpasswdRef.current !== null && passwdRef.current !== null) {
      // let cpwd=confirmpasswdRef.current.value
      if (confirmpasswdRef.current.value === passwdRef.current.value) {
        setName("");
      } else {
        setName("passd not matched ");
      }
    }
  };
  const signUp = () => {
    if (
      nameRef.current !== null &&
      emailRef.current !== null &&
      numRef.current !== null &&
      picRef.current !== null &&
      passwdRef.current !== null &&
      confirmpasswdRef.current !== null
    ) {
      let name = nameRef.current.value;
      let email = emailRef.current.value;
      let num = numRef.current.value;
      let profile = picRef.current.value;
      let pwd = passwdRef.current.value;
      let cpwd = confirmpasswdRef.current.value;
      let obj = {
        name: name,
        email: email,
        number: num,
        profile: profile,
        password: pwd,
        confirmpwd: cpwd,
      };
      // let temp=props.formDataArr;
      props.formDataArr.push(obj);
      console.log(obj);
      props.setFormArr([...props.formDataArr]);
      let jsonarr = JSON.stringify(props.formDataArr);
      localStorage.setItem("arr", jsonarr);
      alert("User sign up successfully")
      navigate("/signin");
    }
  };

  return (
    <div className="col-6 container border p-4 mt-4 mb-4">
      <div className="mb-3">
        <h3>Sign Up</h3>
        <div className="form-text text-danger">{name}</div>
        <label className="form-label">Name</label>
        <input
          type="text"
          ref={nameRef}
          className="form-control"
          onChange={validateName}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          ref={emailRef}
          className="form-control"
          onChange={validateEmail}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Contact number</label>
        <input
          type="number"
          ref={numRef}
          className="form-control"
          aria-describedby="emailHelp"
          onChange={validateNumber}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Profile Pic</label>
        <input type="file" ref={picRef} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          ref={passwdRef}
          onChange={validatePassword}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          ref={confirmpasswdRef}
          onChange={validateConfpwd}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={signUp}>
        Sign up
      </button>
      <p className="mt-4 fs-4 fw-bold text-danger"><Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
