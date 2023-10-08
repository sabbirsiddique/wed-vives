/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const {createUser}= useContext(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name =form.get('name');
    const email =form.get('email');
    const password =form.get('password');
   

   const validPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
   if(!validPassword.test(password)){
    Swal.fire('Error','Password must be at least 6 characters long, contain one capital letter, and one special character.', 'error');
    return;
   }


    createUser(email,password)
    .then(result=>{
        
        Swal.fire(
            'Good job!',
            'Registration succesfull',
            'success'
          );
    })
    .catch(error=>{
        console.log(error)
    })



  };

  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-red-200 via-orange-200 to-yellow-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <h1>Register Here...</h1>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>
              <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                Already have an account?
                <Link
                  to="/login"
                  className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
                >
                  Login
                </Link>
              </p>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
