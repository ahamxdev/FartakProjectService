import React from 'react'
import Image from 'next/image'

const ChooseTranslationLanguageBox = ({countryName , countryImage}) => {
      return (
            <div className='flex items-center gap-6 bg-[#EEF5FF] rounded-lg px-2 py-6' id='ChooseTranslationLanguageBox'>
                  <div className="relative lg:w-[72px] w-[50px] lg:h-[36px] h-[20px]">
                        <Image src={"/images/image.png"} fill
                              sizes="(max-width: 768px) 100vw, auto"
                              className="w-full h-full" alt='logo' />
                  </div>
                  <span className='md:text-2xl text-lg text-[#1450A3] font-bold'>ترجمه فرانسوی</span>
            </div>
      )
}

export default ChooseTranslationLanguageBox