import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Col from 'react-bootstrap/Col'

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

export default function HourChart(){
    function handleChange(){

    }

    return (
        <>
            <Col xs={3}>
            <div className="form-group hour-chart-selector">
              <label htmlFor="name">Team Member</label>
                <select name="name" onChange={handleChange}>
                <option>-Choose Option-</option>
                <option value="Tim">Tim</option>
              </select>
            </div>

            <div className="form-group hour-chart-selector">
              <label htmlFor="req">Requirement</label>
              <select name="req" onChange={handleChange}>
                <option>-Choose Option-</option>
                <option value="Make Bigger Ladders">Make Bigger Ladders</option>
              </select>
            </div>

            <div className="form-group hour-chart-selector">
              <label htmlFor="phase">Development Phase</label>
              <select name="phase" onChange={handleChange}>
                <option>-Choose Option-</option>
                <option value="Requirements Analysis">Requirements Analysis</option>
                <option value="Designing">Designing</option>
                <option value="Coding">Coding</option>
                <option value="Testing">Testing</option>
                <option value="Project Management">Project Management</option>
              </select>
            </div>
            </Col>

        <BarChart
            width={1000}
            height={600}
            position="fixed" 
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        </>
    );
}
