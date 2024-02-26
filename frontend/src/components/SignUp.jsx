import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-1/5 border-2 border-lime-400 rounded-lg p-[20px]">
      <h1 className="text-white text-center mt-[10px] mb-[10px] text-3xl font-semibold">
        Sign Up
      </h1>
      <p className="text-slate-300 text-center mb-[20px]">
        Enter your information to create an account
      </p>
      <p className="text-white font-medium mb-[5px]">First Name</p>
      <InputBox
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <p className="text-white font-medium mb-[5px]">Last Name</p>
      <InputBox
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
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
      <Button
        label={"Sign Up"}
        onclick={async () => {
          const response = await axios.post(
            "http://localhost:3000/api/v1/user/signup",
            {
              username,
              firstName,
              lastName,
              password,
            }
          );
          const statusCode = response.status;

          if (!(statusCode === 200)) {
            return console.log(statusCode, response.data.message);
          }

          console.log(response.data.message);
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        }}
      />
      <p className="text-slate-300 text-center mt-[10px]">
        Already have an account?{" "}
        <Link className="cursor-pointer underline" to={"/signin"}>
          Login
        </Link>
      </p>
    </div>
  );
};
