import { notification } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { callGetlistUserByPagination } from "../../../redux/reducers/user/getUserByPagination";
import { callDeleteUser } from "../../../redux/reducers/user/deleteUser";
const openNotificationFail = () => {
  notification["error"]({
    message: "Notification!",
    description: "Delete user failed!",
  });
};

const openNotificationSuccess = () => {
  notification["success"]({
    message: "Notification!",
    description: "Delete user Success!",
  });
};
export default function DeleteUser({ user, active, closeModal }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(callDeleteUser(user._id));
      result.isDelete ? openNotificationSuccess() : openNotificationFail();
      if (result) {
        dispatch(callGetlistUserByPagination(active, 11, ""));
      }
      closeModal();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      id="deleteUserModel"
      tabIndex={-1}
      aria-hidden="true"
      className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full "
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        {/* Modal content */}
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-900 sm:p-5 border-2 border-rose-500">
          <svg
            class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="mb-4 text-gray-500 dark:text-gray-300">
            Are you sure you want to delete {user.username}?
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button
              data-modal-toggle="deleteUserModel"
              onClick={closeModal}
              type="button"
              className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Yes, I'm sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
