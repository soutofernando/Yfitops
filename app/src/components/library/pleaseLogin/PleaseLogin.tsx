import { ExclamationCircleIcon } from '@heroicons/react/outline'
import React from 'react'

const PleaseLogin = () => {
    return (
        <div className='flex items-center text-white text-2xl font-bold'>
            <ExclamationCircleIcon  className='w-14 h-14 mr-2'/>
            <h1>PLEASE LOGIN</h1>
        </div>
    )
}

export default PleaseLogin