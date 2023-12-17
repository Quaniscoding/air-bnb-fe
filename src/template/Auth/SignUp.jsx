import { useState } from "react";
import { signupFields } from "../../utils/formFields.js";
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notification } from "antd";
import { callSignUp } from "../../redux/reducers/auth/userSignUp.js";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));
const openNotificationFail = () => {
  notification["error"]({
    message: "Notification !",
    description: "Email already in use!",
  });
};
const openNotificationSuccess = () => {
  notification["success"]({
    message: "Notification !",
    description: "Create Success!",
  });
};
const openNotificationErrorPassword = () => {
  notification["error"]({
    message: "Notification !",
    description: "Password doesn't match !",
  });
};
export default function Signup() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = signupState.email;
      const pass_word = signupState.pass_word;
      const username = signupState.username;
      const confirmPassword = signupState.confirmPassword;
      const phone = signupState.phone;
      if (pass_word === confirmPassword) {
        const result = await dispatch(
          callSignUp({ email, pass_word, username, confirmPassword, phone })
        );
        result.isError ? openNotificationFail() : openNotificationSuccess();
      } else {
        openNotificationErrorPassword();
      }
    } catch (error) {}
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
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
              Sign up your account
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
                    value={signupState[field.id]}
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
              <FormAction handleSubmit={handleSubmit} text="Sign up" />

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                You have an account ?{" "}
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/signin");
                  }}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
