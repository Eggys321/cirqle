import React from "react";
import appLogo from "@/assets/imgs/app-logo.svg";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <>
      <main className="bg-[#14191F] min-h-screen">
        <div className="w-[120px] md:w-[144px] mx-auto lg:mx-0 lg:ms-40 pt-8">
          <Link to="/">
            <img src={appLogo} alt="app logo" className="w-full" />
          </Link>
        </div>
        <section className="container min-h-screen flex justify-center  gap-20 mx-auto pt-4  pb-1 ">
          {children}
        </section>
      </main>
    </>
  );
};

export default AuthLayout;
