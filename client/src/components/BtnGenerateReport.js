import React, { useState } from 'react';
import axios from 'axios';


function CreateReport() {

    // postrequest
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('laueft')
        axios.post('/api/create_report')
            .then(console.log('runs after post request generated report'))
            .then((res) => console.log('res data:', res.data))
            .catch(err => console.log('Error post request generate report', err))
    }




    return (
        <div className='generateReportContainer'>
            <button
                className='generateReportBtn'
                onClick={handleSubmit}
            >
                Generate Report
            </button>
        </div>
    )
};

export default CreateReport;
