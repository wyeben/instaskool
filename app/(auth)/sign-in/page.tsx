'use client'
import React, { useEffect, useState } from "react";
import type { Metadata } from "next";
import styles from "../../styles/signin.module.scss";
import logo from "../../../public/nav-assets/Instaskool-logo.png";
import image1 from "../../../public/assets/Group 39425.png";
import Image from "next/image";
import google from "../../../public/auth-assets/image 16.png";
import apple from "../../../public/auth-assets/image 17.png";
import linkedin from "../../../public/auth-assets/image 18.png";
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react'



// export const metadata: Metadata = {
//   title: "Instaskool | Sign-up",
//   description: "Instaskool classes",
// };


interface State {
  email?: string;
  password?: string;
}

export default function page() {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [state, setState] = useState<State>();
  const session = useSession()

  useEffect(() => {
    if (session?.status == 'authenticated') {
      router.replace('/onboarding')
    }
  }, [session, router])
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleFormSubmit = async () => {
    setError('');
    console.log(state)
    const { email, password } = state || {};



    if (!isValidEmail(email || '')) {
      setError('Email is invalid');
      return;
    }

    if (!password || (password && password.length < 8)) {
      setError('Password must be above 8 characters');
      return; 
    }

    const res = await signIn('credentials', {
      email,
      password
    })

    if (res?.error) {
      setError('invalid email or password');
      if (res?.url) router.replace('/onboarding')
    } else {
  setError('')
  }
  };

  return (
    <main className="main">
      <div className={styles.nav}>
        <div className={styles.left}>
          <Image src={logo} alt="" />
        </div>
        <div className={styles.right}>
          {/* <h1>
            Already have an account? <span>login</span>
          </h1> */}
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.left}>
          <Image src={image1} alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <h1>Create an account</h1>
            <p>
              Welcome onboard to Instaskool, where we bring education <br /> to
              your fingertip!
            </p>
          </div>
          <div className={styles.middle}>
            <form action="" className={styles.form} >
              <div className={styles.first}>
                <div className={styles.form1}>
                  <h1>Email</h1>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.form1}>
                  <h1>Password</h1>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
            <h5 style={{
              color: 'red'
            }}>{error && error}</h5>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottom}>
              <button onClick={handleFormSubmit}>Login</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
