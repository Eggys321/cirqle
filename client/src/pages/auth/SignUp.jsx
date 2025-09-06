import React from 'react'
import AuthLayout from "@/Layout/AuthLayout";
import {AuthForm,AuthInput} from '@/components';
const SignUp = () => {
  return (
    <AuthLayout>

      <AuthForm>
        <AuthInput/>
      </AuthForm>
    </AuthLayout>
  )
}

export default SignUp