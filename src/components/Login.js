import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignin] = useState(true);

  const toggleSignInUp = () => {
    setIsSignin(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img
          className="w-full absolute"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
          alt=""
        />
        <div className="absolute w-3/12  left-0 right-0 mx-auto my-36  p-10 bg-black bg-opacity-80 text-white">
          <form>
            <h1 className="text-white font-bold text-4xl py-5">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                type="text"
                placeholder="Name"
                className="p-4 w-full my-4 bg-transparent  border-white border-2 rounded-sm"
              />
            )}
            <input
              type="text"
              placeholder="Email or mobile number"
              className="p-4 w-full my-4 bg-transparent  border-white border-2 rounded-sm"
            />
            <input
              type="password"
              placeholder="password"
              className="p-4 w-full my-4 bg-transparent border-2 border-white rounded-sm"
            />
            <button className="p-4 w-full bg-red-600 my-4 rounded-sm">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInUp}>
              {isSignIn
                ? "New to Netflix ? Sign up now."
                : "Already Registered ? Sign In now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
