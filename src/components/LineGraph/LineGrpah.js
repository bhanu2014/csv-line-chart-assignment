import React, { useState } from 'react'
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'
import Upload from '../upload/Upload'

function LineGrpah() {
    const [data, setdata] = useState([])
    const setData = (data) => {
        setdata(data)
    }
    return (
        <div className="csv-chart">
            <LineChart data={data} />
            <Upload setData={setdata}/>
        </div>
    )
}

export default LineGrpah
