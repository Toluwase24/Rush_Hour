import React from 'react';
import TimeInput from '../../components/TimeInput/TimeInput';
import HourChart from '../../components/HourChart/HourChart';



export default function TimePage(){
 return(
 <>
    <div className="project_title">
            <h1>Project Title</h1>
            <hr>
            </hr>
    </div>
    <div className="project_title">
            <h3>Add Work Hours</h3>
    </div>
    <TimeInput />
    <hr></hr>
    <div className="project_title">
            <h3>Employee Hours</h3>
    </div>
    <div className="centered">
        <HourChart />
    </div>
 </>
 );
}