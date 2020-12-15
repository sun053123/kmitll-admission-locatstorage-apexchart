import React, { Component } from 'react';
import {Bar , Line , Pie} from 'react-chartjs-2';


class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps ={
        displayTitle: true ,
        displayLegend: true ,
        legendPosition: 'bottom'
    }
    render() {
        return (

            <div className="Chart">
                <Line
                data={this.state.chartData}
                width={500}
                height={500}
                options={{
                    maintainAspectRatio: false
                }}
                />         
            </div>
        );
    }
}

export default Chart;