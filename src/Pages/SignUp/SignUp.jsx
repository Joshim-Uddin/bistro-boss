import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import image from "./../../assets/others/authentication1.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getFormData = (data) => {
    const { email, password, photoUrl, name } = data;
    signUp(email, password)
      .then((res) => {
        console.log("sign up successful");
        const currentUser = res.user;
        updateProfile(currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then((res) => {
            
          })
          .catch((err) => err);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="loginForm">
      <div className="hero jar min-h-screen px-8">
        <div className="hero-content shadow-2xl shadow-slate-600 flex">
          <div className="text-center lg:text-left">
            <img src={image} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <form className="card-body" onSubmit={handleSubmit(getFormData)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <p className="text-red-600">Name is required.</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  placeholder="Your name"
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <p className="text-red-600">Photo URL is required.</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="Type here"
                  className="input input-bordered"
                />
                {errors.email && (
                  <p className="text-red-600">Email is required.</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-600">Password is required.</p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <div className="card-body my-0">
              <p>
                Already have an Account?{" "}
                <Link
                  to="/login"
                  state={location.state}
                  className="text-indigo-400 underline"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
