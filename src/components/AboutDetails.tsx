import React from 'react'

const AboutDetails = () => {
    return (
        <section className="body-font">
            <div className="container mx-auto flex px-5 sm:px-5 md:px-20 pb-0 sm:pb-0 md:pb-20 py-14 sm:py-14 md:py-20 md:flex-row flex-col items-center">
                <div className="w-full sm:w-full md:w-1/2 mx-auto">
                    <h3 className='font-semibold text-neutral-800'>About</h3>
                    <p className='my-8 text-neutral-600 text-base'>I am James, a self-taught product designer based in Austria. Four years ago, in my first year of university, I co-founded an online marketplace and created its website from scratch despite.
                        <br />
                        <br />
                        Having no prior knowledge of web development. I built website, attracted hundreds of visitors, enjoyed small wins, big failures and almost everyting in between.
                        <br />
                        <br />
                        That inspired me to innovate my mind and cemented my fascination with technology and design. One and a half year later, I slowly transitioned to designing websites and mobile apps just for fun which in no time, turned into an unexpected career.</p>
                    <div className='flex flex-wrap items-center justify-between'>
                        <div>
                            <p className='text-base bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text'>WORKED WITH</p>
                            <h5 className='text-neutral-800 font-semibold'>12 startups</h5>
                        </div>
                        <div>
                            <p className='text-base bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text'>EXPERINCE</p>
                            <h5 className='text-neutral-800 font-semibold'>5+ years </h5>
                        </div>
                        <div>
                            <p className='text-base bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text'>COMPLETED PROJECTS</p>
                            <h5 className='text-neutral-800 font-semibold'>20+ projects</h5>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutDetails