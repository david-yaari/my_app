'use client';
import styles from '../style';
import Image from 'next/image';

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} bg-blue-gradient h-[140px] w-[140px] cursor-pointer rounded-full p-[2px]`}
  >
    <div
      className={`${styles.flexCenter} h-[100%] w-[100%] flex-col rounded-full bg-primary`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins text-[18px] font-medium leading-[23.4px]'>
          <span className='text-gradient'>Get</span>
        </p>
        <Image
          src='/assets/arrow-up.svg'
          alt='arrow-up'
          className='h-[23px] w-[23px] object-contain'
          height={23}
          width={23}
        />
      </div>

      <p className='font-poppins text-[18px] font-medium leading-[23.4px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
