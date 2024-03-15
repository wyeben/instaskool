// External Imports //
import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image';


// Internal Imports //
import styles from '../../styles/tech.module.scss'
import Landing from '../../components/Landing';
import Image1 from '../../../public/assets/Frame 40534(3).png'


// Metadata //
export const metadata: Metadata = {
  title: "Instaskool | Tech Classes",
  description: "Instaskool classes",
};

export default function page() {
  return (
    <>
      <main>
        {/* Landing */}
        <Landing
          h1="Get into Our"
          h2="Tech Classes"
          p="Start your tech career with physical learning and hands on experience from Instaskool with access to the best technological resources."
          image1A={Image1}
        />
      </main>

      {/* Special */}

      <section className={styles.main}>
        {/* column one */}
        <div className={styles.col1}>
          <h1>
            Our Tech Classes Special <br /> For You
          </h1>
          <p>Learn what you need to know to compete in the digital space</p>
        </div>
        {/* column two */}
        <div className={styles.col2}>
          {/* // Special Classes Card */}

          {/* card one */}
          <div className={styles.card}>
            <h1>Data Analysis</h1>
            <p>
              Gain the skills that industries value and open doors to a
              data-driven future. Step up your analytical game and enroll in our
              data analysis classes today!
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
          {/* card two */}
          <div
            className={styles.card}
            style={{
              background: "rgba(255, 219, 201, 1)",
            }}
          >
            <h1>Web Development</h1>
            <p>
              Discover the world of web development with our immersive classes!{" "}
              <br />
              <br />
              Whether you're a beginner or looking to enhance your skills, our
              expert-led sessions will guide you through the latest technologies
              and best practices.
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
          {/* card three */}
          <div className={styles.card}>
            <h1>UI/UX Design</h1>
            <p>
              Your journey to becoming a skilled UI/UX designer starts here.{" "}
              <br />
              <br />
              Uncover the art of crafting seamless user experiences while
              mastering the latest design tools and principles.
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
          {/* card four */}
          <div
            className={styles.card}
            style={{
              background: "rgba(255, 219, 201, 1)",
            }}
          >
            <h1>Digital Marketing</h1>
            <p>
              Unlock the secrets of successful online campaigns and propel your
              business forward in the digital age with our engaging and
              insightful digital marketing classes. Monday, Wednesday, Fridays
              (weekdays) Saturday, Sunday (weekends)
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
        {/* button */}
        <a href="">Register Now</a>
      </section>
    </>
  );
}
