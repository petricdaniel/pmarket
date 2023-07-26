// rafce
import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb.js";
import Meta from "../components/Meta.js";
import Container from "../components/Container.js";
import CustomInput from "../components/CustomInput.js";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="/login" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      Signup
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
