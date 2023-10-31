import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';

import UsersPage from "../components/UsersPage/UsersPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import UserdetailsPage from "../components/UserdetailsPage/UserdetailsPage";
import SingleUserdetailsPage from "../components/UserdetailsPage/SingleUserdetailsPage";
import CoursesPage from "../components/CoursesPage/CoursesPage";
import SingleCoursesPage from "../components/CoursesPage/SingleCoursesPage";
import TopicsPage from "../components/TopicsPage/TopicsPage";
import SingleTopicsPage from "../components/TopicsPage/SingleTopicsPage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />
            {/* protected route https://www.robinwieruch.de/react-router-private-routes/ */}

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
                    <Route path="/users" exact element={<UsersPage />} />
                    <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                    <Route path="/userdetails" exact element={<UserdetailsPage />} />
                    <Route path="/userdetails/:singleUserdetailsId" exact element={<SingleUserdetailsPage />} />
                    <Route path="/courses" exact element={<CoursesPage />} />
                    <Route path="/courses/:singleCoursesId" exact element={<SingleCoursesPage />} />
                    <Route path="/topics" exact element={<TopicsPage />} />
                    <Route path="/topics/:singleTopicsId" exact element={<SingleTopicsPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
