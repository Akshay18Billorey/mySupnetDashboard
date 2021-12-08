//import useState hook to create menu collapse state
import { useState, useRef } from "react";

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberList from "../../pages/Member/MemberList";
import MentorList from "../../pages/Mentors/MentorList";
import PendingList from "../../pages/Pending/PendingList";
import EventsList from "../../pages/Events/EventsList";
import ArticlesList from "../../pages/Articles/ArticlesList";
import FlaggedList from "../../pages/Flagged/FlaggedList";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
// import AiOutlineFile from "react-icons";
//import icons from react icons
import { FaList, FaUserFriends, FaFile, FaTachometerAlt } from "react-icons/fa";
import { FiHome, FiArrowLeft, FiLogOut, FiUsers, FiArrowRightCircle, FiFlag, FiCalendar } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
const Header = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const myRef = useRef(null);
    return (
        <>
            <Router>
                <div>
                    <div id="header">
                        <ProSidebar collapsed={menuCollapse}>
                            {/* <SidebarHeader>

                            </SidebarHeader> */}
                            <SidebarContent>
                                <Menu onClick={menuIconClick}>
                                    {menuCollapse ? (
                                        <MenuItem icon={<FaList />}></MenuItem>
                                    ) : (
                                        <MenuItem icon={<FiArrowLeft />}></MenuItem>
                                    )}
                                    {/* <MenuItem onClick={menuIconClick} icon={<FaList />}></MenuItem> */}
                                </Menu>
                                <Menu >
                                    <MenuItem active={true} icon={<FaUserFriends />}>MEMBERS<Link to="/Dashboard/member" /></MenuItem>
                                    <MenuItem icon={<FaTachometerAlt />}>PENDING<Link to="/Dashboard/pending" /></MenuItem>
                                    <MenuItem icon={<FiUsers />}>MENTORS<Link to="/Dashboard/mentor" /></MenuItem>
                                    <MenuItem icon={<FiCalendar />}>EVENTS<Link to="/Dashboard/event" /></MenuItem>
                                    <MenuItem icon={<FaFile />}>ARTICLES<Link to="/Dashboard/article" /></MenuItem>
                                    <MenuItem icon={<FiFlag />}>FLAGGED<Link to="/Dashboard/flagged" /></MenuItem>
                                </Menu>
                            </SidebarContent>
                            <SidebarFooter>
                                {/* <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu> */}
                            </SidebarFooter>
                        </ProSidebar>
                    </div>
                    <div style={{ marginLeft: "70px" }}>
                        <div ref={myRef}>
                            <Switch>
                                <Route exact path='/Dashboard/member' component={MemberList}></Route>
                                <Route exact path='/Dashboard/mentor' component={MentorList}></Route>
                                <Route exact path='/Dashboard/pending' component={PendingList}></Route>
                                <Route exact path='/Dashboard/event' component={EventsList}></Route>
                                <Route exact path='/Dashboard/article' component={ArticlesList}></Route>
                                <Route exact path='/Dashboard/flagged' component={FlaggedList}></Route>
                                {/* <Route exact path='/contact' component={Contact}></Route> */}
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    );
};

export default Header;
