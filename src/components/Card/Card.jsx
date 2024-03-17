import React, { useState } from 'react'
import './card.css'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { LayoutGroup } from 'framer-motion'
import Chart from 'react-apexcharts'
import { IoMdClose } from "react-icons/io"
import { DataChart } from '../../Data/Data'


const Card = (props) => {

const [expanded, setExpanded] = useState(false)

  return (
    <LayoutGroup>
        {
             expanded?
                 <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>:
                 <CompactCard param = {props} setExpanded={()=>setExpanded(true)} />
        }
    </LayoutGroup>
  )
}

function CompactCard ({param, setExpanded}){

    const Png = param.png;
        return(
            <div className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            onClick={setExpanded}
            >
                <div className="radialBar">
                    <CircularProgressbar
                    value={param.barValue}
                    text={param.barValue}
                    />
                    <span>{param.title}</span>
                </div>
                <div className="detail">
                    < Png />
                    <span>${param.value}</span>
                    <span>Últimas 24h horas.</span>
                </div>
            </div>
        )
    }

function ExpandedCard({param, setExpanded}){
    return(
        <div className="ExpandedCard"
        style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
    }}
    layout
        >
            <div>
            <IoMdClose onClick={setExpanded} />
            </div>
            <span>
                {param.title}
            </span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={DataChart.options}/>
            </div>
            <span>Últimas 24 horas</span>
        </div>
    )
}

export default Card