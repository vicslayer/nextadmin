"use client"
import styles from "./charts.module.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        visit: 4000,
        click: 2400,
    },
    {
        name: 'Tue',
        visit: 1230,
        click: 1330,
    },
    {
        name: 'Wed',
        visit: 3210,
        click: 2330,
    },
    {
        name: 'Thu',
        visit: 4230,
        click: 5330,
    },
    {
        name: 'Fri',
        visit: 4230,
        click: 6330,
    },
    {
        name: 'Sat',
        visit: 3321,
        click: 4231,
    },
    {
        name: 'Sun',
        visit: 4212,
        click: 2312,
    },
];


const Charts= ()=>{
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip contentStyle={{background:"#151c2c",border:"none"}} />
                <Legend />
                <Line type="monotone" dataKey="visit" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="click" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
export default Charts;