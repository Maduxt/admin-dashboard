import React from 'react'
import Chart from 'react-apexcharts'

const CustomerReview = () => {
    const data = {
        series: [
            {
                name: 'Review',
                data: [10, 50, 30, 90, 40, 120, 100],
            },
        ],
        options: {
            chart: {
                type: 'area',
                height: 'auto'
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
                colors: ['#ff9s9f'],
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
            yaxis: {
                show: false,
            },
            toolbar: {
                show: false,
            },
        },
    }


    return (
    <div className="customerReview">
        <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview