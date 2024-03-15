// External Exports //
import React from 'react'
import Image from 'next/image';

// Internal Exports //
import styles from "../styles/global.module.scss";

// Main //
// @ts-ignore
export default function Landing({ image1A, h1, h2, p}) {
  return (
    <>
      <main>
        {/* Landing */}
        <section className={styles.landing}>
          <div className={styles.left}>
            <h1>{ h1 }</h1>
            <h2>{ h2 }</h2>
            <p>
              { p }
            </p>
          </div>
          <div className={styles.right}>
            <Image
              src={image1A}
              alt="instaskool"
              height={500}
              width={500}
            />
          </div>
        </section>
      </main>
    </>
  );
}
