import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'
import './Upload.scss'

function Upload({ setData }) {

    const [fileName, setfileName] = useState("Upload Document")
    const [error, seterror] = useState("Invalid file  to upload")
    const [isError, setisError] = useState(false)
    const [rows, setrows] = useState([])

    const handleChange = file => {
        setfileName(file?.name)

        console.log("file?.name",file?.name.split(".")[1])
        if(file?.name.split(".")[1] !== "csv") {
            setrows([])
            setisError(true)
        }else {
            setisError(false)
            importCSV(file)
        }
    };

    const importCSV = (file) => {
        Papa.parse(file, {
            complete: updateData,
            header: false
        });
    };

    useEffect(() => {
        setData(rows)
    }, [rows])

    const updateData = (result) => {
        var data = result.data;
        console.log(data);

        const chartData = data.map(item => {
            let obj = {}
            const faltArr = item.splice(1).map(val => {
                return { x: parseInt(val.split("|")[0]), y: parseInt(val.split("|")[1]) }
            })
            obj.yValueFormatString = ""
            obj.xValueFormatString = ""
            obj.type = "spline"
            obj.dataPoints = faltArr.sort((a, b) => a.x - b.x)
            obj.name = item[0]
            return obj
        })

        console.log("chartata", chartData)
        setrows(chartData)
    }

    return (
        <div className="container">
            <form className="form">
                <div className="file-upload-wrapper" data-text-upload={fileName}>
                    <input name="file-upload-field" type="file" className="file-upload-field" value="" onChange={(e) => handleChange(e?.target?.files[0])} />                                       
                </div>
                {function(isError){
                        if(isError) {
                            return <span className="file-error">* {error}</span>
                        }
                    }(isError)} 
            </form>
        </div>
    )
}

export default Upload