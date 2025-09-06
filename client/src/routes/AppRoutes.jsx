import { Routes, Route } from "react-router-dom";
import { Home,SignIn, SignUp } from "@/pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
    </Routes>
  );
}