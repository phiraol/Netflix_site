import React from 'react'
import "./Header.css"
import Netflixlogo from "../../assets/image/netflixlogo.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
      <div className='header_outer_container'>
          <div className='header_coontainer'>
              <div className='header_left'>
                <ul>
                  <li> <img src={Netflixlogo} alt="Netflix logo" width="150"/> </li>
                  <li>Home</li>
                  <li>TVShow</li>
                  <li>Movies</li>
                  <li>Latest</li>
                  <li>MyLists</li>
                  <li>Browse by Language</li>
                </ul>   
              </div>
              <div className='header_right'>
                <ul>
                  <li><SearchIcon/></li>
                  <li><NotificationsNoneIcon/></li>
                  <li><AccountBoxIcon/></li>
                  <li><ArrowDropDownIcon/></li>
                </ul>
              </div>
          </div>
    </div>
  )
}

export default Header
