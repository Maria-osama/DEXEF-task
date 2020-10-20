import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class weekSummary extends Component {
    
    render() {
        const chartData = {
            labels: ["Sat" , "Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri"],
            datasets: [
               {
                    data: [5 , 15 , 10 , 15 , 18 ,15 , 20],
                    backgroundColor: 'transparent',
                    borderColor: "#0184fe",
                    borderWidth: 4,
                  }
            ]
        }
        return (
            <div className="row bg-white week-summary-section">
                <div className="col-md-4">
                    <table class="table text-left week-summary-table">
                        <thead>
                            <tr>
                                <th scope="col">All</th>
                                <th scope="col">10 , 000 AED</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Portrait.</td>
                                <td>2 , 500. AED</td>
                            </tr>
                            <tr>
                                <td>Modern.</td>
                                <td>2 , 500. AED</td>
                            </tr>
                            <tr>
                                <td>Sketches.</td>
                                <td>2 , 500. AED</td>
                            </tr>
                            <tr>
                                <td>Natural.</td>
                                <td>2 , 500. AED</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-2 middle-col">
                    <div>
                        <h1>98</h1>
                        <h6>Total Items</h6>
                    </div>
                </div>
                <div className="col-md-6">
                   
                    <div className="chart">
                <Line
                    data={chartData}
                    options={{
                        title: {
                            display: false
                        },
                        legend:{
                            display:false
                          },
                        elements: {
                            point:{
                                radius: 0
                            }
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    maxTicksLimit: 5
                                }
                            }]
                        }
                    }}
                />
            </div>
                  
                </div>
            </div>
        )
    }
}

export default weekSummary;