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
      name: 'Thur',
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
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Attendence</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>

            <ResponsiveContainer width="100%" height="90%">
            <BarChart
              width={500}
              height={300}
              data={data}
              barSize={20}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
              <XAxis dataKey="name" axisLine={false} tick={{fill:"#D1D5BD"}} tickLine={false} />
              <YAxis />
              <Tooltip contentStyle={{borderRadius:"10px", borderColor: "lightgray"}}/>
              <Legend align='left' verticalAlign='top' 
              wrapperStyle={{paddingTop:'20px', paddingBottom:'40px'}}/>
              <Bar dataKey="absent" fill="#FAE27C"  legendType='circle' radius={[10,10,0,0]}/>
              <Bar dataKey="present" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart;