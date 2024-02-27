import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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
        placeholder={"luffy@xyz.com"}
      />
      <p className="text-white font-medium mb-[5px]">Password</p>
      <InputBox
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder={""}
      />
      <Button
        label={"Sign In"}
        onclick={async () => {
          try {
            const response = await axios.post(
              "https://paytm-ak.onrender.com/api/v1/user/signin",
              {
                username: email,
                password: password,
              }
            );
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("firstName", response.data.firstName);
            navigate("/dashboard");
          } catch (error) {
            // handle errors
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              toast.error(error.response.data.message);
            } else if (error.request) {
              // The request was made but no response was received
              console.error("No Response Received");
            } else {
              // Something happened in setting up the request that triggered an Error
              console.error("Request Error:", error.message);
            }
          }
        }}
      />
      <Toaster />
      <p className="text-slate-300 text-center mt-[10px]">
        Don't have an account?{" "}
        <Link className="underline cursor-pointer" to={"/signup"}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};
