import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='text-white'>
      <div className='bg-black p-4 md:p-20'>

        {/* image */}
        <div>
          <Image src="/3.png" alt="" height={200} width={200}
          className='mb-6' />
        </div>
        {/* remaining */}
        <div className='p-4 md:p-0'>
        <div className='md:flex justify-between space-y-12 font-extralight'>
          <div className='md:p-2 space-y-4'>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>Location</h2>
              <p className='font-light text-lg'>Jinnah Avenue Karachi</p>
            </div>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>Email</h2>
              <p className='font-light text-lg'>rodemlimited@gmail.com</p>
            </div>
          </div>
          <div>
            <h2 className='text-lg font-medium mb-4'>Stay Connected</h2>
            <ul className='space-y-5'>
              <li><Link href="#">linkedIn</Link></li>
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">Instagram</Link></li>
            </ul>
          </div>

          <div>
            <h2 className='text-lg font-medium mb-4'>Navigate</h2>
            <ul className='space-y-3'>
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Projects</Link></li>
              <li><Link href="#">Reviews</Link></li>
              <li><Link href="#">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h2 className='mb-2 text-medium font-normal'>&quot;Get our Latest insight&quot;</h2>
            <div className='flex p-1 rounded-full bg-white justify-between items-center '>
              <input 
              type="text"
              placeholder="  example@email.com"
              className='rounded-full h-10 border-none w-48  text-black' />
              <button className='rounded-full h-12 p-2 md:w-28 font-medium bg-gray-800'>Subscribe</button>
            </div>
          </div>

        </div>
        </div>
        
      </div>


    </div>
  )
}

export default Footer