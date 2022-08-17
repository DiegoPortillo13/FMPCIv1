import React, { useState } from 'react'
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideNavData } from "./SideNavData";
import "./SideNavCss.css";
import { IconContext } from "react-icons";

function SideNavJs() {
    const [sidebar, setSideBar] = useState(false)
    const showSideBar = () => setSideBar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{ color: '#f5f5f5' }}>
                <div className='sidenav'>
                    <Link to='#' className='menu-bar'>
                        <FaIcons.FaBars onClick={showSideBar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'sidenav-nav active' : 'sidenav-nav'}>
                    <ul className='sidenav-items' onClick={showSideBar}>
                        <li className='sidenav-toggle'>
                            <Link to='#' className='menu-bar'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SideNavData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>

                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default SideNavJs