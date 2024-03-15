import Image from 'next/image';
import Link from 'next/link';
import Instaskoo_logo from '../../public/nav-assets/Instaskool-logo.png';
import BurgerClose from '../../public/nav-assets/burgerClose-icon.png';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  activeBurger: boolean;
  setActiveBurger: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BurgerMenu({ activeBurger, setActiveBurger }: Props) {
  return (
    <section className='fixed top-0 left-0 w-full h-[100vh] z-[100] bg-white'>
      <nav className='flex px-5 md:px-[50px] justify-between min-h-[100px] items-center'>
        <ul>
          <li onClick={() => setActiveBurger(!activeBurger)}>
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
        <ul
          className='md:hidden'
          onClick={() => setActiveBurger(!activeBurger)}
        >
          <Image
            src={BurgerClose}
            height={50}
            width={50}
            alt='burger icon'
            className='h-[30px] w-[30px] cursor-pointer'
          />
        </ul>
      </nav>
      <ul className='px-5 text-base text-[#0551A7]'>
        <Link href='/'>
          <li
            className='mb-3 font-medium'
            onClick={() => setActiveBurger(!activeBurger)}
          >
            Home
          </li>
        </Link>
        <Link href='/about-us'>
          <li
            className='mb-3 font-medium'
            onClick={() => setActiveBurger(!activeBurger)}
          >
            About
          </li>
        </Link>
        <Link href='/our-classes'>
          <li
            className='mb-3 font-medium'
            onClick={() => setActiveBurger(!activeBurger)}
          >
            Classes
          </li>
        </Link>
        <Link href='/private-coaching'>
          <li
            className='mb-3 font-medium'
            onClick={() => setActiveBurger(!activeBurger)}
          >
            Private Coaching
          </li>
        </Link>
        <Link href='/sign-in'>
          <li
            className='mb-3 font-medium'
            onClick={() => setActiveBurger(!activeBurger)}
          >
            Sign In
          </li>
        </Link>
        <Link href='/sign-up'>
          <li
            className='mb-3 font-medium'
            onClick={() => setActiveBurger(!activeBurger)}
          >
            Sign Up
          </li>
        </Link>
      </ul>
    </section>
  );
}
