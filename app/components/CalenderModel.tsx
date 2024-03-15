'use client';

import { useState, useRef } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './instaCalender.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function InstaCalender() {
  const [value, onChange] = useState<Value>(new Date());
  const calender_ref = useRef(null);
  console.log(calender_ref);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        ref={calender_ref}
        className='rounded-lg mt-5 border border-[#777777] text-[#777777]'
        goToRangeStartOnSelect={false}
      />
    </div>
  );
}
