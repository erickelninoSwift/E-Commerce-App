import React from "react";
import { useState, useContext } from "react";
import FromInput from "./FromInput";
import { AuthChoice } from "./AuthChoice";
import SignUpImage from "../signup/SignUpImage";
import GoogleButton from "../GoogleButton/GoogleButton";
import { UserContext } from "../../contex/UserContext";
import { signInAuthUserWithEmailPassword } from "../../routes/signin/firebase";

const LoginFrom = ({ loginPage, islogin, loginUser }) => {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [SignInError, setSignInErro] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { setCurrentUser } = useContext(UserContext);

  const handleLoginForm = async (e) => {
    e.preventDefault();
    if (!username || !userPassword) return;

    try {
      const response = await signInAuthUserWithEmailPassword(
        username,
        userPassword
      );
      setCurrentUser(response.user);

      setUsername("");
      setUserPassword("");
    } catch (error) {
      setSignInErro(true);
      setErrorMessage(error.message);
      console.log(`Error while Signing In ${error}`);
    }
  };
  return (
    <>
      <div className="w-full flex justify-center">
        <section className="h-screen w-[1048px]">
          <div className="container h-full px-6 py-24">
            {SignInError ? (
              <div
                role="alert"
                className="rounded border-s-4 mb-5 mt-5 border-red-500 bg-red-50 p-4"
              >
                <strong className="block font-medium text-red-800">
                  {" "}
                  Something went wrong{" "}
                </strong>

                <p className="mt-2 text-sm text-red-700">{errorMessage}</p>
              </div>
            ) : (
              ""
            )}
            <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
              <SignUpImage />
              <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
                <h1 className="text-3xl mb-5">Login now !</h1>
                <form onSubmit={(e) => handleLoginForm(e)}>
                  <FromInput
                    inpotField={username}
                    label={"Email address"}
                    setField={setUsername}
                  />

                  <FromInput
                    inpotField={userPassword}
                    label={" Password"}
                    setField={setUserPassword}
                    inputType="password"
                  />

                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Sign in
                  </button>

                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                      OR
                    </p>
                  </div>
                  <GoogleButton
                    loginUserwithGoogle={loginUser}
                    message={"CONTINUE WITH GOOGLE"}
                  />
                </form>

                <AuthChoice
                  message={"Don't have an account?"}
                  message2={"Register"}
                  authMethod={loginPage}
                  method={islogin}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginFrom;
