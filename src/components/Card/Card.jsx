import React, { useState } from 'react'
import {AnimateSharedLayout} from 'framer-motion'

const Card = (props) => {

const [expanded, setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
        {
            expanded? (
                'Expanded'
            ):
            <CompactCard param = {props} />
        }
    </AnimateSharedLayout>
  )
}

function CompactCard ({param}){
    const png = param.png;
    return(
        <div className="CompactCard">
            <div className="radialBar">
                Chart
            </div>
            <div className="detail">
                <png/>
                <span>${param.value}</span>
                <span>últimas 24h horas.</span>
            </div>
        </div>
    )
}

export default Card