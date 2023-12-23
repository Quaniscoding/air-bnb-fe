import React, { useState, useCallback } from "react";
import TableUser from "./TableUser";
import EditUser from "./EditUser";
import SearchUser from "./SearchUser";
import Pagination from "./Pagination";
import PostAvatar from "./PostAvatar";
import DeleteUser from "./DeleteUser";
import CreateUser from "./CreateUser";

export default function UserManagement() {
  const [activePage, setActivePage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserAvatar, setSelectedUserAvatar] = useState(null);
  const [selectedDeleteUser, setSelectedDeleteUser] = useState(null);
  const [selectedCreateUser, setSelectedCreateUser] = useState(null);
  const [keyWord, setKeyWord] = useState("");
  const handleEditUserClick = (user) => {
    setSelectedUser(user);
  };

  const handlePostAvatar = (user) => {
    setSelectedUserAvatar(user);
  };

  const handleDeleteUser = (user) => {
    setSelectedDeleteUser(user);
  };

  const handleCreateUser = (user) => {
    setSelectedCreateUser(user);
  };

  const handleModalClose = useCallback(() => {
    setSelectedUser(null);
    setSelectedUserAvatar(null);
    setSelectedDeleteUser(null);
    setSelectedCreateUser(null);
  }, []);

  return (
    <div className="pt-14 sm:ml-64 dark:bg-gray-700 h-[1000px]">
      <div className="relative overflow-x-auto shadow-md dark:bg-gray-700">
        <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900 p-4">
          <div>
            <a
              onClick={handleCreateUser}
              data-modal-target="createUserModel"
              data-modal-toggle="createUserModel"
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
              type="button"
            >
              Create user
            </a>
          </div>
          {selectedCreateUser && (
            <CreateUser active={activePage} closeModal={handleModalClose} />
          )}
          <SearchUser keyWord={keyWord} setKeyWordTableUser={setKeyWord} />
        </div>
        <TableUser
          keyWord={keyWord}
          active={activePage}
          onEditUserClick={handleEditUserClick}
          onPostAvatarClick={handlePostAvatar}
          onDeleteUserClick={handleDeleteUser}
        />
        {selectedUser && (
          <EditUser
            user={selectedUser}
            active={activePage}
            closeModal={handleModalClose}
          />
        )}
        {selectedUserAvatar && (
          <PostAvatar
            user={selectedUserAvatar}
            active={activePage}
            closeModal={handleModalClose}
          />
        )}
        {selectedDeleteUser && (
          <DeleteUser
            user={selectedDeleteUser}
            active={activePage}
            closeModal={handleModalClose}
          />
        )}
        <Pagination active={activePage} setActive={setActivePage} />
      </div>
    </div>
  );
}
