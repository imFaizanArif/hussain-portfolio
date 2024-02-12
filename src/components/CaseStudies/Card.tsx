import { rightArrow } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Card = () => {
    return (
        <div className="w-full h-[606px]">
            <div className="">
                <div className='w-full h-[416px] bg-neutral-200 rounded-md'></div>
                <div className='my-6'>
                    <div className='flex space-x-2'>
                        <p className='bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md'>Fleet Management</p>
                        <p className='bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md'>Fleet Management</p>
                    </div>
                    <h4 className='my-4 text-neutral-800 font-semibold'>Your project title</h4>
                    <p className='text-base text-neutral-600'>Write a 1-2 lines explaining the project title here</p>
                </div>
                <a href="/" className='w-1/3 sm:w-1/3 md:w-1/2 lg:w-1/5 flex items-start justify-start font-semibold text-neutral-800 '><span className='pb-1.5 border-b-2 border-white hover:border-neutral-800'>Case Study</span> <Image src={rightArrow} alt="arrow-icon" width={22} height={22} className='ml-2' /> </a>
            </div>
        </div>
    )
}

export default Card