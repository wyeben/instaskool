'use client';
import Image from 'next/image';
import Instaskoo_logo from '../../public/nav-assets/Instaskool-logo.png';
import Burger_menue from '../../public/nav-assets/burger-icon.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import BurgerMenu from './BurgerMenu';

export default function Nav() {
  const [activeBurger, setActiveBurger] = useState<boolean>(false);
  const [contactUsWrap, setContactUsWrap] = useState(false);

  useEffect(() => {
    if (activeBurger) {
      document.body.style.cssText = `overflowY: hidden; position:fixed; top:10vh`;
    }
    if (!activeBurger) {
      document.body.style.cssText = `overflowY: visible ; position:relative; `;
    }
  }, [activeBurger]);

  return (
    <>
      {activeBurger ? (
        <BurgerMenu
          activeBurger={activeBurger}
          setActiveBurger={setActiveBurger}
        />
      ) : (
        <nav className='flex px-5 md:px-[50px] justify-between min-h-[100px] items-center'>
          <ul>
            <li>
              <Link href='/'>
                <Image
                  src={Instaskoo_logo}
                  alt='instaskool logo'
                  height={200}
                  width={200}
                  className='w-[147px]'
                />
              </Link>
            </li>
          </ul>
          <ul className='hidden md:flex items-center'>
            <Link href='/'>
              <li className='text-[#5D5D5D] font-medium text-[14px]'>Home</li>
            </Link>
            <Link href='/about-us'>
              <li className='text-[#5D5D5D] ml-5 font-medium text-[14px]'>
                About
              </li>
            </Link>
            <Link href='/our-classes'>
              <li className='text-[#5D5D5D] ml-5 font-medium text-[14px]'>
                Classes
              </li>
            </Link>
            <Link href='/sign-up'>
              <button className='text-[#F17105] ml-5 font-medium text-[14px] border border-[#F17105] py-3 px-5  rounded-full'>
                Sign up / Sign in
              </button>
            </Link>
          </ul>
          <ul
            className='md:hidden'
            onClick={() => setActiveBurger(!activeBurger)}
          >
            <Image
              src={Burger_menue}
              height={50}
              width={50}
              alt='burger icon'
              className='h-6 w-6 cursor-pointer'
            />
          </ul>
        </nav>
      )}
    </>
  );
}
