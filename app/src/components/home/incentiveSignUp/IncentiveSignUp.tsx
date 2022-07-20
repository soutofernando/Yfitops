import React from 'react'
import { Link } from 'react-router-dom'
import ButtonFilled from '../../ui/buttonFilled/ButtonFilled'

const IncentiveSignUp = () => {
    return (
        <Link to="/signup">
            <div className="bg-gradient-to-r to-blue-500 from-pink-600 h-20 md:h-16 text-white px-10 py-2 md:flex  md:justify-between items-center">
                <div>
                    <div>
                        <span className='text-sm'>PREVIEW OF YFITOPS</span>
                    </div>
                    <div>
                        <span className='font-medium'>Sign up to get unlimited songs and podcasts with occasional ads. No credit cart needed.</span>
                    </div>
                </div>
                <div>
                    <button className='lg:flex hidden px-8 py-3 bg-white rounded-full text-black font-bold hover:bg-gray-white hover:text-white hover:transition-all hover:duration-300'>Sign up free</button>
                </div>
            </div>
        </Link>
    )
}

export default IncentiveSignUp