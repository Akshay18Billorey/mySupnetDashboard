//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Route } from "react-router";
// import SelectTableComponent from "../../pages/Member/MemberList";
import MemberList from "../../pages/Member/MemberList";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            <p>{menuCollapse ? "" : ""}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu >
                            <MenuItem active={true} icon={<FaList />} >
                                MEMBERS<Link to="/member" component={MemberList} />
                            </MenuItem>
                            <MenuItem icon={<FaList />}>PENDING</MenuItem>
                            <MenuItem icon={<FaList />}>MENTORS</MenuItem>
                            <MenuItem icon={<FaList />}>EVENTS</MenuItem>
                            <MenuItem icon={<FaList />}>ARTICLES</MenuItem>
                            <MenuItem icon={<FaList />}>FLAGGED</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        {/* <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu> */}
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;