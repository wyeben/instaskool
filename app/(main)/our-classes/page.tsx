import Image from 'next/image';
import completed_admission from '../../../public/aboutus-assets/completed-admission.png';
import bulb from '../../../public/ourClasses-assets/bulb.png';
import growth from '../../../public/ourClasses-assets/growth.png';
import tech_class from '../../../public/aboutus-assets/tech-class.png';
import smilling_boy from '../../../public/ourClasses-assets/boy-with-handsInPocket.png';
import girl_smiling from '../../../public/ourClasses-assets/girl-smiling.png';
import boy_lookingUp from '../../../public/ourClasses-assets/boy-lookingUp.png';
import techClasses from '../../../public/ourClasses-assets/tech-classes.png';
import boy_writing from '../../../public/ourClasses-assets/boyWriting.png';
import groupOfStudents from '../../../public/ourClasses-assets/groupOfStudents.png';
import wiglyLine from '../../../public/ourClasses-assets/wigly-line.png';

export default function page() {
  return (
    <main className='relative md:pb-[161px] overflow-hidden'>
      <section className='pt-10 md:mx-[50px] bg-[#0551A7] text-white md:rounded-t-3xl md:mt-20'>
        <div className='flex justify-center items-center flex-col '>
          <h1 className='font-bold text-white text-xl lg:text-4xl text-center'>
            Finding a better platform to optimize <br /> your kids learning
            experience
          </h1>
          <p className='my-5'>Access to live classes</p>
        </div>
        <div className='w-full flex justify-center pointer-events-none mt-5 md:mt-0'>
          <div className='relative h-[150px] min-w-[400px] lg:w-[800px] md:h-[300px] lg:h-[400px] lg:mt-10'>
            <div className='absolute bottom-0 left-0 z-50 w-full flex justify-center'>
              <Image
                src={smilling_boy}
                alt='school boy'
                width={1000}
                height={1000}
                className='w-[253px] md:w-full lg:w-[531px]'
              />
            </div>
            <Image
              src={completed_admission}
              alt='waec icon'
              width={500}
              height={500}
              className='absolute w-[100px] -left-5 md:-left-[150px] lg:left-[160px] top-0 translate-x-16 translate-y-[10px] md:translate-y-10 md:w-[195px] lg:-translate-x-[100px] z-[60]'
            />
            <Image
              src={bulb}
              alt='bulb'
              className='absolute w-[30px] md:w-[56px] bottom-10 z-[60] md:bottom-20 left-10 md:-left-[100px] lg:left-0'
            />
            <Image
              src={growth}
              alt='growth icon'
              className='absolute w-[30px] md:w-[48px] translate-y-5 translate-x-[300px] md:translate-x-[400px] lg:translate-x-[620px] md:translate-y-[70px] lg:translate-y-5 z-[60]'
            />
            <Image
              src={tech_class}
              alt='tech classes icon'
              className='absolute w-[100px] md:w-[150px] lg:w-[266px] translate-x-[270px] translate-y-[70px] md:translate-y-[200px] md:translate-x-[350px] lg:translate-x-[630px] lg:translate-y-[150px] z-[60]'
            />
          </div>
        </div>
      </section>
      {/* Choose your plan */}
      <section className='mx-5 md:mx-[50px] py-10 mt-10'>
        <h3 className='mb-10 text-[#0551A7] font-bold text-3xl text-center'>
          Choose your Plan
        </h3>
        <div className='w-full grid md:grid-cols-3 gap-x-10 gap-y-20'>
          {/* Item 1 */}
          <div className='shadow-xl rounded-xl overflow-hidden'>
            <Image
              src={girl_smiling}
              alt='girl learning'
              className='w-full h-[295px] object-cover'
            />
            <div className='w-full px-3 py-5 flex flex-col items-center'>
              <h4 className='text-[#0551A7] text-2xl font-medium '>
                Secondary School Classes
              </h4>
              <h3 className='font-bold text-black my-5 text-3xl'>N30,000</h3>
              <button className='bg-[#0551A7] text-white w-full h-[41px] rounded-full text-sm'>
                Register
              </button>
            </div>
          </div>
          {/* Item 2 */}
          <div className='shadow-xl rounded-xl overflow-hidden'>
            <Image
              src={boy_lookingUp}
              alt='girl learning'
              className='w-full h-[295px] object-cover'
            />
            <div className='w-full px-3 py-5 flex flex-col items-center'>
              <h4 className='text-[#0551A7] text-2xl font-medium'>
                External Examination Classes
              </h4>
              <h3 className='font-bold text-black my-5 text-3xl'>N30,000</h3>
              <button className='bg-[#0551A7] text-white w-full h-[41px] rounded-full text-sm'>
                Register
              </button>
            </div>
          </div>
          {/* Item 3 */}
          <div className='shadow-xl rounded-xl overflow-hidden'>
            <Image
              src={techClasses}
              alt='girl learning'
              className='w-full h-[295px] object-cover'
            />
            <div className='w-full px-3 py-5 flex flex-col items-center'>
              <h4 className='text-[#0551A7] text-2xl font-medium'>
                Tech Classes
              </h4>
              <h3 className='font-bold text-black my-5 text-3xl'>N40,000</h3>
              <button className='bg-[#0551A7] text-white w-full h-[41px] rounded-full text-sm'>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center pt-20'>
          <div className=' grid md:grid-cols-2 gap-x-10 gap-y-20'>
            {/* Item 4 */}
            <div className='shadow-xl rounded-xl overflow-hidden'>
              <Image
                src={boy_writing}
                alt='girl learning'
                className='w-full h-[295px] object-cover'
              />
              <div className='w-full px-3 py-5 flex flex-col items-center'>
                <h4 className='text-[#0551A7] text-2xl font-medium'>
                  Private Coaching
                </h4>
                <h3 className='font-bold text-black my-5 text-3xl'>N30,000</h3>
                <button className='bg-[#0551A7] text-white w-full h-[41px] rounded-full text-sm'>
                  Register
                </button>
              </div>
            </div>
            {/* Item 5 */}
            <div className='shadow-xl rounded-xl overflow-hidden'>
              <Image
                src={groupOfStudents}
                alt='girl learning'
                className='w-full h-[295px] object-cover'
              />
              <div className='w-full px-3 py-5 flex flex-col items-center'>
                <h4 className='text-[#0551A7] text-2xl font-medium'>
                  Special Classes
                </h4>
                <h3 className='font-bold text-black my-5 text-3xl'>N30,000</h3>
                <button className='bg-[#0551A7] text-white w-full h-[41px] rounded-full text-sm'>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-5 md:mx-[50px] py-10 mt-10 mb-[70px]'>
        <h2 className='text-center font-bold text-4xl text-[#0551A7] mb-5'>
          All - In - One Learning Tool
        </h2>
        <div className=''>
          <p className='max-w-[660px] mx-auto text-[#5D5D5D] text-sm text-center'>
            Create your own custom lesson plans, and track your progress to
            ensure the you are always learning new things. Wether you are a
            sstudent, or just a lifelong learner, Instaskool is a perfect way to
            get started with learning something new today.
          </p>
        </div>
      </section>
      <Image
        src={wiglyLine}
        alt='wigly line'
        className='w-[483px] absolute -bottom-[100px] md:bottom-10 left-0 pointer-events-none'
      />
    </main>
  );
}
