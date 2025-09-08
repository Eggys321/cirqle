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
            <AuthInput label="Email Address" htmlFor="email"  required type="email" placeholder='Enter email address' />
            <AuthInput label={"Enter Password"} type={"Password"} placeholder={'Enter password'} />
            <div className="flex justify-end text-[#23A26D] font-[400] text-[14px] pt-2 pb-5">

                <Link>Forgot Password?</Link>
            </div>

            <MyButton btnTxt='Sign In' className="w-full" />
        </AuthForm>
      </AuthLayout>
    </>
  );
};

export default SignIn;
