import React, { useState, } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import Upload from '../upload/Upload'
import './index.scss'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function Splinechart() {

    const [options, setoptions] = useState({
        animationEnabled: true,
        title: {
            text: "Annual Series"
        },
        axisX: {
            valueFormatString: ""
        },
        axisY: {
            title: "value",
            prefix: "",
            includeZero: false
        },
        width:900,
        data: []
    })

    const setData = (data) => {
        const mOptions = { ...options, data: data }
        setoptions(mOptions)
    }

    return (
        <div className="csv-chart">
            {function(data) {
                if(data && data.length > 0)
                    return <div className="csv_chart_container"><CanvasJSChart options={options}/></div>                    
            }(options?.data)}
            <Upload setData={setData} />
        </div>
    );
}

export default Splinechart