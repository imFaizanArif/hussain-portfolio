import { aboutHero, hero } from '@/assets'
import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
    return (
        <section className="body-font">
            <div className="container mx-auto flex px-5 sm:px-5 md:px-20 pb-0 sm:pb-0 md:pb-20 py-14 sm:py-14 md:py-20 md:flex-row flex-col items-center w-full">
                <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col items-start justify-between text-left mb-16 md:mb-0 md:mx-8">
                    <h3 className='text-[28px] font-semibold text-neutral-800 leading-10 mb-2 ml-0 sm:ml-0 md:ml-8'>Designing powerful digital <br />
                        experiences that solve complex <br />
                        user and business problems</h3>
                    <h6 className='font-normal text-lg leading-7 text-neutral-600 ml-0 sm:ml-0 md:ml-8'>Product Designer</h6>
                </div>
                <Image src={aboutHero} alt="hero"
                    sizes="100vw"
                    style={{
                        width: '192px',
                        height: '192px',
                    }}
                    width={500}
                    height={300} className="object-contain object-center rounded-md" />
            </div>
        </section>
    )
}

export default AboutHero