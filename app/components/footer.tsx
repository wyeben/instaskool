'use client';
import Search_icon from '../../public/homepage-assets/Search-icon.png';
import Instagram_icon from '../../public/homepage-assets/instagran-icon-white.png';
import Facebook_icon from '../../public/homepage-assets/facebook-icon-white.png';
import Twitter_icon from '../../public/homepage-assets/twitter-icon-white.png';
import Image from 'next/image';
// import Instagram_blue from '../../public/homepage-assets/instagram-blue.png';
// import facebook_blue from '../../public/homepage-assets/facebook-blue.png';
// import Twitter_blue from '../../public/homepage-assets/twitter-blue.png';
import { useState } from 'react';
import Help from './forms/Help';
import Vacancy from './forms/Vacancy';
import Link from 'next/link';

export default function Footer() {
  const [getHelp, setGetHelp] = useState<boolean>(false);
  const [workWithUs, setWorkWithUs] = useState<boolean>(false);
  return (
    <>
      {/* Mobile */}
      <footer className='bg-[#0551A7] text-white md:hidden'>
        <div className='pb-10 border-b pt-10 px-5 md:px-[50px]'>
          <div className='w-full flex justify-center'>
            <div className='w-full max-w-[835px] h-[41px] flex rounded-full overflow-hidden'>
              <div className='flex w-[30%] bg-[#F17105] h-full items-center pl-3'>
                <Image
                  src={Search_icon}
                  alt='search Icon'
                  width={100}
                  height={100}
                  className='w-[16px] mr-3'
                />
                <p className='text-white'>Search</p>
              </div>
              <input type='text' className='bg-white w-[70%]  outline-none' />
            </div>
          </div>
          <div>
            <div className='mt-20'>
              <h2 className='font-bold text-[18px] mb-2'>Office Address</h2>
              <p className='text-sm'>
                69 Admiralty way. Lekki Phase 1, Lagos State
              </p>
            </div>
            <div className='mt-10'>
              <h2 className='font-bold text-[18px] mb-2'>Email Address</h2>
              <p className='text-sm'>Admin@instaskool.com</p>
            </div>
            <p className='mt-10 text-sm mb-3'>Subscribe to our newsletter</p>
          </div>
          <div className='w-full h-[41px] flex rounded-full border border-white overflow-hidden'>
            <input
              type='text'
              className='bg-[#0551A7] w-[70%] pl-3 placeholder:text-white  outline-none'
              placeholder='Email Address'
            />
            <div className='flex w-[30%] bg-white h-full items-center pl-3'>
              <p className='text-[#0551A7]'>Subscribe</p>
            </div>
          </div>
        </div>
        <div className='py-10'>
          <ul className='flex flex-col items-center text-base'>
            <Link href='/about-us'>
              <li className='mb-5'>About Us</li>
            </Link>
            <Link href='/our-classes'>
              <li className='mb-5'>Classes</li>
            </Link>
            <li
              className='mb-5 cursor-pointer'
              onClick={() => setGetHelp(true)}
            >
              Help
            </li>
            <li className='mb-5' onClick={() => setWorkWithUs(true)}>
              Vacancies
            </li>
            <li className='mb-5'>Terms and Conditions</li>
            <li className='mb-5 flex'>
              <div className='h-[37px] w-[37px] rounded-full flex items-center justify-center bg-[#C1DEFF] mr-5'>
                <Image
                  src={Instagram_icon}
                  alt='instagram Icon'
                  width={100}
                  height={100}
                  className='w-[16px]'
                />
              </div>
              <div className='h-[37px] w-[37px] rounded-full flex items-center justify-center bg-[#C1DEFF] mr-5'>
                <Image
                  src={Facebook_icon}
                  alt='instagram Icon'
                  width={100}
                  height={100}
                  className='w-[7.5px]'
                />
              </div>
              <div className='h-[37px] w-[37px] rounded-full flex items-center justify-center bg-[#C1DEFF]'>
                <Image
                  src={Twitter_icon}
                  alt='instagram Icon'
                  width={100}
                  height={100}
                  className='w-[13px]'
                />
              </div>
            </li>
            <li className='mb-5'>2022 Instaskool</li>
          </ul>
        </div>
      </footer>
      {/* Desktop */}
      <footer className='bg-[#0551A7] text-white hidden md:block'>
        <div className='pb-10 border-b pt-10 px-5 md:px-[50px]'>
          {/* Search bar */}
          <div className='w-full flex justify-center pt-20'>
            <div className='w-full max-w-[835px] h-[58px] flex rounded-full overflow-hidden'>
              <div className='flex w-[30%] bg-[#F17105] h-full items-center pl-3'>
                <Image
                  src={Search_icon}
                  alt='search Icon'
                  width={100}
                  height={100}
                  className='w-[16px] mr-3'
                />
                <p className='text-white'>Search</p>
              </div>
              <input type='text' className='bg-white w-[70%]  outline-none' />
            </div>
          </div>
          {/* Quick Links */}
          <div className='grid grid-cols-7 py-20'>
            <ul>
              <li className='font-bold text-lg mb-5'>Quick Links</li>
              <Link href='/about-us'>
                <li className='mb-2'>About Us</li>
              </Link>
              <Link href='/our-classes'>
                <li className='mb-2'>Classes</li>
              </Link>
              <li
                className='mb-2 cursor-pointer'
                onClick={() => setGetHelp(true)}
              >
                Help
              </li>
              <li
                className='mb-2 cursor-pointer'
                onClick={() => setWorkWithUs(true)}
              >
                Vacancies
              </li>
              <li>Terms and Conditions</li>
            </ul>
            <ul>
              <li className='font-bold mb-5 text-lg'>Office Address</li>
              <li className='mb-2'>69 Admiralty Way,</li>
              <li className='mb-2'>Lekki Phase 1,</li>
              <li>Lagos State</li>
            </ul>
            <ul>
              <li className='font-bold mb-5 text-lg'>Email Address</li>
              <li className=''>Admin@instaskool.com</li>
            </ul>
            <div></div>
            {/* <div></div>
          <div></div> */}
            <div className='col-span-3 flex flex-col justify-between'>
              <div className='self-end'>
                <p className='mb-3'>Social Media</p>
                <div className='flex'>
                  <div className='h-[37px] w-[37px] rounded-full flex items-center justify-center bg-[#C1DEFF] mr-1'>
                    <Image
                      src={Instagram_icon}
                      alt='instagram Icon'
                      width={100}
                      height={100}
                      className='w-[16px]'
                    />
                  </div>
                  <div className='h-[37px] w-[37px] rounded-full flex items-center justify-center bg-[#C1DEFF] mr-1'>
                    <Image
                      src={Facebook_icon}
                      alt='instagram Icon'
                      width={100}
                      height={100}
                      className='w-[7.5px]'
                    />
                  </div>
                  <div className='h-[37px] w-[37px] rounded-full flex items-center justify-center bg-[#C1DEFF]'>
                    <Image
                      src={Twitter_icon}
                      alt='instagram Icon'
                      width={100}
                      height={100}
                      className='w-[13px]'
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className='w-full h-[41px] flex rounded-full border border-white overflow-hidden'>
                  <input
                    type='text'
                    className='bg-[#0551A7] w-[70%] pl-3 placeholder:text-white outline-none'
                    placeholder='Email Address'
                  />
                  <div className='flex w-[30%] bg-white h-full items-center pl-3'>
                    <p className='text-[#0551A7]'>Subscribe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {getHelp && <Help getHelp={getHelp} setGetHelp={setGetHelp} />}
      {workWithUs && (
        <Vacancy workWithUs={workWithUs} setWorkWithUs={setWorkWithUs} />
      )}
    </>
  );
}
