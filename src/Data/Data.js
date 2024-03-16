import {
    PiHouseLight,
    PiClipboard,
    PiUsers, 
    PiPackageLight, 
    PiGraphLight,
    PiMoneyLight
 } from "react-icons/pi"

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
            background: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        barValue: 70,
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
            background: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
            boxShadow: '0px 10px 20px 0px #FDC0C7',
        },
        barValue: 80,
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
        title: 'Despesas',
        color: {
            background: 'linear-gradient(rgb(248, 212, 154)) -146.42%, rgb(255, 202, 113) -46.42%',
            boxShadow: '0px 10px 20px 0px #F9D59B',
        },
        barValue: 60,
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