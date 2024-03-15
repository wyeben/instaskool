'use client';

import Image from 'next/image';
import Left_arrow from '../../../public/homepage-assets/arrow-left.png';
import Right_arrow from '../../../public/homepage-assets/arrow-right.png';
import Profile from '../../../public/homepage-assets/profile.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

function Testimonies() {
  const slider = useRef(null);

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`absolute -bottom-[100px] right-[50px]  rounded-full border bg-white mr-5 h-[70px] w-[70px] flex items-center justify-center `}
      >
        <IoIosArrowRoundForward className='text-black text-4xl' />
      </button>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`absolute -bottom-[100px] left-[50px]  rounded-full border bg-white mr-5 h-[70px] w-[70px] flex items-center justify-center `}
      >
        <IoIosArrowRoundBack className='text-black text-4xl' />
      </button>
    );
  }

  const settings = {
    dots: false,
    // className: 'center',
    centerMode: true,
    infinite: true,
    speed: 500,
    easing: 'ease-out',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      {/* Large screen */}
      <section className='pt-10 bg-[#EFEDF1] px-5  pb-20 hidden md:block'>
        <div className='mb-10'>
          <h2 className='font-bold text-3xl text-[#0551A7] text-center'>
            Testimonials
          </h2>
        </div>
        <div className='w-full flex justify-center relative'>
          <div className='w-full md:w-[800px] grid grid-cols-1 md:grid-cols-3 gap-10 '>
            {/* First */}
            <div className='p-10 bg-[#D7E2FF] shadow-lg text-sm text-[#001A40] max-w-[255px] justify-self-center'>
              <Image
                src={Profile}
                alt='Profile'
                className='w-[64px] h-[64px]'
              />
              <p className='my-3 text-[#001A40]'>
                I highly recommend instaskool as it is very educative. They
                provide extensive classes and detailed syllabus.
              </p>
              <div className='flex justify-between font-semibold'>
                <p>Ponile Esther</p>
                <p>|</p>
                <p>Student</p>
              </div>
            </div>
            {/* Second */}
            <div className='p-10 bg-[#F4F3F7] shadow-lg text-sm text-[#1B1B1F] max-w-[255px] justify-self-center'>
              <Image
                src={Profile}
                alt='Profile'
                className='w-[64px] h-[64px]'
              />
              <p className='my-3 text-[#001A40]'>
                I have learnt a lot from instaskool and i will recommend it to
                anyone looking for an effective educational platform.
              </p>
              <div className='flex justify-between font-semibold'>
                <p>Paul Blessing</p>
                <p>|</p>
                <p>Student</p>
              </div>
            </div>
            {/* Third */}
            <div className='p-10 bg-[#FFDBC9] shadow-lg text-sm text-[#331200] max-w-[255px] justify-self-center'>
              <Image
                src={Profile}
                alt='Profile'
                className='w-[64px] h-[64px]'
              />
              <p className='my-3 text-[#001A40]'>
                I love the way instaskool teachers take their time to
                extensively teach topics, and answer questions in details.
              </p>
              <div className='flex justify-between font-semibold'>
                <p>Chinonye Obi</p>
                <p>|</p>
                <p>Student</p>
              </div>
            </div>
          </div>
          <div className='hidden md:flex px-20 justify-between absolute w-full h-full items-center '>
            <button className='w-[74px] h-[74px] bg-[#F4F3F7] rounded-full flex items-center justify-center'>
              <Image
                src={Left_arrow}
                width={100}
                height={100}
                alt='left arrow icon'
                className='w-[34px] h-[34px]'
              />
            </button>
            <button className='w-[74px] h-[74px] bg-[#F4F3F7] rounded-full flex items-center justify-center'>
              <Image
                src={Right_arrow}
                width={100}
                height={100}
                alt='left arrow icon'
                className='w-[34px] h-[34px]'
              />
            </button>
          </div>
        </div>
      </section>
      {/* Mobile */}
      <section className='pt-10 bg-[#EFEDF1] px-5  pb-20 md:hidden'>
        <div className='mb-10'>
          <h2 className='font-bold text-3xl text-[#0551A7] text-center'>
            Testimonials
          </h2>
        </div>
        <Slider ref={slider} {...settings}>
          {/* First */}
          <div className='p-10 bg-[#D7E2FF] shadow-lg text-sm text-[#001A40] max-w-[255px] justify-self-center h-[300px] mr-5'>
            <Image src={Profile} alt='Profile' className='w-[64px] h-[64px]' />
            <p className='my-3 text-[#001A40]'>
              I highly recommend instaskool as it is very educative. They
              provide extensive classes and detailed syllabus.
            </p>
            <div className='flex justify-between font-semibold'>
              <p>Ponile Esther</p>
              <p>|</p>
              <p>Student</p>
            </div>
          </div>
          {/* Second */}
          <div className='p-10 bg-[#F4F3F7] shadow-lg text-sm text-[#1B1B1F] max-w-[255px] justify-self-center h-[300px] mr-5'>
            <Image src={Profile} alt='Profile' className='w-[64px] h-[64px]' />
            <p className='my-3 text-[#001A40]'>
              I have learnt a lot from instaskool and i will recommend it to
              anyone looking for an effective educational platform.
            </p>
            <div className='flex justify-between font-semibold'>
              <p>Paul Blessing</p>
              <p>|</p>
              <p>Student</p>
            </div>
          </div>
          {/* Third */}
          <div className='p-10 bg-[#FFDBC9] shadow-lg text-sm text-[#331200] max-w-[255px] justify-self-center h-[300px] mr-5'>
            <Image src={Profile} alt='Profile' className='w-[64px] h-[64px]' />
            <p className='my-3 text-[#001A40]'>
              I love the way instaskool teachers take their time to extensively
              teach topics, and answer questions in details.
            </p>
            <div className='flex justify-between font-semibold'>
              <p>Chinonye Obi</p>
              <p>|</p>
              <p>Student</p>
            </div>
          </div>
        </Slider>
        <div className='my-20'></div>
        <div className='hidden md:flex px-20 justify-between absolute w-full h-full items-center '>
          <button className='w-[74px] h-[74px] bg-[#F4F3F7] rounded-full flex items-center justify-center'>
            <Image
              src={Left_arrow}
              width={100}
              height={100}
              alt='left arrow icon'
              className='w-[34px] h-[34px]'
            />
          </button>
          <button className='w-[74px] h-[74px] bg-[#F4F3F7] rounded-full flex items-center justify-center'>
            <Image
              src={Right_arrow}
              width={100}
              height={100}
              alt='left arrow icon'
              className='w-[34px] h-[34px]'
            />
          </button>
        </div>
      </section>
    </>
  );
}

export default Testimonies;
