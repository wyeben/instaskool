// External Exports //
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

// Internal Exports //
import styles from "../../styles/external.module.scss";
import Image1 from "../../../public/assets/Frame 40534.png";
import waec from "../../../public/assets/Rectangle 175(4).png";
import ncee from "../../../public/assets/Rectangle 175(3).png";
import ielts from "../../../public/assets/Rectangle 175(2).png";
import utme from "../../../public/assets/Rectangle 175.png";
import Landing from "../../components/Landing";

// Metadata //
export const metadata: Metadata = {
  title: "Instaskool | External Examination Classes",
  description: "Instaskool classes",
};

// Main //

export default function page() {
  return (
    <>
      <main>
        {/* Landing */}
        <Landing
          h1="Get into Our"
          h2="External Examination Classes"
          p="At Instaskool, we helps learners prepare for standardized exams
              like common entrance, WAEC, UTME and IELTS."
          image1A={Image1}
        />

        <section className={styles.list}>
          <Image src={ncee} alt="" />
          <Image src={waec} alt="" />
          <Image src={utme} alt="" />
          <Image src={ielts} alt="" />
        </section>
        {/* Special */}

        <section className={styles.main}>
          {/* column one */}
          <div className={styles.col1}>
            <h1>
              Our External Examination Classes <br />
              Special For You
            </h1>
            <p>
              Learn what you need to know to ace your next examination <br /> by
              identifying your strengths
            </p>
          </div>
          {/* column two */}
          <div className={styles.col2}>
            {/* // Special Classes Card */}

            {/* card one */}
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src={ncee} alt="instaskool" width={50} height={50} />
              </div>
              <h1>NCEE</h1>
              <p>
                Elevate your academic journey by enrolling in our Common
                Entrance Classes. Gain comprehensive preparation, expert
                guidance, to excel in your entrance exams.
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
              <div className={styles.icon}>
                <Image src={waec} alt="instaskool" width={50} height={50} />
              </div>
              <h1>WAEC</h1>
              <p>
                WAEC Our expert instructors and tailored curriculum are designed
                to help you excel in your WAEC classes. <br /> <br /> Join us to
                gain a deeper understanding of key subjects and enhance your
                chances of success. Monday, Wednesday, Fridays (weekdays)
                Saturday, Sunday (weekends)
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
            {/* card three */}
            <div
              className={styles.card}
              style={{
                background: "rgba(255, 219, 201, 1)",
              }}
            >
              <div className={styles.icon}>
                <Image src={utme} alt="instaskool" width={50} height={50} />
              </div>
              <h1>UTME</h1>
              <p>
                Don't miss this opportunity to enhance your readiness for the
                UTME. <br /> <br />
                Join our comprehensive and engaging sessions designed to help
                you excel in the upcoming exams.
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
            {/* card four */}
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src={ielts} alt="instaskool" width={50} height={50} />
              </div>
              <h1>IELTS</h1>
              <p>
                Enhance your language proficiency and excel in the IELTS exam
                with our comprehensive and interactive IELTS classes.
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
      </main>
    </>
  );
}
