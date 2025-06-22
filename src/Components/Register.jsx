import login from '../images/Login.gif'

const Register = () => {
    const handlesubmit =e=>{
        e.target.preventDefault()
    }
  return (
    <div>
            <div className='flex justify-center items-center'>
                 
            </div>
      <div className="hero bg-base-200 min-h-screen">
        <h1 className='text-center font-bold text-4xl'>Register now</h1>
        <div className="hero-content gap-2 flex-col lg:flex-row-reverse">
       
          <div>
            <img src={login} alt="loginimage" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset onSubmit={handlesubmit} className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
