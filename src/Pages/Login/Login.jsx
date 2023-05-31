import React from "react";
import { useForm } from "react-hook-form";
import image from "../../assets/others/authentication1.png";
import "./Login.css";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(7);
  }, []);

  const getFormData = (data) => {
    const { email, password } = data;
    if (validateCaptcha(data.captcha) == true) {
      login(email, password)
        .then((res) => {
          console.log("login successful");
          const currentUser = res.user;
          navigate(from, { replace: true });
        })
        .catch((err) => console.log(err));
    } else {
      return;
    }
  };

  return (
    <div className="loginForm">
      <div className="hero jar min-h-screen px-8">
        <div className="hero-content shadow-2xl shadow-slate-600 flex">
          <div className="text-center lg:text-left">
            <img src={image} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form className="card-body" onSubmit={handleSubmit(getFormData)}>
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
              <div>
                <LoadCanvasTemplate />
                <input
                  type="captcha"
                  {...register("captcha", { required: true })}
                  placeholder="Input the captcha"
                  className="input input-bordered"
                />
                {errors.captcha && (
                  <p className="text-red-600">Captcha doesn&apos;t match</p>
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
                Don&apos;t have an Account?{" "}
                <Link
                  to="/signup"
                  state={location.state}
                  className="text-indigo-400 underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
