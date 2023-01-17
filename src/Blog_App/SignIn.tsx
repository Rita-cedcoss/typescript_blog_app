import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
type objProps = {
  email: string;
  password: string;
};
type signinProps = {
  LoginArr:objProps|null;
  setLogin:React.Dispatch<React.SetStateAction<objProps|null>>;
  formDataArr: objProps[];
};
const SignIn = (props: signinProps) => {
  let refEmail = useRef<HTMLInputElement>(null);
  let refPwd = useRef<HTMLInputElement>(null);
  let navigate = useNavigate();
  console.log( props.formDataArr);
  const Login = () => {
    if (refEmail.current !== null && refPwd.current !== null) {
      let email = refEmail.current.value;
      let passwd = refPwd.current.value;
      let temp = -1;
      for (let i = 0; i < props.formDataArr.length; i++) {
        if ( props.formDataArr[i].email == email && props.formDataArr[i].password == passwd ) {
          temp = i;  
        }
      }
      if (temp !== -1) {
        let obj={email:email,password:passwd}
        props.setLogin(obj);
        let jsonarr = JSON.stringify(props.LoginArr);
        localStorage.setItem("LoginArr", jsonarr);
        alert("You are login successfully");
        navigate("/");
      } else {
        alert("please enter valid detail");
      }
    }
  };
  return (
    <div className="container col-6 m-auto mt-4 border p-4">
      <h2 className="mb-4">Sign Your Account</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            ref={refEmail}
            className="form-control"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            ref={refPwd}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={Login}>
          Sign In
        </button>
        <p className="mt-4 fs-4 fw-bold text-danger"><Link to="/signup">Sign Up</Link>
      </p>
      </form>
    </div>
  );
};

export default SignIn;
