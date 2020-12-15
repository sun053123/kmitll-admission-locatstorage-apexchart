import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";


class ApexChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 450,
                    type: 'line',
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: true
                    }
                },
                colors: [ '#009970','#ff4949' , '#77B6EA','#545454',],
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'คะแนนรวมเฉลี่ยของแต่ละปี',
                    align: 'left',
                },
                grid: {
                    borderColor: '#e7e7e7',
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                markers: {
                    size: 2
                },
                xaxis: {
                    categories: ['2556', '2557', '2558', '2559', '2560', '2561', '2562'],
                    title: {
                        text: 'Year'
                    }
                },
                yaxis: {
                    title: {
                        text: 'คะแนน Admisson'
                    },
                    min: 5000 ,
                    max: 30000 ,
                    forceNiceScale: true ,
                    
                },

                legend: {
                    position: 'bottom',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -1,
                    offsetX: -5
                }
            },
            series:props.series 
        }
    }
      render() {
        return ( <React.Fragment>
            
          
    <div id="apexchart container" className="container">
    <ReactApexChart options={this.state.options} series={this.props.series} type="line" height={450}  />
    </div>
    </React.Fragment> );
      }
    }
    //const domContainer = document.querySelector('#app');
    //ReactDOM.render(React.createElement(ApexChart), domContainer);
    

export default ApexChart;