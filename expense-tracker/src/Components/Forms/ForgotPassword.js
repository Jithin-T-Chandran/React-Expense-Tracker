import React, { useState, Fragment } from "react";
import {Link,useNavigate,} from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import axios from "axios";
import Swal from "sweetalert2";
import {resetEmail} from "../../firebase/config";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    // const auth = getAuth();
  
    const navigate = useNavigate();
    const submitHandler = async (event) => {
      try {
        event.preventDefault();
        console.log(email);
            const response = await resetEmail(email)
            console.log(response);
            if (response) {
              Swal.fire("Good job!", "Reset Email sent", "success");
            //   navigate("/dashboard");
            }
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <Fragment>
    <Header/>
  <div className="auth-wrapper">
    <div className="auth-inner">
      <form onSubmit={submitHandler}>
        <h3>Forgot Password</h3>
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
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Not registered?{" "}
          <Link className="nav-link" to={"/Login"}>
            Login?
          </Link>
        </p>
      </form>
    </div>
  </div>
<Footer/>
</Fragment>
  )
}

export default ForgotPassword
