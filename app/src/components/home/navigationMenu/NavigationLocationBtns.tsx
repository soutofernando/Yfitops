import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'


const NavigationLocationBtns = () => {
    return (
        <div className="flex-1 flex  items-center lg:justify-start justify-center sm:items-stretch ">
            <div>
                <button name='back_usenavigation' className='bg-black opacity-100 p-1'>
                    <ChevronLeftIcon className='w-7 h-7 text-gray-white' />
                </button>
            </div>
            <div className='ml-4'>
                <button name='next_usenavigation' className='opacity-100 p-1'>
                    <ChevronRightIcon className='w-7 h-7 text-gray-white' />
                </button>
            </div>
        </div>
    )
}

export default NavigationLocationBtns