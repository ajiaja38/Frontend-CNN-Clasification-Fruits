import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RequireAuth from './utils/RequireAuth'
import PrivateRoute from './utils/privateRoute'
import {
  // Common Pages
  LoginPage,
  RegisterPages,

  // adminPages
  DashboardAdmin,
  Users,
  UpdateUsers,
  AddNewUsers,

  // User Pages
  HomePageUsers,

  // Error
  UnAuthorizedPages
} from '../pages'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPages/>} />
        <Route path='/unAuthorized' element={<UnAuthorizedPages/>}/>

        {/* Parent Routes Auth Requirement */}
        <Route element={<RequireAuth redirectPath='/login' />}>

          {/* Private Routes For Admin */}
          <Route
            path='/dashboardAdmin'
            element={
              <PrivateRoute
                redirectPath='/unAuthorized'
                role='admin'
              >
                <DashboardAdmin/>
              </PrivateRoute>
            }
          />

          <Route
            path='/user'
            element={
              <PrivateRoute
                redirectPath='/unAuthorized'
                role='admin'
              >
                <Users/>
              </PrivateRoute>
            }
          />

          <Route
            path='/user/addNewUser'
            element={
              <PrivateRoute
                redirectPath='/unAuthorized'
                role='admin'
              >
                <AddNewUsers/>
              </PrivateRoute>
            }
          />

          <Route
            path='/user/profile/:id'
            element={
              <PrivateRoute
                redirectPath='/unAuthorized'
                role='admin'
              >
                <UpdateUsers/>
              </PrivateRoute>
            }
          />

          {/* Private Routes For Users */}
          <Route
            path='/homepageUsers'
            element={
              <PrivateRoute
                redirectPath='/unAuthorized'
                role='user'
              >
                <HomePageUsers/>
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
