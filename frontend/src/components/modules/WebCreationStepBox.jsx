import React from 'react'
import Image from 'next/image'

const WebCreationStepBox = ({ title, isSvg }) => {
      return (
            <>
                  <div className="border rounded-lg gap-8 border-[#d9d9d9] py-8 flex flex-col items-center justify-center px-10">
                        {
                              isSvg ? (
                                    <span className='md:w-10 md:h-10 w-6 h-6'>
                                          <svg width="100%" height="100%" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M33.3346 20.4785V30.4785C33.3346 34.1604 30.3499 37.1452 26.668 37.1452H13.3346C9.65274 37.1452 6.66797 34.1604 6.66797 30.4785V20.4785" stroke="#28303F" strokeWidth="1.5" strokeLinejoin="round" />
                                                <path d="M27.9463 3.8125H12.0505C9.02156 3.8125 6.29779 5.88709 5.17288 9.05091L3.90958 12.604C3.52717 13.6795 3.26283 14.8304 3.54175 15.9373C4.20232 18.5588 6.34545 20.4792 8.88728 20.4792C11.9555 20.4792 14.4428 17.6809 14.4428 14.2292C14.4428 17.6809 16.9301 20.4792 19.9984 20.4792C23.0666 20.4792 25.5539 17.6809 25.5539 14.2292C25.5539 17.6809 28.0413 20.4792 31.1095 20.4792C33.6513 20.4792 35.7945 18.5588 36.455 15.9373C36.734 14.8304 36.4696 13.6795 36.0872 12.604L34.8239 9.05091C33.699 5.88709 30.9752 3.8125 27.9463 3.8125Z" stroke="#28303F" strokeWidth="1.5" strokeLinejoin="round" />
                                                <path d="M15 32.1445C15 29.3831 17.2386 27.1445 20 27.1445C22.7614 27.1445 25 29.3831 25 32.1445V37.1445H15V32.1445Z" stroke="#28303F" strokeWidth="1.5" strokeLinejoin="round" />
                                          </svg>
                                    </span>
                              ) : (
                                    <div className="relative md:w-[100px] md:h-[100px] w-[60px] h-[60px]">
                                          <Image src={"/images/image 10.png"} fill
                                                sizes="(max-width: 768px) 100vw, auto"
                                                className="w-full h-full" alt='logo' />
                                    </div>)
                        }
                        <span className='md:text-lg text-sm text-center font-bold text-[#1450A3]'>
                              {title}
                        </span>
                  </div>
            </>
      )
}

export default WebCreationStepBox