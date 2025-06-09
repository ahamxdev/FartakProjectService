import Link from 'next/link'
import React from 'react'

const TranslationCategory = () => {
      return (
            <div id='TranslationCategory' className='flex flex-col items-center gap-4 rounded-lg p-4'>
                  <span className='md:text-xl text-sm font-bold'>ترجمه پارافریز</span>
                  <Link href={"/"} className='bg-[#1D40D7] rounded-lg text-white text-sm font-normal py-2 px-8' >مشاهده</Link>
            </div>
      )
}

export default TranslationCategory