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
  const handleEditUserClick = (user) => {
    setSelectedUser(user);
  };
  const handlePostAvatar = (user) => {
    setSelectedUserAvatar(user);
  };
  const handleDeleteUser = (user) => {
    setSelectedDeleteUser(user);
  };
  const handleModalClose = () => {
    setSelectedUser(null);
    setSelectedUserAvatar(null);
    setSelectedDeleteUser(null);
  };
  return (
    <div className="pt-14 sm:ml-64 dark:bg-gray-700 h-[1000px]">
      <div className="relative overflow-x-auto shadow-md dark:bg-gray-700">
        <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900 p-4">
          <CreateUser active={activePage} />
          <SearchUser />
        </div>
        <TableUser
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
