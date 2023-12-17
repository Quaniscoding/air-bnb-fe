import React, { useState } from "react";
import { signinFields } from "../../utils/formFields.js";
import Input from "./Input";
import { callLogin } from "../../redux/reducers/auth/userSignIn.js";
import FormExtra from "./FormExtra.js";
import FormAction from "./FormAction.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notification } from "antd";
const fields = signinFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));
const openNotificationSuccess = () => {
  notification["success"]({
    message: "Notification !",
    description: "Login success!",
  });
};
const openNotificationFail = () => {
  notification["error"]({
    message: "Notification !",
    description: "Your email or password is incorrect !",
  });
};
export default function SignIn() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = loginState.email;
      const pass_word = loginState.pass_word;
      const result = await dispatch(callLogin({ email, pass_word }));
      {
        result.isError ? openNotificationFail() : openNotificationSuccess();
      }
    } catch (error) {}
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://play-lh.googleusercontent.com/1zfN_BL13q20v0wvBzMWiZ_sL_t4KcCJBeAMRpOZeT3p34quM-4-pO-VcLj8PJNXPA0=w240-h480-rw"
            alt="logo"
          />
          airbnb
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              id="formLogin"
              name="basic"
              autoComplete="on"
            >
              <div>
                {fields.map((field) => (
                  <Input
                    key={field.id}
                    handleChange={handleChange}
                    value={loginState[field.id]}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                  />
                ))}
              </div>
              <FormExtra />
              <FormAction handleSubmit={handleSubmit} text="Sign in" />

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/signup");
                  }}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
