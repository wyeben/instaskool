// External imports //
import React from "react";  
import type { Metadata } from "next";

// Internal Imports //
import styles from "../../styles/secondary.module.scss";
import Landing from "@/app/components/Landing";
import Image1 from "../../../public/assets/Frame 40534(4).png";
import Dropdown from "@/app/components/Dropdown-for-secondary-classes1.jsx";

export const metadata: Metadata = {                                  
  title: "Instaskool | Secondary School Classes",
  description: "Instaskool classes",
};

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
        <section className={styles.main}>
          {/* column one */}
          <div className={styles.col1}>
            <h1>
              Our Secondary School Classroom <br />
              For You
              Our Secondary School Classroom <br />
              For You
            </h1>
            <p>
              Discover a world of knowledge and growth by joining our <br />{" "}
              secondary school classes.
            </p>
          </div>
          <div className={styles.col2}>
          <h1>Select a subject</h1>
          <Dropdown />
        </div>
          {/* button */}
          <a href="">Register Now</a>
        </section>
      </main>
    </>
  );
}
