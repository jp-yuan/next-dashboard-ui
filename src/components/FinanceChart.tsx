"use client"
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        sale: 5000,
        expense: 2000,
    },
    {
        name: 'Feb',
        sale: 4500,
        expense: 1800,
    },
    {
        name: 'March',
        sale: 6000,
        expense: 2500,
    },
    {
        name: 'April',
        sale: 5200,
        expense: 2200,
    },
    {
        name: 'May',
        sale: 4800,
        expense: 1900,
    },
    {
        name: 'June',
        sale: 5300,
        expense: 2400,
    },
    {
        name: 'July',
        sale: 5600,
        expense: 2600,
    },
    {
        name: 'Aug',
        sale: 5800,
        expense: 2700,
    },
    {
        name: 'Sept',
        sale: 6100,
        expense: 2900,
    },
    {
        name: 'Oct',
        sale: 6200,
        expense: 3000,
    },
    {
        name: 'Nov',
        sale: 5900,
        expense: 2800,
    },
    {
        name: 'Dec',
        sale: 6500,
        expense: 3200,
    },
];

const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance Overview</h1>
                <Image src='/moreDark.png' alt='More options' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#D1D5BD"}} tickLine={false} tickMargin={20}/>
                    <YAxis axisLine={false} tick={{fill:"#D1D5BD"}} tickLine={false}/>
                    <Tooltip />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:'20px', paddingBottom:'40px'}}/>
                    <Line type="monotone" dataKey="sale" stroke="#FAE27C" strokeWidth={5}  />
                    <Line type="monotone" dataKey="expense" stroke="#C3EBFA" strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FinanceChart;
