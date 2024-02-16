import React from 'react'
import Card from './Card'

const CaseStudies = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 sm:px-5 md:px-20 py-10 sm:py-10 md:py-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-8 sm:mb-8 md:mb-12 md:mx-4">
                    <h3 className="text-2xl sm:text-2xl md:text-[32px] font-semibold title-font mb-2 text-neutral-800">Recent case studies</h3>
                    <p className="mx-auto text-neutral-600 text-base">Over the past two years</p>
                </div>
                <div className="grid grid-cols-1 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 gap-y-16 sm:gap-y-16 md:gap-y-14 gap-8 md:mx-8">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default CaseStudies