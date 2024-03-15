import Image from 'next/image';
import boy_writing from '../../../public/aboutus-assets/boy-writing.png';
import completed_admission from '../../../public/aboutus-assets/completed-admission.png';
import bulb from '../../../public/aboutus-assets/bulb.png';
import growth from '../../../public/aboutus-assets/growth.png';
import tech_class from '../../../public/aboutus-assets/tech-class.png';
import vision from '../../../public/aboutus-assets/vision.png';
import mission from '../../../public/aboutus-assets/mission.png';
import goal from '../../../public/aboutus-assets/goal.png';
import profile from '../../../public/aboutus-assets/profile-placeholder.png';

export default function page() {
  return (
    <main>
      <section className='pt-10 md:mx-[50px] bg-[#0551A7] text-white md:rounded-t-3xl md:mt-20'>
        <div className='flex justify-center items-center '>
          <h1 className='font-bold text-white text-xl lg:text-3xl'>
            Who we are
          </h1>
        </div>
        <div className='w-full flex justify-center pointer-events-none mt-10 md:mt-0'>
          <div className='relative h-[150px] min-w-[400px] lg:w-[800px] md:h-[300px] lg:h-[400px] lg:mt-10'>
            <div className='absolute bottom-0 left-0 z-50 w-full flex justify-center'>
              <Image
                src={boy_writing}
                alt='school boy'
                width={1000}
                height={1000}
                className='w-[253px] md:w-full lg:w-[707px]'
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
              className='absolute w-[30px] md:w-[48px] translate-y-5 translate-x-[300px] md:translate-x-[400px] lg:translate-x-[620px] md:translate-y-[70px] lg:translate-y-5'
            />
            <Image
              src={tech_class}
              alt='tech classes icon'
              className='absolute w-[100px] md:w-[150px] lg:w-[266px] translate-x-[270px] translate-y-[70px] md:translate-y-[200px] md:translate-x-[350px] lg:translate-x-[630px] lg:translate-y-[150px] z-[60]'
            />
          </div>
        </div>
      </section>
      {/* Who we are */}
      <section className='pt-10 mx-5 md:mx-[60px] md:mt-20'>
        <h1 className='text-[#0551A7] text-xl md:text-3xl font-bold'>
          Who We Are?
        </h1>
        <p className='text-black mt-10 text-sm md:text-base'>
          Instaskool is an online education platform that helps you learn what
          you need to know about a variety of subjects. With Instaskool, you can
          learn at your own pace, and get the education you need to succeed in
          your chosen field.
          <span className='block mt-5'>
            Instaskool offers a variety of courses, from basic to advanced
            levels. You can choose the course that best suits your needs, and
            then take the time to learn at your own pace.
          </span>
          Instaskool is a great way to learn about the things you need to know
          in order to be successful in school and in your career. With
          Instaskool, you can get access to a variety of educational resources
          that can help you improve your grades and succeed in your studies.
          <span className='block my-5'>
            Instaskool is a great resource for parents and students alike. You
            can find information on a variety of topics, including test prep,
            college admissions, and choosing the right courses. With Instaskool,
            you can also get access to exclusive discounts and coupons that can
            save you money on your education expenses.
          </span>
        </p>
      </section>
      <section className=' md:mx-[60px] text-white md:rounded-3xl mt-20 bg-[#D7E2FF] py-20 px-5 md:p-20'>
        <div>
          <h3 className='text-center text-[#0551A7] text-3xl font-bold'>
            Putting our clients first since 2020
          </h3>
          <p className='text-center text-[#001A40] text-base mt-3'>
            Serving more than 3 years, we’ve been empowering clients by helping
            them
            <span className='block text-center'>
              take control of their finances
            </span>
          </p>
        </div>
        <div className='grid md:grid-cols-3 mt-20 gap-x-20 gap-y-10'>
          <div>
            <Image
              src={vision}
              alt='our vision'
              className='w-[56px] h-[56px]'
            />
            <h3 className='text-[#0551A7] text-xl font-bold my-5'>
              Our Vision
            </h3>
            <p className='text-[#46464A]'>
              To be the leading Pan-African EduTech platform.
            </p>
          </div>
          <div>
            <Image
              src={mission}
              alt='our vision'
              className='w-[56px] h-[56px]'
            />
            <h3 className='text-[#0551A7] text-xl font-bold my-5'>
              Our Mission
            </h3>
            <p className='text-[#46464A]'>
              Empowering Education in Africa by leveraging technology to make
              quality learning accessible to all.
            </p>
          </div>
          <div>
            <Image src={goal} alt='our vision' className='w-[56px] h-[56px]' />
            <h3 className='text-[#0551A7] text-xl font-bold my-5'>Our Goal</h3>
            <p className='text-[#46464A]'>
              To educate and expose citizens of every African country to
              border-less education.
            </p>
          </div>
        </div>
      </section>
      <section className='mx-5 md:mx-[60px] mt-20 pt-20 pb-[120px]'>
        <div>
          <h3 className='text-center text-[#0551A7] text-3xl font-bold'>
            Meet the team that makes it all work
          </h3>
          <p className='text-center text-[#001A40] text-base mt-3'>
            Serving more than 3 years, we’ve been empowering clients by
            <span className='md:block text-center'>
              helping them take control of their finances
            </span>
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-10  mt-20'>
          <div className='flex items-center'>
            <Image
              src={profile}
              alt='profile placeholder'
              className='w-[100px] h-[100px]'
            />
            <div className='w-[232px] bg-[#F5FAFF] p-5 shadow-lg rounded-xl '>
              <h3 className='text-lg font-bold text-[#0551A7]'>
                Omoyele Falaiye
              </h3>
              <p>CEO</p>
            </div>
          </div>
          <div className='flex items-center'>
            <Image
              src={profile}
              alt='profile placeholder'
              className='w-[100px] h-[100px]'
            />
            <div className='w-[232px] bg-[#F5FAFF] p-5 shadow-lg rounded-xl '>
              <h3 className='text-lg font-bold text-[#0551A7]'>
                Omoyele Falaiye
              </h3>
              <p>CEO</p>
            </div>
          </div>
          <div className='flex items-center'>
            <Image
              src={profile}
              alt='profile placeholder'
              className='w-[100px] h-[100px]'
            />
            <div className='w-[232px] bg-[#F5FAFF] p-5 shadow-lg rounded-xl '>
              <h3 className='text-lg font-bold text-[#0551A7]'>
                Omoyele Falaiye
              </h3>
              <p>CEO</p>
            </div>
          </div>
          <div className='flex items-center'>
            <Image
              src={profile}
              alt='profile placeholder'
              className='w-[100px] h-[100px]'
            />
            <div className='w-[232px] bg-[#F5FAFF] p-5 shadow-lg rounded-xl '>
              <h3 className='text-lg font-bold text-[#0551A7]'>
                Omoyele Falaiye
              </h3>
              <p>CEO</p>
            </div>
          </div>
          <div className='flex items-center'>
            <Image
              src={profile}
              alt='profile placeholder'
              className='w-[100px] h-[100px]'
            />
            <div className='w-[232px] bg-[#F5FAFF] p-5 shadow-lg rounded-xl '>
              <h3 className='text-lg font-bold text-[#0551A7]'>
                Omoyele Falaiye
              </h3>
              <p>CEO</p>
            </div>
          </div>
          <div className='flex items-center'>
            <Image
              src={profile}
              alt='profile placeholder'
              className='w-[100px] h-[100px]'
            />
            <div className='w-[232px] bg-[#F5FAFF] p-5 shadow-lg rounded-xl '>
              <h3 className='text-lg font-bold text-[#0551A7]'>
                Omoyele Falaiye
              </h3>
              <p>CEO</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
