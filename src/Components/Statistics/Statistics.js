import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { RadarChart, PolarAngleAxis, PolarRadiusAxis, PolarGrid, Legend, Radar, Customized, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, RadialBar } from 'recharts';

const Statistics = () => {
    const assData = useLoaderData();
    console.log(assData);
    return (
        <div>
            <div className='my-20 text-center'>
                <h2 className='text-3xl font-semibold mb-5'>A randomly generated BarChart for some of my imaginary assignment marks</h2>
                <BarChart className='mx-auto' width={1000} height={500} data={assData}>
                    <Bar dataKey='mark' fill='#93aeef'></Bar>
                    <XAxis dataKey='assignmentNo'></XAxis>
                    <YAxis dataKey='mark'></YAxis>
                    <Tooltip cursor={{ fill: '#516bef' }}></Tooltip>
                </BarChart>
            </div>
            <div className='my-20 text-center'>
                <h2 className='text-3xl font-semibold mb-5'>A randomly generated RadarChart for some of my imaginary assignment marks</h2>
                <RadarChart className='mx-auto' outerRadius={200} width={1000} height={500} data={assData}>
                    <PolarGrid stroke='#A0D8B3'></PolarGrid>
                    <PolarAngleAxis dataKey='assignmentNo' stroke='#116D6E'></PolarAngleAxis>
                    <PolarRadiusAxis angle={18} domain={[0, 60]}></PolarRadiusAxis>
                    <Radar name='mark' dataKey='mark' stroke='#C38154' fill='#C38154' fillOpacity={0.7} ></Radar>
                    <Tooltip cursor={{ stroke: '#E57C23' }}></Tooltip>
                    <Legend></Legend>

                </RadarChart>
            </div>
            {/* <div className='my-20 text-center'>
                <h2 className='text-3xl font-semibold mb-5'>A randomly generated RadialBarChart for some of my imaginary assignment marks</h2>
                <RadialBar className='mx-auto'
                    width={1000}
                    height={400}
                    innerRadius='10%'
                    outerRadius='90%'
                    data={assData}
                    startAngle={180}
                    endAngle={0}
                >
                    <RadialBar minAngle={15} label={{ fill: '#C38154', position: 'insideStart' }}></RadialBar>
                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align='right'></Legend>
                    <Tooltip></Tooltip>
                </RadialBar>
            </div> */}
        </div>
    );
};

export default Statistics;