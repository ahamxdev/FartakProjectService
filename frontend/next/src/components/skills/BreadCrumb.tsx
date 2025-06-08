import Link from 'next/link'
import React from 'react'

interface BreadCrumbProps {
  items: string[]
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  return (
    <div className='w-[90%] mx-auto my-6 flex items-center gap-1.5'>
      {items.map((item, index) => (
        <Link
          key={index}
          className='flex items-center gap-1.5 md:gap-3 text-xs md:text-lg font-normal text-[#8C8C8C] last:text-[#000]'
          href="/"
        >
          {item}
          {index < items.length - 1 && (
            <svg width="6" height="13" viewBox="0 0 6 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 11.4785L5 6.47852L1 1.47851"
                stroke="#8C8C8C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Link>
      ))}
    </div>
  )
}

export default BreadCrumb
