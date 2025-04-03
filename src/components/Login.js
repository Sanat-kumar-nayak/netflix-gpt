import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [isSignIn, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInUp = () => {
    setIsSignin(!isSignIn);
  };

  const handleClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      //Sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in

          const user = userCredential.user;
          console.log(user);
          console.log(auth);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
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
        <div className="absolute w-3/12  left-0 right-0 mx-auto my-24  p-10 bg-black bg-opacity-80 text-white">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-white font-bold text-4xl py-5">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-4 w-full my-4 bg-transparent  border-white border-2 rounded-sm"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email or mobile number"
              className="p-4 w-full my-4 bg-transparent  border-white border-2 rounded-sm"
            />
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="p-4 w-full my-4 bg-transparent border-2 border-white rounded-sm"
            />
            <p className="text-red-600 text-md">{errorMessage}</p>
            <button
              className="p-4 w-full bg-red-600 my-4 rounded-sm"
              onClick={handleClick}
            >
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
