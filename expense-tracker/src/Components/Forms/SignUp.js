import React, { useState,Fragment } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import axios from "axios";
import Swal from "sweetalert2";
import {signup} from "../../firebase/config";
// import "./SignUp.css";

function SignUp() {
//   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    let body = {
      email,
      password,
    };
    try {


      //await signup( email,password,);
      // const reponse = await axios.post(
      //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4YTDaworBC3kZUm-28C11nrlmRFhObWY",
      //   body
      // );
      const reponse = await signup(email,password)
      console.log(`Response:${reponse}`);
      if (reponse) {
        Swal.fire({
          title: "User Successfulluy Signup",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate("/login");
      }


    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This User is Already exist!",
      });
      console.log("error", e);
    }
   if(password === confirmPassword){
    console.log(email,password);
   }else{
    console.log('password and confirm passworm must be same');
   }
  };
  return (
    <Fragment>
    <Header/>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={submitHandler}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="form-control"
              placeholder="Confirm password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered{" "}
            <Link className="nav-link" to={"/login"}>
              Already have an account?
            </Link>
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    </Fragment>
  );
}

export default SignUp;
