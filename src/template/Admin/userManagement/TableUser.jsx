import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetlistUserByPagination } from "./../../../redux/reducers/user/getUserByPagination";

export default function TableUser({
  active,
  onEditUserClick,
  onPostAvatarClick,
  onDeleteUserClick,
}) {
  let dispatch = useDispatch();
  const listUserByPagination = useSelector(
    (state) => state.getUserByPagination.listUserByPagination
  );
  let timeout = null;
  if (timeout != null) {
    clearTimeout(timeout);
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(callGetlistUserByPagination(active, 11, ""));
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [dispatch, active]);
  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              User name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Birth day
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-700">
          {listUserByPagination.result?.map((item, index) => {
            return (
              <tr
                className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={index}
              >
                <td className="w-4 p-4">{item._id}</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.avatar?.data}
                    alt=""
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {item.username}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.birth_day}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">{item.role}</td>
                <td className="px-6 py-4 flex justify-between items-center">
                  <a
                    href="#"
                    type="button"
                    data-modal-target="editUserModal"
                    data-modal-show="editUserModal"
                    onClick={() => onEditUserClick(item)}
                    className="font-medium text-green-600 dark:text-green-600 hover:underline hover:-translate-y-0.5 pb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    type="button"
                    data-modal-target="postAvatarModel"
                    data-modal-show="postAvatarModel"
                    onClick={() => onPostAvatarClick(item)}
                    className="font-medium text-black dark:text-white hover:underline hover:-translate-y-0.5 pb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    type="button"
                    data-modal-target="deleteUserModel"
                    data-modal-show="deleteUserModel"
                    onClick={() => onDeleteUserClick(item)}
                    className="font-medium text-red-600 dark:text-red-600 hover:underline hover:-translate-y-0.5 pb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
