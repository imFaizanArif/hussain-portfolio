"use client";
import { about1, about2, about3, about4 } from '@/assets'
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const AboutHighlights = () => {
    return (
        <section>
            <div className="container mx-auto flex px-5 sm:px-5 md:px-20 pb-0 sm:pb-0 md:pb-20 py-14 sm:py-14 md:py-20 md:flex-row flex-col items-start">
                <div className="w-full mx-auto">
                    <h3 className='text-[28px] font-semibold text-neutral-800 leading-10 mb-6 ml-0 sm:ml-0 md:ml-8'>About</h3>
                    <div className='hidden sm:hidden md:flex items-end justify-between'>
                        <Image src={about1} alt="about" className='mx-auto w-full sm:w-full md:w-auto' />
                        <Image src={about2} alt="about" className='mx-auto w-full sm:w-full md:w-auto' />
                        <Image src={about3} alt="about" className='mx-auto w-full sm:w-full md:w-auto' />
                        <Image src={about4} alt="about" className='mx-auto w-full sm:w-full md:w-auto' />
                    </div>
                    <Carousel
                        additionalTransfrom={0}
                        arrows={false}
                        // autoPlay
                        // autoPlaySpeed={1000}
                        centerMode={false}
                        className="ml-0 sm:ml-0 md:ml-2 block sm:block md:hidden"
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <Image src={about1} alt="about" className='mx-auto w-full sm:w-full md:w-auto' />
                        <Image src={about2} alt="about" className='mx-auto w-full sm:w-full md:w-auto' />
                        <Image src={about3} alt="about" className='mx-auto w-full sm:w-full md:w-auto' />
                        <Image src={about4} alt="about" className='mx-auto md:w-auto' />
                    </Carousel>
                </div>

            </div>
        </section>
    )
}

export default AboutHighlights