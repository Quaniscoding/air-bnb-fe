import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import Home from './containers/Home';
import ListRoom from './containers/ListRoom';
import RoomDetails from './containers/RoomDetails';
import UserInfo from './containers/UserInfo';
import SignIn from './template/Auth/SignIn';
import Signup from './template/Auth/SignUp';
import AdminLayout from './template/Admin/AdminLayout';
import BookRoomManagement from './template/Admin/BookRoomManagement';
import LocationManagement from './template/Admin/LocationManagement';
import RoomManagement from './template/Admin/RoomManagement';
import UserManagement from './template/Admin/userManagement/UserManagement';

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/:id' element={<ListRoom />} />
          <Route path='roomDetails' element={<RoomDetails />} />
          <Route path='userDetails' element={<UserInfo />} />
          /*admin*/
        </Route>
        <Route path='/' element={<AdminLayout />}>
          <Route path='admin/bookroomManagement' element={<BookRoomManagement />} />
          <Route path='admin/locationManagement' element={<LocationManagement />} />
          <Route path='admin/roomManagement' element={<RoomManagement />} />
          <Route path='admin/userManagement' element={<UserManagement />} />
        </Route>
        <Route path='signIn' element={<SignIn />} />
        <Route path='signUp' element={<Signup />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
