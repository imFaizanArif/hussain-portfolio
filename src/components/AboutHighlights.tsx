"use client";
import { about1, about2, about3, about4, h1, h2, h3, h4, hero } from '@/assets'
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const AboutHighlights = () => {
    return (
        <section>
            <div className="container mx-auto flex px-5 sm:px-5 md:px-20 pb-0 sm:pb-0 md:pb-20 py-10 sm:py-10  md:py-20 md:flex-row flex-col items-start">
                <div className="w-full mx-auto">
                    <h3 className='text-[28px] font-semibold text-neutral-800 leading-10 mb-6 ml-0 sm:ml-0 md:ml-16'>About</h3>
                    {/* <div className='hidden sm:hidden md:flex items-end justify-between'>
                        <Image src={about1} alt="about" className='mx-auto w-full sm:w-full md:w-auto' />
                        <Image src={about2} alt="about" className='mx-auto w-full sm:w-full md:w-auto' />
                        <Image src={about3} alt="about" className='mx-auto w-full sm:w-full md:w-auto' />
                        <Image src={about4} alt="about" className='mx-auto w-full sm:w-full md:w-auto' />
                    </div> */}
                    <Carousel
                        additionalTransfrom={0}
                        arrows={false}
                        // autoPlay
                        // autoPlaySpeed={1000}
                        centerMode={false}
                        className="ml-0 sm:ml-0 md:ml-8  w-full flex items-end"
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
                            superLargeDesktop: {
                                // the naming can be any, depends on you.
                                breakpoint: { max: 4000, min: 3000 },
                                items: 4
                            },
                            desktop: {
                                breakpoint: { max: 3000, min: 1024 },
                                items: 4
                            },
                            laptop: {
                                breakpoint: { max: 1024, min: 768 },
                                items: 4
                            },
                            tablet: {
                                breakpoint: { max: 768, min: 640 },
                                items: 2
                            },
                            mobile: {
                                breakpoint: {
                                    max: 640,
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
                        <Image src={h1} alt="about" className='p-0 sm:p-0 md:p-4 pr-0 sm:pr-0 md:pr-3 rounded-md sm:rounded-md md:rounded-3xl w-full sm:w-full md:w-auto' />
                        <Image src={h2} alt="about" className='p-0 sm:p-0 md:p-4 pr-0 sm:pr-0 md:pr-3 rounded-md sm:rounded-md md:rounded-3xl w-full sm:w-full md:w-auto' />
                        <Image src={h3} alt="about" className='p-0 sm:p-0 md:p-4 pr-0 sm:pr-0 md:pr-3 rounded-md sm:rounded-md md:rounded-3xl w-full sm:w-full md:w-auto' />
                        <Image src={h4} alt="about" className='p-0 sm:p-0 md:p-4 pr-0 sm:pr-0 md:pr-3 rounded-md sm:rounded-md md:rounded-3xl md:w-auto' />
                    </Carousel>
                </div>

            </div>
        </section>
    )
}

export default AboutHighlights