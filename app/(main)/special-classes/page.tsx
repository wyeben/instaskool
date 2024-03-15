// @ts-nocheck
'use client'
// External Imports //
import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image';
// import CustomDropdown from '@/app/components/Dropdown';
import Dropdown from '@/app/components/Dropdown-for-special-classes';


// Internal Classes //
import styles from "../../styles/special.module.scss";
import Landing from '../../components/Landing';
import Image1 from '../../../public/assets/Frame 40534(2).png'


// export const metadata: Metadata = {
//   title: "Instaskool | Special Classes",
//   description: "Instaskool classes",
// };
 

export default function page() {
  return (
    <>
      <main>
        {/* Landing */}
        <Landing
          h1="Get into Our"
          h2="Secondary School Classes"
          p="Get the most of your secondary school education, with personalized learning from instaskool and access to the best education resources"
          image1A={Image1}
        />
      </main>

      <section className={styles.main}>
        {/* column one */}
        <div className={styles.col1}>
          <h1>Our Special Classes For You</h1>
          <p>
            It helps you learn what you need to know about a variety of subjects
            and skills of <br />
            your choice. With Instaskool, you can learn at your own pace, take
            special classes <br /> on subject and new skills you find difficult.
          </p>
        </div>
        <div className={styles.col2}>
          <h1>Select a subject</h1>
          <Dropdown />
        </div>
        {/* button */}
        <a href="">Register Now</a>
      </section>
    </>
  );
}
