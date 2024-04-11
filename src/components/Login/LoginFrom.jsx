import React from "react";
import { useState } from "react";
import FromInput from "./FromInput";
import { AuthChoice } from "./AuthChoice";
const LoginFrom = ({ loginPage, islogin }) => {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleLoginForm = async (e) => {
    e.preventDefault();
    console.log("We are trying to login");
  };
  return (
    <>
      <div className="w-full flex justify-center">
        <section className="h-screen w-[1048px]">
          <div className="container h-full px-6 py-24">
            <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="w-full"
                  alt="Phone image"
                />
              </div>

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

                  <a
                    className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    style={{ backgroundColor: "#3b5998" }}
                    href="#!"
                    role="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    <span className="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                      </svg>
                    </span>
                    Continue with Facebook
                  </a>
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
