import { hero } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className="body-font">
            <div className="container mx-auto flex px-5 sm:px-5 md:px-20 pt-14 sm:pt-14 md:pt-20 py-10 sm:py-10 md:py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-16 md:mb-0 md:mx-8">
                    <h2 className='text-[32px] sm:text-[32px] md:text-4xl font-semibold text-neutral-800'>Hello, I am</h2>
                    <h1 className="text-[32px] sm:text-[32px] md:text-[48px] title-font font-semibold bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text my-0 md:mb-2">Hussain Haider Zaidi</h1>
                    <div className="font-semibold text-neutral-800 text-[32px] sm:text-[32px] md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                        <span className="font-semibold text-neutral-800 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                            <ul className="block animate-text-slide-2 text-left leading-tight [&_li]:block">
                                <li>Product Designer.</li>
                                <li>UX Designer.</li>
                            </ul>
                        </span></div>
                    <h5 className='text-neutral-700 font-medium text-lg sm:text-lg md:text-2xl mt-8 sm:mt-8 md:mt-10'>
                        <a href="https://gomotive.com/" target='_blank'>Previously at<span className='bg-gradient-to-r from-gradient-start to-gradient-end hover:from-[#011871] hover:to-[#5FC6FF] hover:border-b-[1px] hover:border-gradient-start text-transparent bg-clip-text ml-2 cursor-pointer'>Motive Technologies, Inc</span></a> </h5>
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