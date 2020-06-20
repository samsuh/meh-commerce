import React from "react";

import "./signin-signup.styles.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

const SignInSignUpPage = () => (
  <div className="sign-in-up">
    {/* SIGN IN and SIGN UP */}
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
