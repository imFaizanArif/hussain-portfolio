import { ham, logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className="text-neutral-800 body-font">
            <div className="container mx-auto flex flex-wrap px-5 sm:px-5 md:px-20 py-5 pb-0 sm:pb-0 md:pb-5 flex-row items-start sm:items-start md:items-center">
                <a className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <Image src={logo} alt="logo" width={50} height={50} />
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 hidden md:flex flex-wrap items-center text-base justify-center font-semibold space-x-5">
                    <Link href={`/`}> <p className="border-b-2 border-white hover:border-gradient-end hover:cursor-pointer hover:text-neutral-800">Home</p></Link>
                    <Link href={`/about`}><p className="border-b-2 border-white hover:border-gradient-end hover:cursor-pointer hover:text-neutral-800">About</p></Link>
                    <Link href={`/projects`}><p className="border-b-2 border-white hover:border-gradient-end hover:cursor-pointer hover:text-neutral-800">Projects</p></Link>
                    <Link href={`/resume`}><p className="border-b-2 border-white hover:border-gradient-end hover:cursor-pointer hover:text-neutral-800">Resume</p></Link>
                </nav>
                <div className='ml-auto cursor-pointer inline-block md:hidden'>
                    <Image src={ham} alt="arrow-icon" width={22} height={22} className='my-2' />
                    <Image src={ham} alt="arrow-icon" width={22} height={22} className='m' />
                </div>
            </div>
        </header >
    )
}

export default Navbar