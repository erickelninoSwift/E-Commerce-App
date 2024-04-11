import React from "react";

export const AuthChoice = ({ message, message2, authMethod, method }) => {
  return (
    <>
      <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
        {message} {"  "}
        <a
          className="text-danger cursor-pointer transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
          onClick={() => authMethod(!method)}
        >
          {message2}
        </a>
      </p>
    </>
  );
};
