import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-1/5 border-2 border-lime-400 rounded-lg p-[20px]">
      <h1 className="text-white text-center mt-[10px] mb-[10px] text-3xl font-semibold">
        Sign In
      </h1>
      <p className="text-slate-300 text-center mb-[20px]">
        Enter your credentials to access your account
      </p>
      <p className="text-white font-medium mb-[5px]">Email</p>
      <InputBox
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <p className="text-white font-medium mb-[5px]">Password</p>
      <InputBox
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button label={"Sign In"} />
      <p className="text-slate-300 text-center mt-[10px]">
        Don't have an account?{" "}
        <Link className="cursor-pointer underline" to={"/signup"}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};
