/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import AuthSourceAPI from '../../api/resources/AuthSource'
import SpinnerElement from '../helpers/SpinnerElement'
import ToastNotification from '../helpers/ToasNotify'

const BottomNavigation = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await AuthSourceAPI.logout()
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      navigate('/')
    } catch (error) {
      ToastNotification.toastError(error.response.data.message)
    }
    setIsLoading(false)
  }

  const alerLogout = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Anda Ingin Logout?',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      confirmButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout()
      }
    })
  }

  return (
    <>
      { isLoading && <SpinnerElement/> }
      <div
        className='
          fixed
          bottom-0
          inset-x-0
          h-[66px]
          lg:hidden
          bg-white
          flex
          justify-evenly
          items-center
          shadow-lg
          border
        '
      >
        <NavLink
          to='/user'
          className='
            bottomNavigation
            active:text-blue-500
          '
        >
          <div className='
              flex
              flex-col
              gap-2
              items-center
            '
          >
            <i className="fa-solid fa-user-group"></i>
            <span className='text-xs'>Users</span>
          </div>
        </NavLink>

        <NavLink
          to='/dashboardAdmin'
          className='
            bottomNavigation
            active:text-blue-500
          '
        >
          <div
            className='
              flex
              flex-col
              gap-2
              items-center
            '
          >
            <i className="fa-solid fa-house"></i>
            <span className='text-xs'>Home</span>
          </div>
        </NavLink>

        <button
          onClick={alerLogout}
          className='
              flex
              flex-col
              gap-2
              items-center
            '
        >
          <i className="fa-solid fa-power-off"></i>
          <span className='text-xs'>Logout</span>
        </button>

      </div>
    </>
  )
}

export default BottomNavigation
