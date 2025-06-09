import React from 'react'

const BgDark = ({ setIsSomeThingOpen }: { setIsSomeThingOpen: (val: boolean) => void }) => {
      return (
            <div onClick={() => setIsSomeThingOpen(false)} className='w-full cursor-pointer h-screen fixed top-0 left-0 z-20 bg-black opacity-50'></div>
      )
}

export default BgDark