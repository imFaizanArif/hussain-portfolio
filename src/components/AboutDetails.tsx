import React from 'react'

const AboutDetails = () => {
    return (
        <section>
            <div className="container mx-auto flex px-5 sm:px-5 md:px-20 py-10 sm:py-10 md:py-20 md:flex-row flex-col items-center">
                <div className="w-full sm:w-full md:w-1/2 mx-auto">
                    <h3 className='text-center text-[28px] font-semibold text-neutral-800 leading-10 mb-7'>About</h3>
                    <p className='mb-8 text-neutral-600 text-base font-normal leading-6'>I am James, a self-taught product designer based in Austria. Four years ago, in my first year of university, I co-founded an online marketplace and created its website from scratch despite.
                        <br />
                        <br />
                        Having no prior knowledge of web development. I built website, attracted hundreds of visitors, enjoyed small wins, big failures and almost everyting in between.
                        <br />
                        <br />
                        That inspired me to innovate my mind and cemented my fascination with technology and design. One and a half year later, I slowly transitioned to designing websites and mobile apps just for fun which in no time, turned into an unexpected career.</p>
                    <div className='flex flex-wrap items-center justify-around sm:justify-around md:justify-between'>
                        <div>
                            <p className='text-base bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text mb-2 font-medium leading-5 tracking-[0.32px]'>WORKED WITH</p>
                            <h5 className='text-neutral-800 font-semibold text-[22px] leading-8'>12 startups</h5>
                        </div>
                        <div>
                            <p className='text-base bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text mb-2 font-medium leading-5 tracking-[0.32px]'>EXPERINCE</p>
                            <h5 className='text-neutral-800 font-semibold text-[22px] leading-8'>5+ years </h5>
                        </div>
                        <div className='mt-6 sm:mt-6 md:mt-0'>
                            <p className='text-base bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text mb-2 font-medium leading-5 tracking-[0.32px]'>COMPLETED PROJECTS</p>
                            <h5 className='text-neutral-800 font-semibold text-[22px] leading-8'>20+ projects</h5>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutDetails