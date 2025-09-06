import React from 'react'
import { Link } from 'react-router-dom'

const AuthInput = ({label,htmlFor,inputType,placeholder}) => {
  return (
    <>
    <div className='font-[500] text-[#C6D5E5] text-[16px] pb-2'>

    <label htmlFor={htmlFor}> {label} </label>
    </div>
    <div>

    <input type={inputType} placeholder={placeholder} className='border-[#2E4052] border-[1px] w-full h-[56px] ps-4 bg-[#1E2936] outline-none placeholder:text-[#98A2B3] placeholder:font-[400]  rounded-md mb-3'/>
    </div>
    </>
  )
}

export default AuthInput