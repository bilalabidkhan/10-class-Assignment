import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-slate-400 border border-black'>
      <div className='flex justify-center items-center gap-[30px] w-full py-4 px-2'>
        <div>
          <h1 className='font-normal'>Data Fatching</h1>
        </div>
        <Link href={"/"} className='font-normal'>Home</Link>
        <Link href={"/clientside"} className='font-normal'>Client Side</Link>
        <Link href={"/serverside"} className='font-normal'>Server Side</Link>
      </div>
    </div>
  )
}

export default Header
