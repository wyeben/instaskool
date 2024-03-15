import Image from 'next/image';
import close_icon from '../../../public/nav-assets/burger-closePrivateClass.png';
import dots from '../../../public/assets/dot-effect.png';
import ellipse from '../../../public/assets/ellipse.png';
import Form_profie from '../../../public/assets/form-profile.png';
import Form_email from '../../../public/assets/form-email.png';
import Form_subject from '../../../public/assets/form-subject.png';
import Form_paperclip from '../../../public/assets/form-paperclip.png';

type Props = {
  workWithUs: boolean;
  setWorkWithUs: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Vacancy({ workWithUs, setWorkWithUs }: Props) {
  const exitDetailHandler = (e: any) => {
    setWorkWithUs(!workWithUs);
  };
  return (
    <section
      className='fixed top-0 left-0 w-full h-full bg-white z-[200] overflow-y-scroll pb-20'
      id='register-form'
    >
      <div className='pt-20 px-20'>
        <Image
          src={close_icon}
          alt='close icon'
          className='w-[22px] md:w-[30px] cursor-pointer'
          onClick={exitDetailHandler}
        />
      </div>
      <div className='relative px-5 md:px-0'>
        <div className='w-full flex justify-center items-center flex-col mt-20'>
          <h1 className='font-bold text-3xl md:text-5xl text-[#0551A7]'>
            Work with us
          </h1>
          <p className='md:mt-5 text-center md:text-left'>
            Are you a tutor? Looking to join us?
          </p>
        </div>
        <div className='mt-[120px] w-full flex flex-col items-center justify-center'>
          <p className='md:mt-3'>kindly fill this form below</p>
        </div>
        <div className='absolute top-[50%] -translate-y-[50%] left-0'>
          <Image
            src={dots}
            alt='ellipse'
            className='w-[70px] md:w-[150px]'
          ></Image>
        </div>
      </div>
      {/* Form */}
      <form action='' className='w-full px-5 md:px-[100px] mt-10'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='w-full h-[45px] bg-[#F2EFFA] flex items-center pl-3  rounded-md overflow-hidden'>
            <label htmlFor='fullname'>
              <Image
                src={Form_profie}
                alt='form profile'
                className='w-[26px] h-[26px]'
              ></Image>
            </label>
            <input
              id='fullname'
              type='text'
              placeholder='Full name'
              className=' w-full h-full px-2 bg-[#F2EFFA] border-none outline-none'
            />
          </div>
          <div className='w-full h-[45px] bg-[#F2EFFA] flex items-center pl-3  rounded-md overflow-hidden'>
            <label htmlFor='email'>
              <Image
                src={Form_email}
                alt='form profile'
                className='w-[21px]'
              ></Image>
            </label>
            <input
              id='email'
              type='text'
              placeholder='Email address'
              className=' w-full h-full px-2 bg-[#F2EFFA] border-none outline-none'
            />
          </div>
        </div>
        <div className='w-full h-[45px] bg-[#F2EFFA] flex items-center pl-3  rounded-md overflow-hidden mt-10'>
          <label htmlFor='subject'>
            <Image
              src={Form_subject}
              alt='form profile'
              className='w-[24px]'
            ></Image>
          </label>
          <input
            id='subject'
            type='text'
            placeholder='Subject'
            className=' w-full h-full px-1 bg-[#F2EFFA] border-none outline-none'
          />
        </div>
        <div>
          <label htmlFor='cv' className='flex cursor-pointer'>
            <div className='w-full h-[45px] bg-[#F2EFFA] flex items-center pl-3  rounded-md overflow-hidden mt-10'>
              <Image
                src={Form_paperclip}
                alt='form profile'
                className='w-[24px]'
              ></Image>
              <div className='w-full h-full flex items-center pl-1'>
                <p className='text-gray-400'>Attach your cv</p>
              </div>
            </div>
          </label>
          <input
            id='cv'
            type='file'
            placeholder='Attach your cv'
            className=' w-full h-full px-1 bg-[#F2EFFA] border-none outline-none hidden'
          />
        </div>
        <div className='w-full mt-10'>
          <textarea
            name=''
            id=''
            className='resize-none bg-[#F2EFFA] rounded-md p-3 h-[550px] w-full'
            placeholder='Your message'
          ></textarea>
        </div>
        <div className='w-full flex justify-end mt-10'>
          <button className='w-[177px] h-[45px] bg-[#F17105] rounded-full text-base font-medium text-white'>
            Send message
          </button>
        </div>
      </form>
      <div>
        <Image
          src={ellipse}
          alt='ellipse'
          className='absolute top-0 right-0 w-[50px] md:w-[150px]'
        ></Image>
      </div>
    </section>
  );
}
