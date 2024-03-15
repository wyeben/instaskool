import Image from 'next/image';
import Waec_icon from '../../public/homepage-assets/waec-icon.png';
import Ielts_icon from '../../public/homepage-assets/ielts-icon.png';
import Ncce_icon from '../../public/homepage-assets/ncce-icon.png';
import Bar_icon from '../../public/homepage-assets/bar-icon.png';
import Jamb_icon from '../../public/homepage-assets/jamb-icon.png';
import School_boy from '../../public/homepage-assets/school-boy.png';
import Smiling_girl from '../../public/homepage-assets/smiling-girl.png';
import tech_classes from '../../public/homepage-assets/tech-classes.jpg';
import special_classes from '../../public/homepage-assets/special-classes.jpg';
import Flexible_payment from '../../public/homepage-assets/flexible-payment.png';
import Easy_time from '../../public/homepage-assets/easy-time.png';
import Cert_icon from '../../public/homepage-assets/certification.png';
import Child_learning_towrite from '../../public/homepage-assets/child-learning-towrite.png';
import Three_in_one from '../../public/homepage-assets/three-in-one.png';
import Orange_rectangle_icon from '../../public/homepage-assets/orange-rectangle-icon.png';
import Kid_learning from '../../public/homepage-assets/kid-learning.png';
import Boy_lookingUp from '../../public/homepage-assets/boy-lookingUp.png';
import Incomparable_learning from '../components/Home-components/Inccomparable-learning';
import jss from '../../public/homepage-assets/jss.png';
import sss from '../../public/homepage-assets/sss.png';
import no_class from '../../public/homepage-assets/no-class.png';
import Testimonies from '../components/Home-components/Testimonies';
import left_spiral from '../../public/homepage-assets/left-spiral.png';
import right_spiral from '../../public/homepage-assets/right-spiral.png';
import three_lines from '../../public/homepage-assets/three-lines.png';
import right_ellipse from '../../public/homepage-assets/right-ellipes.png';
import left_ellipse from '../../public/homepage-assets/left-orange-ellipse.png';
import shooting_star from '../../public/homepage-assets/shooting-star.png';
import shooting_star_spiral from '../../public/homepage-assets/shooting-star-spiral.png';
import dots_effects from '../../public/homepage-assets/dot-effect.png';
import left_opac_ellipse from '../../public/homepage-assets/left-opacity-ellipse.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main id='home-page'>
      {/* An incomparable learning... */}
      <Incomparable_learning />
      {/* Instant Classes */}
      <section className='pt-10 px-5 md:px-[50px] relative'>
        <div className='flex justify-center items-center'>
          <h1 className='font-bold text-[#0551A7] text-xl lg:text-3xl'>
            Instant Classes
          </h1>
        </div>
        <div className='my-5'>
          <ul className='w-full flex justify-between text-[12px] lg:text-[16px] lg:w-[50%] lg:mx-auto'>
            <li>Become Better</li>
            <li>Learn Better</li>
            <li>Scale your Exams</li>
          </ul>
        </div>
        <div className='w-full flex justify-center pointer-events-none relative'>
          <div className='relative h-[150px] min-w-[400px] lg:w-[800px] lg:h-[500px] lg:mt-10'>
            <div className='absolute w-full flex bottom-0 left-0 justify-center z-0 overflow-hidden'>
              <div className='w-[215px] h-[215px] rounded-full bg-[#0551A7] translate-y-[100px] lg:w-[715px] lg:h-[715px] lg:translate-y-[49%]'></div>
            </div>
            <div className='absolute bottom-0 left-0 z-50 w-full flex justify-center'>
              <Image
                src={School_boy}
                alt='school boy'
                width={1000}
                height={1000}
                className='w-[166px] lg:w-[550px]'
              />
            </div>
            <Image
              src={Waec_icon}
              alt='waec icon'
              width={500}
              height={500}
              className='absolute w-[31px] left-0 top-0 translate-x-16 translate-y-10 lg:w-[195px] lg:-translate-x-[100px] z-[10]'
            />
            <Image
              src={Ielts_icon}
              alt='ielts icon'
              width={500}
              height={500}
              className='absolute w-[58px] left-0 top-0 translate-y-[120px] translate-x-7 lg:w-[273.5px] lg:translate-y-[400px] lg:-translate-x-[150px]'
            />
            <Image
              src={Bar_icon}
              alt='bar icon'
              width={500}
              height={500}
              className='absolute w-[27px] translate-x-[250px] lg:w-[90px] lg:translate-x-[620px] lg:translate-y-5'
            />
            <Image
              src={Ncce_icon}
              alt='ncce icon'
              width={500}
              height={500}
              className='absolute w-[92px] translate-x-[270px] translate-y-[70px] lg:w-[360px] lg:translate-x-[630px] lg:translate-y-[200px]'
            />
            <Image
              src={Jamb_icon}
              alt='jamb icon'
              width={500}
              height={500}
              className='absolute w-[92px] bottom-0 right-0 -translate-x-5 translate-y-[11px] lg:w-[275px] lg:translate-x-[100px] lg:translate-y-[35px]'
            />
          </div>
          {/* Left spiral */}
          <Image
            src={left_spiral}
            alt='left spiral'
            className='absolute hidden lg:block w-[200px] left-10 -top-20 pointer-events-none z-[1]'
          />
        </div>
        {/* right spiral */}
        <Image
          src={right_spiral}
          alt='left spiral'
          className='absolute hidden lg:block w-[150px] right-0 top-[120px] pointer-events-none z-[1]'
        />
      </section>
      {/* What we offer */}
      <section className='pt-10 px-5 md:px-[50px] mt-20 relative'>
        <div className='lg:mt-20'>
          <div className='w-full flex flex-col items-center mb-10'>
            <h1 className='text-[#0551A7] font-bold text-xl md:text-3xl'>
              What we offer
            </h1>
            <p className='text-center'>
              Our curriculum contains classes that will help you excel{' '}
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
            {/* left orange allipse */}
            <Image
              src={left_ellipse}
              alt='left ellipse'
              className='absolute hidden lg:block z-[1] w-[100px] left-0 top-[1000px] pointer-events-none'
            />
            {/* First content */}
            <div className='w-full bg-[#0551A7] p-5 rounded-xl text-white lg:py-10 lg:px-20 md:col-span-2 md:flex justify-between'>
              <div className='max-w-[484px] mt-5 md:mt-20'>
                <p className='text-xs mb-2'>Junior-Senior Secondary classes</p>
                <h2 className='text-[18px] font-bold mb-5 md:text-3xl'>
                  Secondary School Classes
                </h2>
                <p className='text-sm md:text-base'>
                  We are committed to providing a dynamic and engaging online
                  learning experience for our students to foster interactive and
                  collaborative learning, deliver curriculum content, assignment
                  and assessments remotely with the use of virtual class, video
                  lectures, and more.
                </p>
                <Link href='/secondary-school-classes'>
                  <button className='w-[113px] h-[40px] rounded-full bg-[#F17105] my-5'>
                    See More
                  </button>
                </Link>
              </div>

              <div className='rounded-xl overflow-hidden my-5'>
                <Image
                  src={Smiling_girl}
                  height={500}
                  width={500}
                  alt='smiling student'
                  className='object-cover w-[409px] h-[271px] md:h-[356px]'
                />
              </div>
            </div>
            {/* Second content */}
            <div className='bg-[#0551A7] p-5 rounded-xl text-white lg:px-14 relative z-[5]'>
              <p className='text-xs mt-10'>Tailored guidance</p>
              <h2 className='text-[18px] font-bold mt-2 mb-5 md:text-3xl'>
                Private coaching
              </h2>
              <p className='text-[14px] md:text-base'>
                We are committed to providing a dynamic and engaging online
                learning experience for our students to foster interactive and
                collaborative learning, allowing students and educators to
                connect.
              </p>
              <button className='w-[113px] h-[40px] rounded-full bg-[#F17105] my-5 md:hidden'>
                See More
              </button>
              <div className='w-full h-[271px] md:h-[436px] rounded-xl overflow-hidden my-5'>
                <Image
                  src={Kid_learning}
                  height={500}
                  width={500}
                  alt='smiling student'
                  className='object-cover'
                />
              </div>
              <button className='w-[113px] h-[40px] rounded-full bg-[#F17105] my-5 hidden md:block'>
                See More
              </button>
            </div>
            {/* Third content */}
            <div className='bg-[#0551A7] p-5 rounded-xl text-white lg:px-14'>
              <p className='text-xs mt-10'>
                Common Entrance, WAEC & UTME Prep classes
              </p>
              <h2 className='text-[18px] font-bold mt-2 mb-5 md:text-3xl'>
                External Examination Classes
              </h2>
              <p className='text-[14px] md:text-base'>
                Access verified educational content tailored to meet curriculum
                standards. Identify strengths for exam success. Learn with peers
                from top Nigerian schools, boosting intelligence and knowledge.
              </p>
              <Link href='/external-examination-classes'>
                <button className='w-[113px] h-[40px] rounded-full bg-[#F17105] my-5 md:hidden'>
                  See More
                </button>
              </Link>
              <div className='w-full h-[271px] md:h-[436px] rounded-xl overflow-hidden my-5'>
                <Image
                  src={Boy_lookingUp}
                  height={500}
                  width={500}
                  alt='smiling student'
                  className='object-cover'
                />
              </div>
              <Link href='/external-examination-classes'>
                <button className='w-[113px] h-[40px] rounded-full bg-[#F17105] my-5 hidden md:block'>
                  See More
                </button>
              </Link>
            </div>
            {/* Forth content */}
            <div className='bg-[#0551A7] p-5 rounded-xl text-white lg:px-14'>
              <p className='text-xs mt-10'>
                Data Analysis, Web Development, UI/UX & More.
              </p>
              <h2 className='text-[18px] font-bold mt-2 mb-5 md:text-3xl'>
                Tech Classes
              </h2>
              <p className='text-[14px] md:text-base'>
                Gain insights from experienced professionals to distinguish
                yourself in the digital space. Join our community and enhance
                your skills while learning alongside peers and colleagues.
              </p>
              <Link href='/tech-classes'>
                <button className='w-[113px] h-[40px] rounded-full bg-[#F17105] my-5 md:hidden'>
                  See More
                </button>
              </Link>
              <div className='w-full h-[271px] md:h-[436px] rounded-xl overflow-hidden my-5'>
                <Image
                  src={tech_classes}
                  height={500}
                  width={500}
                  alt='smiling student'
                  className='object-cover'
                />
              </div>
              <Link href='/tech-classes'>
                <button className='w-[113px] h-[40px] rounded-full bg-[#F17105] my-5 hidden md:block'>
                  See More
                </button>
              </Link>
            </div>
            {/* Fifth content */}
            <div className='bg-[#0551A7] p-5 rounded-xl text-white lg:px-14'>
              <p className='text-xs mt-10'>
                Vocational skills & Topic Based Classes
              </p>
              <h2 className='text-[18px] font-bold mt-2 mb-5 md:text-3xl'>
                Special Classes
              </h2>
              <p className='text-[14px] md:text-base'>
                It helps you learn what you need to know about a variety of
                subjects and skills of your choice. With Instaskool, you can
                learn at your own pace, take special classes on subjects & new
                skills you find difficult.
              </p>
              <Link href='/special-classes'>
                <button className='w-[113px] h-[40px] rounded-full bg-[#F17105] my-5 md:hidden'>
                  See More
                </button>
              </Link>
              <div className='w-full h-[271px] md:h-[436px] rounded-xl overflow-hidden my-5'>
                <Image
                  src={special_classes}
                  height={500}
                  width={500}
                  alt='smiling student'
                  className='object-cover '
                />
              </div>
              <Link href='/special-classes'>
                <button className='w-[113px] h-[40px] rounded-full bg-[#F17105] my-5 hidden md:block'>
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Three lines */}
        <Image
          src={three_lines}
          alt='left spiral'
          className='absolute hidden lg:block w-[200px] left-0 -top-[150px] z-[1] pointer-events-none'
        />
        {/* right ellipse */}
        <Image
          src={right_ellipse}
          alt='left spiral'
          className='absolute hidden lg:block w-[100px] right-0 -top-[60px] z-[1] pointer-events-none'
        />
        {/* Shooting star */}
        <Image
          src={shooting_star}
          alt='left spiral'
          className='absolute hidden lg:block w-[150px] left-0 -bottom-[150px] pointer-events-none'
        />
        {/* Shooting star spiral */}
        <Image
          src={shooting_star_spiral}
          alt='left spiral'
          className='absolute hidden lg:block w-[150px] right-0 -bottom-[250px] pointer-events-none'
        />
      </section>
      {/* Register for our school plan */}
      <section className='pt-10 px-5 md:px-[50px]'>
        <div className='w-full flex flex-col items-center justify-center mt-5 md:flex-row md:mb-10'>
          <h2 className='font-bold text-xl md:text-3xl text-[#0551A7] text-center md:mr-5'>
            Register for our School{' '}
            <span className='block md:inline-block'>Plan!!</span>
          </h2>
          <button className='w-[144px] h-[40px] text-white bg-[#F17105] rounded-full my-5 text-[14px]'>
            Comming Soon
          </button>
        </div>
        <div className='md:flex justify-between md:items-center'>
          <div className='mb-10 md:w-[50%]'>
            <h2 className='font-bold text-xl md:text-3xl text-[#0551A7] my-5 text-center'>
              All - in - One Learning Tool
            </h2>
            <div className='max-w-[500px] mx-auto'>
              <p className='text-sm text-center'>
                Start learning something new today with Instaskool! Customize
                lesson plans, track your progress, and embrace lifelong
                learning. Perfect for students and learners of all ages.
              </p>
            </div>
          </div>
          <div className='md:w-[50%]'>
            <div className='flex mb-10'>
              <Image
                src={Flexible_payment}
                width={500}
                height={5000}
                alt='flexible payment icon'
                className='w-[36px] h-[36px] mr-3'
              />
              <div className=''>
                <h2 className='text-[#99BE20] text-[18px] mb-3 font-medium'>
                  Flexible Payment Structure
                </h2>
                <p className='text-sm'>
                  Instaskool offers flexible payment options to suit your needs.
                  Choose from weekly, monthly, quarterly, or per session
                  payments. Instaskool has you covered!
                </p>
              </div>
            </div>
            <div className='flex mb-10'>
              <Image
                src={Easy_time}
                width={500}
                height={5000}
                alt='flexible payment icon'
                className='w-[36px] h-[36px] mr-3'
              />
              <div className=''>
                <h2 className='text-[#0551A7] text-[18px] mb-3 font-medium'>
                  Easy Scheduling & Timeliness
                </h2>
                <p className='text-sm'>
                  Instaskool offers flexible payment options to suit your needs.
                  Choose from weekly, monthly, quarterly, or per session
                  payments. Instaskool has you covered!
                </p>
              </div>
            </div>
            <div className='flex mb-10'>
              <Image
                src={Cert_icon}
                width={500}
                height={5000}
                alt='flexible payment icon'
                className='w-[36px] h-[36px] mr-3'
              />
              <div className=''>
                <h2 className='text-[#F17105] text-[18px] mb-3 font-medium'>
                  Certification
                </h2>
                <p className='text-sm'>
                  Instaskool offers flexible payment options to suit your needs.
                  Choose from weekly, monthly, quarterly, or per session
                  payments. Instaskool has you covered!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular classes */}
      <section className='pt-10 px-5 md:px-[50px] relative'>
        {/* Left opacity ellipse */}
        <Image
          src={left_opac_ellipse}
          alt='left opacity ellipse'
          className='absolute hidden lg:block w-[150px] left-0 top-10 pointer-events-none'
        />
        {/* Dots effects */}
        <Image
          src={dots_effects}
          alt='dots effects'
          className='absolute hidden lg:block w-[150px] left-0 -bottom-20 pointer-events-none'
        />
        <div className='mb-10'>
          <h2 className='font-bold text-xl md:text-3xl text-[#0551A7] my-5 text-center'>
            Our Popular Classes
          </h2>
          <div className='max-w-[600px] mx-auto'>
            <p className='text-sm text-center'>
              Gain access to loads of educational content carefully written and
              verified to meet need of the pupils according to the standard
              curriculum
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center md:flex-row md:justify-between md:flex-wrap md:mt-20 lg:mb-20'>
          <div className='w-full md:w-[302px] h-[436px] relative mb-5 rounded-2xl overflow-hidden'>
            <Image
              src={Child_learning_towrite}
              width={500}
              height={500}
              alt='Child learning to write'
              className='md:w-[302px] h-[436px] object-cover'
            />
            <p className='font-bold text-xl text-white absolute bottom-10 left-4'>
              Basic 1-6
            </p>
          </div>
          <div className='w-full md:w-[302px] h-[436px] relative mb-5 rounded-2xl overflow-hidden'>
            <Image
              src={jss}
              width={500}
              height={500}
              alt='Child learning to write'
              className='md:w-[302px] h-[436px] object-cover'
            />
            <p className='font-bold text-xl text-white absolute bottom-10 left-4'>
              JSS 1-3
            </p>
          </div>
          <div className='w-full md:w-[302px] h-[436px] relative mb-5 rounded-2xl overflow-hidden'>
            <Image
              src={sss}
              width={500}
              height={500}
              alt='Child learning to write'
              className='md:w-[302px] h-[436px] object-cover'
            />
            <p className='font-bold text-xl text-white absolute bottom-10 left-4'>
              SSS 1-3
            </p>
          </div>
          <div className='w-full md:w-[302px] h-[436px] relative mb-5 rounded-2xl overflow-hidden'>
            <Image
              src={no_class}
              width={500}
              height={500}
              alt='Child learning to write'
              className='md:w-[302px] h-[436px] object-cover'
            />
            {/* <p className='font-bold text-xl text-white absolute bottom-10 left-4'>
              Basic 1-6
            </p> */}
          </div>
        </div>
      </section>
      {/* with the Best Experienced Tutors */}
      <section className='pt-10 bg-[#EFEDF1]'>
        <div className='mb-10 w-full px-5 md:px-[50px]'>
          <h2 className='font-bold text-xl md:text-3xl text-[#0551A7] my-5 text-center'>
            With the Best & Experienced Tutors
          </h2>
          <p className='text-base text-center'>
            By registering, we provide you with an excellent tutor, so your
            child never misses out.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-20'>
          <div className='flex flex-col justify-center'>
            <div className='px-5 md:px-[50px] relative flex justify-center'>
              <Image
                src={Three_in_one}
                width={500}
                height={500}
                alt='three in one picture'
                className='w-[358px]'
              />
              <div className='bg-[#0551A7] text-white h-[62px] flex items-center justify-center text-center absolute bottom-0 w-full md:w-[517px]'>
                <p className='text-sm'>
                  Check out videos from our previous classes and loads of
                  materials for free.
                </p>
              </div>
            </div>
          </div>
          <div className='px-5 md:px-[50px] pt-10 md:pt-0'>
            <div className='flex mb-10 '>
              <Image
                src={Orange_rectangle_icon}
                width={500}
                height={5000}
                alt='flexible payment icon'
                className='w-[24px] h-[4px] mr-3 mt-3'
              />
              <div className=''>
                <h2 className='text-[#0551A7] text-[18px] mb-3 font-medium'>
                  Primary classes
                </h2>
                <p className='text-sm'>
                  Throughout all primary classes, We help your children develop
                  core skills, communication and self-esteem.
                </p>
              </div>
            </div>
            <div className='flex mb-10'>
              <Image
                src={Orange_rectangle_icon}
                width={500}
                height={5000}
                alt='flexible payment icon'
                className='w-[24px] h-[4px] mr-3 mt-3'
              />
              <div className=''>
                <h2 className='text-[#0551A7] text-[18px] mb-3 font-medium'>
                  Intermediate Classes
                </h2>
                <p className='text-sm'>
                  Gain access to loads of educational content carefully written
                  and verified to meet need of the pupils according to the
                  standard curriculum.
                </p>
              </div>
            </div>
            <div className='flex mb-10'>
              <Image
                src={Orange_rectangle_icon}
                width={500}
                height={5000}
                alt='flexible payment icon'
                className='w-[24px] h-[4px] mr-3 mt-3'
              />
              <div className=''>
                <h2 className='text-[#0551A7] text-[18px] mb-3 font-medium'>
                  Private Coaching
                </h2>
                <p className='text-sm'>
                  Boost your at-home learning. Help your child succeed by giving
                  them access to video lessons and study guides from subject
                  expert.
                </p>
              </div>
            </div>
            <div className='flex pb-10'>
              <Image
                src={Orange_rectangle_icon}
                width={500}
                height={5000}
                alt='flexible payment icon'
                className='w-[24px] h-[4px] mr-3 mt-3'
              />
              <div className=''>
                <h2 className='text-[#0551A7] text-[18px] mb-3 font-medium'>
                  Waec & Neco Preparatory Classes
                </h2>
                <p className='text-sm'>
                  Learn what you need to know to ace your next exam by
                  identifying your strengths
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <Testimonies />
    </main>
  );
}
