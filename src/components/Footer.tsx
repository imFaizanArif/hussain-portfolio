import React from 'react'
import { hero } from '@/assets'
const Footer = () => {
    return (
        <footer className="text-neutral-800 body-font">
            <div className="container px-5 sm:px-5 md:px-20 pt-12  flex flex-wrap mx-auto items-center">
                <div className="md:mx-8 flex md:flex-nowrap flex-wrap justify-center items-end md:justify-between w-full px-">
                    <h2 className='text-neutral-800 font-semibold text-[28px] md:text-4xl'>
                        Got an idea?<br />
                        <span className='bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text'>

                            Let’s build something today!
                        </span>
                    </h2>
                    <button className="inline-flex text-neutral-50 bg-neutral-800 border-0 py-[14px] px-6 focus:outline-none hover:bg-neutral-900 rounded mt-6 md:my-0">Get in touch</button>
                </div>
            </div>
            <hr className="h-px mt-9 bg-neutral-300 border-0 w-[78%] mx-auto hidden md:block" />
            <div className="container mx-auto py-8 mb-5 sm:mb-5 md:mb-0 px-20 flex flex-wrap flex-col sm:flex-row items-center justify-center">
                <nav className="md:mx-8 md:mr-auto hidden md:flex flex-wrap items-center text-base justify-center font-semibold space-x-5">
                    <a href={`/`} target='_blank' className="border-b-2 border-white hover:border-gradient-end hover:cursor-pointer hover:text-neutral-800">Email</a>
                    <a href={`https://linkedin/in/hussain`} target='_blank' className="border-b-2 border-white hover:border-gradient-end hover:cursor-pointer hover:text-neutral-800">LinkedIn</a>
                </nav>
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2023-24 Hussain Haider Portfolio</p>
            </div>
        </footer>
    )
}

export default Footer