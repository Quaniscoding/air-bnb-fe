import React, { useState } from "react";
import { createUserFields } from "../../../utils/formFields";
import FormAction from "../../Auth/FormAction";
import { callCreateUser } from "../../../redux/reducers/user/createUser";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import Input from "../../Auth/Input";
import { callGetlistUserByPagination } from "../../../redux/reducers/user/getUserByPagination";
const fields = createUserFields;
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
export default function CreateUser({ active }) {
  let dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(callCreateUser(formData));
      if (result) {
        dispatch(callGetlistUserByPagination(active, 11, ""));
      }
      result.isError ? openNotificationFail() : openNotificationSuccess();
    } catch (error) {}
  };
  return (
    <div>
      <button
        data-modal-target="createUserModel"
        data-modal-toggle="createUserModel"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Create user
      </button>
      <div
        id="createUserModel"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New User
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="createUserModel"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form
              className="p-4 md:p-5"
              onSubmit={handleSubmit}
              name="basic"
              autoComplete="on"
            >
              {fields.map((field) => (
                <Input
                  key={field.id}
                  value={formData[field.id] || ""}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                />
              ))}
              <FormAction handleSubmit={handleSubmit} text="Create User" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
