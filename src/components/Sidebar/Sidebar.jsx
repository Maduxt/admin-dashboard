import React, { useState } from 'react'
import Logo from '../../imgs/logo.png'
import { motion } from 'framer-motion'
import { SidebarData } from '../../Data/Data'
import { PiSignOutLight } from "react-icons/pi"
import { HiBars3 } from "react-icons/hi2";
import './Sidebar.css'


const Sidebar = () => {
const [selected, setSelected] = useState(0)
const [expanded, setExpanded] = useState(true)

const sidebarVariants = {
    true: {
        left: '0'
    },
    false: {
        left: '-60%'
    }
}

  return (
    <>
        <div className='bars' 
        style={expanded? {left: '60%'}:{left: '5%'}}
        onClick={()=>setExpanded(!expanded)}
        >
            <HiBars3 />
        </div>
    <motion.div className="Sidebar"
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
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
    </motion.div>
    </>
  )
}

export default Sidebar;