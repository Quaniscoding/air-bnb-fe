import React, { useState } from "react";
import BookRoomManagement from "./BookRoomManagement";
import LocationManagement from "./LocationManagement";
import RoomManagement from "./RoomManagement";
import UserManagement from "./userManagement/UserManagement";
import { DATA_USER, USER_LOGIN } from "../../utils/constant";
import { getLocal } from "../../utils/config";
import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";

export default function AdminLayout() {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  );
}
