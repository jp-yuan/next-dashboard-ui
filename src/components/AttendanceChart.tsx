"use client"
import Image from 'next/image';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
      name: 'Mon',
      present: 60,
      absent: 24,
    },
    {
      name: 'Tue',
      present: 40,
      absent: 24,
    },
    {
      name: 'Wed',
      present: 40,
      absent: 24,
    },
    {
      name: 'Fri',
      present: 40,
      absent: 21,
    }
  ];


const AttendanceChart = () => {

    return (
        <div className="bg-white rounded-lg h-full p-4">
            <div className="">
                <h1>Attendence</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart;