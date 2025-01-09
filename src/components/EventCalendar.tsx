"use client"

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
      "id": 1,
      "title": "Team Meeting",
      "time": "2025-01-10",
      "description": "Monthly team meeting to discuss project updates and milestones."
    },
    {
      "id": 2,
      "title": "Product Launch",
      "time": "2025-01-15",
      "description": "Launching the new product line with a press conference and demo."
    },
    {
      "id": 3,
      "title": "Client Presentation",
      "time": "2025-01-20",
      "description": "Presenting the project proposal to the client for feedback."
    },
    {
      "id": 4,
      "title": "Workshop: AI in Healthcare",
      "time": "2025-01-25",
      "description": "A workshop exploring the applications of artificial intelligence in the healthcare industry."
    },
    {
      "id": 5,
      "title": "Annual Company Retreat",
      "time": "2025-02-05",
      "description": "Annual retreat for team building and strategic planning for the upcoming year."
    }
  ]
  


const EventCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());

    return (

        
        <div className="bg-white rounded-xl p-4">
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Events</h1>
                </div>

            <div className='flex flex-col gap-4'>
                {events.map((event) => (
                    <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={event.id}>
                        <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                        <span className='text-gray-400 text-xs'>{event.time}</span>
                        </div>
                        <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                        </div>
                ))}
            </div>
            </div>
    )
}

export default EventCalendar;