import login from "../images/Login.gif";
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

const Register = () => {
  const [err, setError] = useState("");
  const navigate = useNavigate();

  const { createuser, googleLogin, setUser } = useContext(AuthContext);

  const provider = new GoogleAuthProvider();
  const handlegoogleLogin = () => {
    googleLogin(provider)
      .then((result) => {
        setUser(result.user);

        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const passregex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passregex.test(password)) {
      setError(
        "Password must be at least 6 characters long, contain at least one uppercase letter and one number."
      );
      return;
    }
    setError("");

    createuser(email, password)
      .then((result) => {
        // setUser(result.user)
        console.log(result.user.email);
        const user = { email: email };
        axios
          .post("http://localhost:5000/jwt", user)
          .then((res) => console.log(res.data));
        // navigate('/')
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="flex justify-center items-center"></div>
      <div className="hero min-h-screen">
        <div className="hero-content gap-2 flex-col lg:flex-row-reverse">
          <div>
            <img src={login} alt="loginimage" />
          </div>
          <div className="card w-full max-w-sm shrink-0">
            <div className="flex justify-center flex-col items-center space-y-2">
              <h1 className="text-xs text-primary">Register</h1>
              <h1 className="text-3xl font-bold">Start for free today</h1>
              <p className="text-gray-500">
                Access to all features. No credit card required.
              </p>
              <button
                onClick={handlegoogleLogin}
                className="btn w-full bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <div className="divider pt-3">OR</div>
            </div>
            <div className="card-body">
              <form onSubmit={handlesubmit} className="fieldset space-y-1">
                <label className="label text-xl text-black ">Full Name:</label>
                <input
                  required
                  name="name"
                  type="text"
                  className="input py-3"
                  placeholder="Type your full name here"
                />
                <label className="label text-xl text-black ">Username:</label>
                <input
                  required
                  name="username"
                  type="text"
                  className="input py-3"
                  placeholder="Type your username here"
                />
                <label className="label text-xl text-black ">Email:</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="input py-3"
                  placeholder="Type your Email here"
                />
                <label className="label text-xl text-black ">Password:</label>
                <input
                  required
                  name="password"
                  type="password"
                  className="input py-3"
                  placeholder="Type your Password here"
                />

                <button className="btn btn-primary mt-4">Register</button>
                <div>{err && <p className="text-red-500">{err}</p>}</div>
                <div className="flex gap-1 text-sm">
                  <h1>Already have an account?</h1>
                  <Link to={"/login"} className="underline font-bold">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
