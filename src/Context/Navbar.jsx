import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from './AuthContext'

export const Navbar = () => {
    const {isAuth , logIn , logOut} = useContext(AuthContext)
 
 
    return (
    <div>
        <button onClick={()=> { if(isAuth) logIn("R","Z");
                               else logOut()}}>

                                {isAuth ? "login" : "Logout"}
                               </button>

    </div>
  )
}
