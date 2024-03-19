import {
    PiHouseLight,
    PiClipboard,
    PiUsers, 
    PiPackageLight, 
    PiGraphLight,
    PiMoneyLight
 } from "react-icons/pi"

 import img1 from '../imgs/img1.png'
 import img2 from '../imgs/img2.png'
 import img3 from '../imgs/img3.png'

 import { BiMoneyWithdraw } from "react-icons/bi"

 export const SidebarData = [
    {
        icon: PiHouseLight,
        heading: 'Dashboard',
    },
    {
        icon: PiClipboard,
        heading: 'Ordens',
    },
    {
        icon: PiUsers,
        heading: 'Clientes',
    },
    {
        icon: PiPackageLight,
        heading: 'Produtos',
    },
    {
        icon: PiGraphLight,
        heading: 'Balanço',
    },
 ];

 export const CardsData =[
    {
        title: 'Vendas',
        color: {
            backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        barValue: '70%',
        value: '25,970',
        png: PiMoneyLight,
        series: [
            {
                name: 'Vendas',
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: 'Receita',
        color: {
            backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
            boxShadow: '0px 10px 20px 0px #FDC0C7',
        },
        barValue: '80%',
        value: '14,270',
        png: BiMoneyWithdraw,
        series: [
            {
                name: 'Receita',
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: 'Gastos',
        color: {
            backGround: 'linear-gradient(180deg, #ffb950 0%, #ffc55c 100%)',
            boxShadow: '0px 10px 20px 0px #FDC0C7',
        },
        barValue: '60%',
        value: '4,270',
        png: PiClipboard,
        series: [
            {
                name: 'Despesas',
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
 ];

 export const DataChart = {
    options: {
        chart: {
            type: 'area',
            height: 'auto',
        },
        dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.35,
        },
        fill: {
            colors: ['#fff'],
            type: 'gradient',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            colors: ['white'],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
        grid: {
            show: 'true',
        },
        xaxis: {
            type: 'datatime',
            categories: [
                '00:20',
                '2:00',
                '4:00',
                '6:00',
                '8:00',
                '10:00',
                '12:00',
            ],
        },
    },
}


export const UpdateData = [
    {
        img: img1,
        name: 'Jackie Chan',
        noti: ' pediu 2 notebooks Lenovo',
        time: '40 min atrás',
    },
    {
        img: img2,
        name: 'Philip Gal',
        noti: ' pediu 1 carregador tipo C',
        time: '2 horas atrás',
    },
    {
        img: img3,
        name: 'Elain',
        noti: ' pediu 1 pin de acesso',
        time: '15 min atrás',
    },
]