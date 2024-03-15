import Image from 'next/image';
import rafiki from '../../../public/assets/rafiki.png';
import ellipse from '../../../public/assets/ellipse.png';
import dots from '../../../public/assets/dot-effect.png';
import bulb from '../../../public/assets/discussion 1.png';
import ticks from '../../../public/assets/charm_circle-tick.png';
import styles from '../../styles/onboarding.module.scss';
import Link from 'next/link';

export default function page() {
  return (
    <>
      {/* <div className={styles.ellipse}>
        <Image
          src={ellipse}
          alt=""
          width={200}
          height={200}
        />
      </div> */}
      <main className={`${styles.main} pt-[50px]`}>
        <div className={styles.col1}>
          <div className={`${styles.top} relative w-full`}>
            <Image
              src={rafiki}
              alt='welcome to instaskool'
              width={600}
              height={600}
            />
            <div className='absolute top-[50%] -translate-y-[50%] left-0'>
              <Image
                src={dots}
                alt='ellipse'
                className='w-[70px] md:w-[150px]'
              ></Image>
            </div>
          </div>
          <div className={styles.bottom}>
            <h1>Welcome to Instaskool</h1>
            <p>
              Enjoy the captivating process of online education at your <br />{' '}
              comfort and convenience
            </p>
          </div>
        </div>
        <div className={styles.col2}>
          <header className={styles.header_main}>
            <div className={styles.tip}>
              <Image src={bulb} width={50} height={50} alt='' />
            </div>
            <div className='text'>
              <h1>Tips to make the most of your online learning experience</h1>
            </div>
          </header>
          <header className={styles.header}>
            <div className='tip'>
              <Image src={ticks} width={50} height={50} alt='' />
            </div>
            <div className='text'>
              <h1>
                Set up a quiet, comfortable space with good lighting and minimal
                distractions
              </h1>
            </div>
          </header>
          <header className={styles.header}>
            <div className='tip'>
              <Image src={ticks} width={50} height={50} alt='' />
            </div>
            <div className='text'>
              <h1>Keep track of assignment, due dates and calendar.</h1>
            </div>
          </header>
          <header className={styles.header}>
            <div className='tip'>
              <Image src={ticks} width={50} height={50} alt='' />
            </div>
            <div className='text'>
              <h1>
                Participate in discussions, ask questions, and collaborate with
                your peers.
              </h1>
            </div>
          </header>
          <header className={styles.header}>
            <div className='tip'>
              <Image src={ticks} width={50} height={50} alt='' />
            </div>
            <div className='text'>
              <h1>
                Ensure your device, and internet connection are in good working
                conditions before each session{' '}
              </h1>
            </div>
          </header>
          <article className={styles.main}></article>
        </div>
        <Link href='' className='link'>
          Join Class
        </Link>
        <div>
          <Image
            src={ellipse}
            alt='ellipse'
            className='absolute top-0 right-0 w-[50px] md:w-[150px]'
          ></Image>
        </div>
      </main>
      <footer className={styles.footer}>
        <h1>c 2022 Instaskool</h1>
      </footer>
    </>
  );
}
