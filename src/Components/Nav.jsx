import { useContext } from "react";
import logo from "../../public/job.jpeg";
import { Link, NavLink } from "react-router";
import AuthContext from "../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Nav = () => {
  const { user,setError, signOUT } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/hotjobs"}>Find Job</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  const signoutUser = () => {
    signOUT().then(() => {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }).catch((errr)=>setError(errr.message))
  };
  return (
    <div>
      <div className="navbar bg-base-100  border-none">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-1.5">
            <img className="w-20" src={logo} alt="logo" />
            <a className="font-bold text-3xl">
              <span className="text-primary tracking-tight">job</span>Portal
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          {!user && (
            <>
              <Link to={"/register"} className="underline cursor-pointer">
                Register{" "}
              </Link>
              <Link to={"/login"} className="btn btn-primary">
                Login{" "}
              </Link>
            </>
          )}
          {user && (
            <>
              <button onClick={signoutUser} className="btn">SignOut</button>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
