import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {logIn} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        logIn(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })

        console.log(e.currentTarget);

        console.log(form.get('password'))
    }
  return (
    <div>

<div className="hero min-h-screen bg-gradient-to-r from-red-200 via-orange-200 to-yellow-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
            <h1>Please Login</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered bg-transparent" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered bg-transparent" required />
        </div>
        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
      Do not have an account?
     
     <Link to="/register" className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased">Register</Link>
        
      
    </p>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        
      </div>

  );
};

export default Login;
