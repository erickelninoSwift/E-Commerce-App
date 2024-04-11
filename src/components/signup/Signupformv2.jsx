import React from "react";
import { useState } from "react";
import "./signUpFrom.styles.scss";
import {
  createAuthUserWithEmailPassword,
  createUserDocumentFromAuth,
} from "../../routes/signin/firebase";
import FromInput from "../Login/FromInput";
import { AuthChoice } from "../Login/AuthChoice";

const Signupformv2 = ({ loginUser, loginPage, islogin }) => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [RePassword, setRePassword] = useState("");
  const [displayN, setDisplayname] = useState("");

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    const user = {
      email,
      Password,

      createdAt: new Date(),
    };
    if (Password !== RePassword) {
      return;
    }

    try {
      const userAuthData = await createAuthUserWithEmailPassword(
        user.email,
        user.Password
      );

      const userRef = await createUserDocumentFromAuth(userAuthData.user, {
        displayName: displayN,
      });

      setEmail("");
      setDisplayname("");
      setPassword("");
      setRePassword("");
    } catch (error) {
      console.log(`Error while registering : ${error}`);
    }
  };
  return (
    <div className="w-full flex justify-center">
      <section className="h-screen w-[1048px]">
        <div
          className="container h-full px-12 py-12"
          style={{ margin: "0px auto" }}
        >
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
              <h2 className="text-3xl mb-5">Register now !</h2>
              <form onSubmit={(e) => handleSubmitButton(e)}>
                <FromInput
                  inpotField={displayN}
                  label={"Display Name"}
                  setField={setDisplayname}
                />

                <FromInput
                  inpotField={email}
                  label={"Email address"}
                  setField={setEmail}
                />

                <FromInput
                  inpotField={Password}
                  label={"Password"}
                  setField={setPassword}
                />

                <FromInput
                  inpotField={RePassword}
                  label={"Enter Password Again"}
                  setField={setRePassword}
                />
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  disabled={Password !== RePassword ? true : false}
                >
                  Register
                </button>

                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>

                <div className="text-center">
                  <button className="gsi-material-button" onClick={loginUser}>
                    <div className="gsi-material-button-state"></div>
                    <div className="gsi-material-button-content-wrapper">
                      <div className="gsi-material-button-icon">
                        <svg
                          version="1.1"
                          viewBox="0 0 48 48"
                          style={{ display: "block" }}
                        >
                          <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                          ></path>
                          <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                          ></path>
                          <path
                            fill="#FBBC05"
                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                          ></path>
                          <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                      </div>
                      <span className="gsi-material-button-contents">
                        Continue with Google
                      </span>
                      <span style={{ display: "none" }}>
                        Continue with Google
                      </span>
                    </div>
                  </button>
                </div>
              </form>
              <AuthChoice
                message={"You do have an account?"}
                message2={"Login"}
                authMethod={loginPage}
                method={islogin}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signupformv2;
