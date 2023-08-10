import React, { useState } from 'react';
import axios from 'axios';


function CreateReport() {

    // postrequest
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/create_report')
            // .then(console.log('runs after post request generated report'))
            // .then((res) => console.log('res data:', res.data))
            .then(() => {
                return axios.get('/api/get_report')
            })
            .then((res) => {
                console.log('rtest2:');
                console.log('test2 run report', res); // Use res.data here
            })
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
