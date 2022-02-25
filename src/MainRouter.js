import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import EditProfile from './user/EditProfile'
import Menu from './core/Menu'
import NewExpense from './expense/NewExpense'
import Expenses from './expense/Expenses'
import Reports from './report/Reports'

const MainRouter = () => {
    return ( 
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/users" element={ <Users /> }/>
        <Route path="/signup" element={ <Signup /> }/>
        <Route path="/signin" element={ <Signin /> }/>
        <Route path="/user/:userId" element={<PrivateRoute><Profile /></PrivateRoute>}/>
        <Route path="/user/edit/:userId" element={<PrivateRoute><EditProfile /></PrivateRoute>}/>
        
        <Route path="/expenses/new/" element={<PrivateRoute><NewExpense /></PrivateRoute>}/>
        <Route path="/expenses/all/" element={<PrivateRoute><Expenses /></PrivateRoute>}/>
        <Route path="/expenses/reports/" element={<PrivateRoute><Reports /></PrivateRoute>}/>

      </Routes>
    </div>
   )
}

export default MainRouter
