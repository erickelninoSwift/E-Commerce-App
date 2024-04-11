import React from "react";
import { useState, useContext } from "react";
import "./signUpFrom.styles.scss";
import {
  createAuthUserWithEmailPassword,
  createUserDocumentFromAuth,
} from "../../routes/signin/firebase";
import FromInput from "../Login/FromInput";
import { AuthChoice } from "../Login/AuthChoice";
import SignUpImage from "./SignUpImage";
import { UserContext } from "../../contex/UserContext";

const Signupformv2 = ({ loginUser, loginPage, islogin }) => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [RePassword, setRePassword] = useState("");
  const [displayN, setDisplayname] = useState("");
  const { setCurrentUser } = useContext(UserContext);
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
      setCurrentUser(userAuthData.user);
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
            <SignUpImage />
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
                  inputType="password"
                />

                <FromInput
                  inpotField={RePassword}
                  label={"Enter Password Again"}
                  setField={setRePassword}
                  inputType="password"
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

                {/* <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>
                <GoogleButton
                  loginUserwithGoogle={loginUser}
                  message={"REGISTER WITH GOOGLE"}
                /> */}
              </form>
              <AuthChoice
                message={"Already have an Account ?"}
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
