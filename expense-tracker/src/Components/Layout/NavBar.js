import React, { Fragment } from "react";
import Swal from "sweetalert2";
import {useNavigate,NavLink} from "react-router-dom";
import {logout } from  "../../firebase/config";
import {useAuth} from  "../../firebase/config";

function NavBar() {
    let history = useNavigate();
    const currentUser = useAuth();
    
    const handleLogout = async () => {
      try {
        await logout();
        localStorage.clear();
      } catch {
        alert("Error!");
      }
    };
  return (
    <Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container">
       <NavLink className="navbar-brand" to={'/dashboard'}>
        Welcome :  { currentUser?.email }
       </NavLink>

       <div className="d-flex align-items-center" id="navbarTogglerDemo02">
         <ul className="navbar-nav ml-auto">
          
           {/* <li className="nav-item">
           <HeaderCartButton onClick={props.onShowCart}/>
           </li> */}
           <li className="nav-item">
             <div className="nav-link pointerMouse" onClick={handleLogout}>
               Logout
             </div>
           </li>
    
         </ul>
       </div>

     </div>
   </nav>
 </Fragment>
  )
}

export default NavBar