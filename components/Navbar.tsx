import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16'>
            <Link href="/" className='flex justify-center items-center'>
                <Image 
                    src="/carlogo.svg"
                    alt='Car Cruise Logo'
                    width={80}
                    height={18}
                    className='object-contain'
                />
                <h1 className='font-extrabold text-xl'>CarCruise</h1>
            </Link>

            <CustomButton 
                title= "Sign In"
                btnType= "button"
                containerStyles='text-green-700 rounded-full bg-white min-w-[130px]'
            />


        </nav>
    </header>
  )
}

export default Navbar