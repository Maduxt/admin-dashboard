import React, { useState } from 'react'
import Logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/Data'
import { PiSignOutLight } from "react-icons/pi"
import './Sidebar.css'


const Sidebar = () => {
const [selected, setSelected] = useState(0)

  return (
    <div className="Sidebar">
        {/* {logo} */}
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                M<span>o</span>nye
            </span>
        </div>
        {/* {menu} */}
        <div className="menu">
            {SidebarData.map((item, index)=>{
                return(
                    <div className={selected===index?'menuItem active': 'menuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                        {item.heading}
                        </span>
                    </div>
                )
            })}

            <div className="menuItem">
                <PiSignOutLight />
            </div>
        </div>
    </div>
  )
}

export default Sidebar;