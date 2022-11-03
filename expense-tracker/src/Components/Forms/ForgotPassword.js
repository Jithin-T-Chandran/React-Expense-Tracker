import React, { useState, Fragment } from "react";
import {Link,useNavigate,} from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Swal from "sweetalert2";
import { useUserAuth } from "../../Context/UserAuthContext";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const { resetPassword } = useUserAuth();
    const [isLoading, setLoading] = useState(false);
  
    const navigate = useNavigate();
    const submitHandler = async (event) => {
      try {
        event.preventDefault();
            const response = await resetPassword(email)
            console.log("reset response",await response);
              Swal.fire("Good job!", "Reset Email sent", "success");
              navigate("/");
          
            setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }

      // event.preventDefault();
      // setLoading(true);
      // try {
      //   const response = await fetch(
      //     "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA4YTDaworBC3kZUm-28C11nrlmRFhObWY",
      //     {
      //       method: "POST",
      //       body: JSON.stringify({
      //         requestType: "PASSWORD_RESET",
      //         email: enteredEmail,
      //         returnSecureToken: true,
      //       }),
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   );
      //   if (response.ok) {
      //     const data = await response.json();
      //     console.log(data);
      //     alert(`Successfully sent the link to ${enteredEmail}`);
      //     navigate("/");
      //   } else {
      //     const data = await response.json();
      //     alert(data.error.message);
      //   }
      //   setLoading(false);
      // } catch (err) {
      //   console.log("Something went wrong");
      //   console.log(err);
      //   setLoading(false);
      // }









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
          <Link className="nav-link" to={"/"}>
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
