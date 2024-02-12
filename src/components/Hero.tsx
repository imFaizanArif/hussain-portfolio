import { hero } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className="body-font">
            <div className="container mx-auto flex px-5 sm:px-5 md:px-20 pb-0 sm:pb-0 md:pb-20 py-14 sm:py-14 md:py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-16 md:mb-0">
                    <h2 className='font-semibold text-neutral-800'>Hello, I am</h2>
                    <h1 className="title-font font-semibold bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text my-4 sm:my-4 md:my-0">Hussain Haider Zaidi</h1>
                    <h2 className='font-semibold text-neutral-800'>Product Designer</h2>
                    <h5 className='text-neutral-700 font-semibold text-xl sm:text-xl md:text-2xl mt-10'>Previously at <span className='bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text'>Motive Technologies, Inc</span></h5>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image src={hero} alt="hero"
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={500}
                        height={300} className="w/" />
                </div>
            </div>
        </section>
    )
}

export default Hero