import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Search, Person, Menu } from '@mui/icons-material';
import { useSelector, useDispatch } from "react-redux";
import variables from '../styles/variables.scss';
import '../styles/Navbar.scss';

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const user = useSelector((state) => {
    console.log("State", state)
    return state.user});
  console.log("User", user);
  return (
    <div className='navbar'>
        <a href="/">
            <img src="/assets/logo.png" alt="logo" />
        </a>

        <div className='navbar_search'>
            <input type="text" placeholder='Search' />
            <IconButton>
              <Search sx={{ color: variables.pinkred }}
            // onClick={() => {navigate(`/properties/search/${search}`)}} 
            />
            </IconButton>
        </div>

        <div className='navbar_right'>
          {user ? (<a href='/create-listing'>Become A Host</a>) : (<a href='/login'>Become A Host</a>)}
          <button className='navbar_right_account'>
            <Menu sx={{ color: variables.darkgrey }} />
            {!user ? (
              <Person sx={{ color: variables.darkgrey }} />
            ) : (
              <img src={`http://localhost:7000/${user.profileImagePath.replace("public", "")}`} alt='profile photo' style={{ objectFit: "cover", borderRadius: "50%"}}/>
            )}
          </button>
        </div>
    </div>
  )
}

export default Navbar