import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import Image from 'next/image'
const BarChartDemo = (props) => {
    const labels = [
        'Python',
        'Sklearn',
        'Tensorflow',
        "HTML,CSS & JS",
        "React.Js",
        "Next.Js"
        // add more image URLs as needed
      ];
    const [basicData] = useState({
        labels: labels,
        datasets: [
            {
                label: props.label,
                backgroundColor: ["#306998", "#29ABE2", "#FFA800", "#f0db4f","#61dbfb","#110c11"],
                data: props.data
            }
        ]
    });


    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        

        return {
            basicOptions,
        }
    }

    const { basicOptions} = getLightTheme();

    return (
        <div>
            <div className="card">
                <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}

export default BarChartDemo