import React from "react";
import AuthLayout from "@/Layout/AuthLayout";
import {AuthForm,AuthInput,MyButton} from "@/components";
import { Link } from "react-router-dom";


const SignIn = () => {
  return (
    <>
      <AuthLayout>
        <AuthForm
          formTitle="Welcome Back"
          description="Sign in to your account to continue"
        >
            <AuthInput label={"Email Address"} placeholder={'Enter email address'} />
            <AuthInput label={"Create Password"} placeholder={'Enter password'} />
            <div>

                <Link>Forgot Password?</Link>
            </div>

            <MyButton btnTxt='sign' />
        </AuthForm>
      </AuthLayout>
    </>
  );
};

export default SignIn;
