import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../../../../features/authentication/pages/Login/Login'
import { SignUp } from '../../../../features/authentication/pages/SignUp/SignUp'

export const AuthenticationLayout = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
  return (
    <div className='w-100 flex justify-center h-screen bg-slate-50 pt-48 pb-48'>
        <Routes>
            <Route path='login' element={<Login/>}>            
            </Route>
            <Route path='signup' element={<SignUp/>}>            
            </Route>
            <Route path='**' element={<Navigate to='login'/>}>            
            </Route>
        </Routes>
    </div>
  )
}
