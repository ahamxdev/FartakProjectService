import React from 'react'

const SectionTitle = ({ title }) => {
      return (
            <div className='w-[90%] mx-auto my-6 flex justify-between items-center gap-2'>
                  <span className='lg:w-[366px] lg:h-[13px] md:w-[230px] md:h-[9px] sm:w-[170px] sm:h-[7px] w-[80px] h-[5px]'>
                        <svg width="100%" height="100%" viewBox="0 0 366 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.226497 6.47852L6 0.705013L11.7735 6.47852L6 12.252L0.226497 6.47852ZM6 6.47852V5.47852L366 5.47852V6.47852V7.47852L6 7.47852V6.47852Z" fill="#6E7A86" />
                        </svg>
                  </span>
                  <span className='lg:text-2xl md:text-lg sm:text-base text-sm text-center font-bold'>{title}</span>
                  <span className='lg:w-[366px] lg:h-[13px] md:w-[230px] md:h-[9px] sm:w-[170px] sm:h-[7px] w-[80px] h-[5px]'>
                        <svg width="100%" height="100%" viewBox="0 0 366 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M365.774 6.47852L360 0.705013L354.226 6.47852L360 12.252L365.774 6.47852ZM360 6.47852V5.47852L0 5.47852V6.47852V7.47852L360 7.47852V6.47852Z" fill="#6E7A86" />
                        </svg>
                  </span>
            </div>
      )
}

export default SectionTitle