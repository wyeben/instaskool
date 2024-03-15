"use client"
import React, { useState } from 'react';
import styles from '../../styles/signup.module.scss';
import logo from '../../../public/nav-assets/Instaskool-logo.png';
import image1 from '../../../public/assets/Group 39425.png';
import Image from 'next/image';
import google from '../../../public/auth-assets/image 16.png';
import apple from '../../../public/auth-assets/image 17.png';
import linkedin from '../../../public/auth-assets/image 18.png';
import { useRouter } from 'next/navigation';

interface State {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
}

export default function Page() {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [state, setState] = useState<State>();

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

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
    console.log('this and that')
    const { first_name, last_name, phone_number, email, password, confirm_password } = state || {};

    if (!checked) {
      setError('PLEASE AGREE TO THE TERMS OF SERVICE TO CONTINUE');
      return;
    }

    if (!isValidEmail(email || '')) {
      setError('Email is invalid');
      return;
    }

    if (!password || (password && password.length < 8)) {
      setError('Password must be above 8 characters');
      return;
    }

    if (password !== confirm_password) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name,
          last_name,
          phone_number,
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError('This email is already registered');
      }
      if (res.status === 200) {
        router.push('/sign-in');
        console.log('sign-up successful!');
      }
    } catch (err) {
      setError('Error, try again.');
      console.log(err);
    }
    console.log(state);
    console.log(error);
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
            <form action="" className={styles.form}>
              <div className={styles.first}>
                <div className={styles.form1}>
                  <h1>First name</h1>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Enter first name"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.form1}>
                  <h1>Last name</h1>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Enter last name"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.form1}>
                  <h1>Email</h1>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.form1}>
                  <h1>Phone number</h1>
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="Enter your phone number"
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
                <div className={styles.form1}>
                  <h1>Confirm Password</h1>
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className={styles.bottom}>
            <div className={styles.top}>
              <label htmlFor="check"></label>
              <input
                name="check"
                type="checkbox"
                checked={checked}
                onChange={handleCheck}
              />
              <p>I agree to all Terms and Conditions</p>
            </div>
            <div className={styles.bottom}>
              <button onClick={handleFormSubmit}>Register</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
