import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

import './Chart.css';

const ChartTable = ({ timeline }) => {

    let labels = [];
    let set = [];

    timeline.map(entry => {
        labels.push(entry.date);
        set.push(entry.close);
        return null;
    })

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Closed:",
                data: set,
                fill: true,
                backgroundColor: "#064a418e",
                pointBackgroundColor: "#063B4A",
                pointBorderColor: "#060E4B",
                pointBorderWidth: 1,
                borderColor: "#060E4B",
                tension: 0.2,
                borderWidth: 3,
                borderCapStyle: "butt",
                pointHitRadius: 2
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 10
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                displayColors: false,
                intersect: false,
                mode: "index"
            }
        },
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return `$${value}`;
                    }
                }
            }
        }
    }
    
    return (
        <section className='Chart__Container' style={{backgroundColor: "#06343f"}}>
            <Line data={data} options={options} />
        </section>
    )
}

const mapStateToProps = ({ getChart: { timeline } }) => {
    return ({
        timeline
    })
}

export default connect(mapStateToProps)(ChartTable);