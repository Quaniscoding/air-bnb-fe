import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { callPostAvatarUser } from "../../../redux/reducers/user/postAvatarUser";
import { notification } from "antd";
import { callGetlistUserByPagination } from "../../../redux/reducers/user/getUserByPagination";

const openNotificationFail = () => {
  notification["error"]({
    message: "Notification!",
    description: "Post avatar user failed!",
  });
};

const openNotificationSuccess = () => {
  notification["success"]({
    message: "Notification!",
    description: "Post avatar user Success!",
  });
};

export default function PostAvatar({ user, closeModal, active }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(new FormData());
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    formData.set("dataUpload", file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(callPostAvatarUser(user._id, formData));
      result.isPost ? openNotificationSuccess() : openNotificationFail();
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
      id="postAvatarModel"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 h-full md:inset-0 max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <form
          className="relative bg-white rounded-lg shadow dark:bg-gray-700"
          onSubmit={handleSubmit}
        >
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Avatar
            </h3>
            <button
              onClick={closeModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="postAvatarModel"
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
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="avatar"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Avatar
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="avatar"
                  type="file"
                  name="avatar"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="submit"
              className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
