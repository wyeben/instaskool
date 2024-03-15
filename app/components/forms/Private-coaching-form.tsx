import Image from 'next/image';
import close_icon from '../../../public/nav-assets/burger-closePrivateClass.png';
import InstaCalender from '../CalenderModel';
import start_date from '../../../public/form-assets/start-date.png';
import end_date from '../../../public/form-assets/end-date.png';
import book_icon from '../../../public/form-assets/book-icon.png';
import chevron_up from '../../../public/form-assets/chevron-up.png';

type Props = {
  displayForm: boolean;
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({ displayForm, setDisplayForm }: Props) {
  const exitDetailHandler = (e: any) => {
    setDisplayForm(!displayForm);
  };

  return (
    <section
      className='fixed top-0 left-0 z-[200] bg-white w-full overflow-y-scroll h-full'
      id='register-form'
    >
      <div className='w-full h-[15vh] bg-[#C1DEFF] flex items-center justify-between px-5 md:px-[50px] font-medium text-lg md:text-3xl text-[#0551A7]'>
        <h3>Private Coaching Entry Form</h3>
        <Image
          src={close_icon}
          alt='close icon'
          className='w-[22px] md:w-[30px] cursor-pointer'
          onClick={exitDetailHandler}
        />
      </div>
      <form className='px-5 md:px-[50px] mt-20 text-[#2A2A2A]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-20'>
          {/* Student Bio */}
          <div>
            <h4 className='text-[#2A2A2A] font-semibold text-2xl mb-5 '>
              Student Bio
            </h4>
            {/* fullname */}
            <div className='flex flex-col mb-5'>
              <label htmlFor='fullName' className='text-lg mb-1'>
                Full Name
              </label>
              <input
                type='text'
                name='fullName'
                id='fullName'
                placeholder='Your Full name'
                className='w-full h-[45px] border border-[#A7A7A7] rounded-md px-3'
              />
            </div>
            {/* Age */}
            <div className='flex flex-col mb-5'>
              <label htmlFor='fullName' className='text-lg mb-1'>
                Age
              </label>
              <input
                type='text'
                name='fullName'
                id='fullName'
                placeholder='Your Full name'
                className='w-full h-[45px] border border-[#A7A7A7] rounded-md px-3'
              />
            </div>
            {/* address */}
            <div className='flex flex-col mb-5'>
              <label htmlFor='fullName' className='text-lg mb-1'>
                Address{' '}
                <span className='text-[#5D5D5D] font-light text-[13px]'>
                  (where tutorial will hold)
                </span>
              </label>
              <textarea
                //   type='text'
                name='fullName'
                id='fullName'
                placeholder='Your Full name'
                className='w-full h-[112px] border border-[#A7A7A7] rounded-md px-3 resize-none'
              />
            </div>
            {/* Email */}
            <div className='flex flex-col mb-5'>
              <label htmlFor='email' className='text-lg mb-1'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Your Full name'
                className='w-full h-[45px] border border-[#A7A7A7] rounded-md px-3'
              />
            </div>
            {/* Phone Number */}
            <div className='flex flex-col mb-5'>
              <label htmlFor='phone' className='text-lg mb-1'>
                Phone Number
              </label>
              <input
                type='tel'
                name='fullName'
                id='fullName'
                placeholder='803 123 4567'
                className='w-full h-[45px] border border-[#A7A7A7] rounded-md px-3'
              />
            </div>
            {/* Class */}
            <div className='flex flex-col mb-5'>
              <label htmlFor='fullName' className='text-lg mb-1'>
                Class
              </label>
              <input
                type='text'
                name='fullName'
                id='fullName'
                placeholder='basic 5'
                className='w-full h-[45px] border border-[#A7A7A7] rounded-md px-3'
              />
            </div>
          </div>

          {/* Date and Time */}
          <div>
            <h4 className='text-[#2A2A2A] font-semibold text-2xl mb-5 '>
              Date & Time
            </h4>
            <p>Pick lesson dates</p>
            <div className='my-10 flex w-full justify-between'>
              <div className='flex items-center'>
                <Image src={start_date} alt='start date icon' />
                <div className='ml-2'>
                  <h5 className='font-semibold '>Start Date</h5>
                  <p>Dec 4. 2022</p>
                </div>
              </div>
              <div className='flex items-center'>
                <Image src={end_date} alt='start date icon' />
                <div className='ml-2'>
                  <h5 className='font-semibold'>Start Date</h5>
                  <p>Mar 4. 2023</p>
                </div>
              </div>
            </div>
            <InstaCalender />
            <div className='flex flex-col mb-5 mt-10'>
              <label htmlFor='fullName' className='text-lg mb-1'>
                Select time
              </label>
              <input
                type='text'
                name='fullName'
                id='fullName'
                placeholder='WAT (+1)  2pm'
                className='w-full h-[45px] border border-[#A7A7A7] rounded-md px-3'
              />
            </div>
          </div>
          <div>
            <h4 className='text-[#2A2A2A] font-semibold text-2xl mb-5 '>
              Tutor & Subjects
            </h4>
            <p>Prefer Tutor gender</p>
            <div className='flex mt-3 mb-10'>
              <div className='flex mr-10 cursor-pointer'>
                <p className='text-lg mr-2'>M</p>
                <input type='radio' className='w-[32px]' />
              </div>
              <div className='flex mr-10 cursor-pointer'>
                <p className='text-lg mr-2'>F</p>
                <input type='radio' className='w-[32px]' />
              </div>
            </div>
            <div>
              <p>Subject</p>
              <div className='flex px-3 justify-between items-center h-[45px] w-[287px] rounded-lg border border-[#77777]'>
                <Image src={book_icon} alt='book icon' />
                <div className='flex text-[#838383] cursor-pointer'>
                  <p className='mr-2'>3</p>
                  <p>Selected</p>
                </div>
                <Image src={chevron_up} alt='up icon' />
              </div>
            </div>
            {/* Selected subject */}
            <div className='w-[287px] flex justify-center'>
              <div className='w-[224px] border border-[#77777] mt-5 p-5'>
                <div className='flex  items-center mb-3'>
                  <button className='w-[20px] h-[20px] bg-[#0551a7] mr-3 rounded-[4px]'></button>
                  <p>Mathematics</p>
                </div>
                <div className='flex items-center mb-3'>
                  <button className='w-[20px] h-[20px] bg-[#0551a7] mr-3 rounded-[4px]'></button>
                  <p>English Language</p>
                </div>
                <div className='flex items-center '>
                  <button className='w-[20px] h-[20px] mr-3 rounded-[4px] border border-[#77777]'></button>
                  <p>Yoruba</p>
                </div>
                <div className='flex items-center '>
                  <button className='w-[20px] h-[20px] mr-3 rounded-[4px] border border-[#77777]'></button>
                  <p>Economics</p>
                </div>
                <div className='flex  items-center mb-3'>
                  <button className='w-[20px] h-[20px] bg-[#0551a7] mr-3 rounded-[4px]'></button>
                  <p>Mathematics</p>
                </div>
                <div className='flex items-center '>
                  <button className='w-[20px] h-[20px] mr-3 rounded-[4px] border border-[#77777]'></button>
                  <p>Geography</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <button className='w-[177px] h-[45px] bg-[#F17105] rounded-full my-20 text-base font-medium text-white'>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
