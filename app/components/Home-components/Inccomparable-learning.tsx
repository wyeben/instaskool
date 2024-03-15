'use client';
import GradStuds from '../../../public/homepage-assets/grad-student.png';
import HundredhrsPlus from '../../../public/homepage-assets/100hrs-plus.png';
import ConnectIcon from '../../../public/homepage-assets/connect-icon.png';
import DataChart from '../../../public/homepage-assets/data-chart.png';
import Girl_Stud from '../../../public/homepage-assets/girl-stud.png';
import Stud_teacher from '../../../public/homepage-assets/stud-teacher.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Form from '../forms/Private-coaching-form';

export default function Incomparable_learning() {
  const [displayForm, setDisplayForm] = useState<boolean>(false);

  const showForm = (e: any) => {
    setDisplayForm(!displayForm);
  };

  return (
    <section className='w-full md:px-[50px]'>
      <div className='flex w-full flex-col md:flex-row px-5 pt-10 md:px-[50px] bg-[#0551A7] md:justify-between pb-20 lg:rounded-3xl lg:py-14 lg:px-14'>
        <div className='md:w-[50%] mb-32 md:mb-0'>
          <h1 className='text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-10 lg:leading-[80px]'>
            An{' '}
            <span className='text-[#A7CC2E]'>
              Incomparable <br /> Learning Future{' '}
            </span>
            Awaits YOU!
          </h1>
          <p className='text-white mt-10 text-sm lg:text-base'>
            Get the most of your education, with personalized learning from
            <br /> Instaskool and get access to educational resources and the
            best <br /> tutors.
          </p>
          <button
            className='bg-[#F17105] text-white mt-5 w-[177px] h-[40px] rounded-full lg:mt-20'
            onClick={showForm}
          >
            Get Started
          </button>
        </div>
        <div className='md:w-[50%] w-full flex justify-center items-center lg:pt-32 md:pt-20'>
          <div className='max-w-[440px] flex items-center justify-center relative'>
            <div className='bg-[#EEF6FF] w-[258px] h-[258px] lg:w-[357px] lg:h-[357px] rounded-full flex items-center justify-center z-10 blur absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'></div>
            <div className='bg-[#E7F2FF] h-[215px] w-[215px] lg:w-[297px] lg:h-[297px] rounded-full flex items-center justify-center z-10 pointer-events-none'>
              <div className='bg-[#E1EFFF] w-[197px] h-[197px] lg:w-[258px] lg:h-[258px] rounded-full flex items-center justify-center'>
                <div className='w-[152px] min-h-[152px] lg:w-[211px] lg:h-[211px] bg-[#D4E8FF] rounded-full flex items-center justify-center p-3'>
                  <h2 className='font-bold text-[#F17105] '>
                    Certification on completion{' '}
                    <span className='text-black'>of our courses</span>
                  </h2>
                </div>
              </div>
            </div>
            <Image
              src={GradStuds}
              alt='grad student'
              width={200}
              height={200}
              className='absolute w-[106px] lg:w-[147px] top-0 z-0 -translate-y-24 lg:-translate-y-36'
            />
            <Image
              src={HundredhrsPlus}
              alt='100 hrs plus'
              width={200}
              height={200}
              className='absolute w-[60px] lg:[w-82px] top-0 -translate-x-24 -translate-y-20'
            />
            <Image
              src={DataChart}
              alt='100 hrs plus'
              width={200}
              height={200}
              className='absolute w-[18px] lg:[25px] top-0 translate-x-32 -translate-y-24'
            />
            <Image
              src={ConnectIcon}
              alt='100 hrs plus'
              width={200}
              height={200}
              className='absolute w-[15px] lg:w-[20px] top-0 translate-x-24 -translate-y-[30px]'
            />
            <Image
              src={Girl_Stud}
              alt='100 hrs plus'
              width={200}
              height={200}
              className='absolute w-[70px] lg:w-[90px] right-0 top-0 translate-x-[50px]'
            />
            <Image
              src={Stud_teacher}
              alt='100 hrs plus'
              width={200}
              height={200}
              className='absolute w-[80px] lg:w-[100px] left-0 top-0 -translate-x-[65px] translate-y-6'
            />
          </div>
        </div>
      </div>
      {/* Registration form */}
      {displayForm && (
        <Form displayForm={displayForm} setDisplayForm={setDisplayForm} />
      )}
    </section>
  );
}
