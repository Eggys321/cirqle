import React from "react";

const AuthForm = ({ formTitle, description, children }) => {
  return (
    <>
      <form className="bg-[#161E27] md:w-[537px] h-[400px] mt-14 rounded-[20px] p-[20px] md:p-[55px] ">
        <h2 className="text-[#FFFFFF] font-[700] text-[22px] md:text-[32px] ">
          {formTitle}
        </h2>
        <p className="text-[#C6D5E5]  font-[400] text-[18px] md:text-[17px] pb-6 ">
          {description}
        </p>
        {children}
      </form>
    </>
  );
};

export default AuthForm;
