import React from 'react'
import { Link } from 'react-router-dom'

const heroHelpSuggestions = [
    { title: "HOW TO ENTER", link: "I can't reset a password" },
    { title: "PROBLEMS SOLUTION", link: "There's something wrong with my account" },
    { title: "HOW TO ENTER", link: "I don't remember my login informations" },
    { title: "HOW TO ENTER", link: "Help to login with Facebook" },
]

const HeroHelpSuggestions = () => {
    return (
        <div>
            <div className='text-center flex justify-center'>
                {heroHelpSuggestions.map((help) => (
                    <div>
                        {
                            help.title == "HOW TO ENTER" ? <div className='mr-6'>
                                <span className='text-gray-white text-sm'>
                                    HOW TO ENTER
                                </span>
                                <div className='w-48'>
                                    <Link className='hover:underline' to="/support">
                                        <span className='font-bold lg:text-xl text-md'>{help.link}</span>
                                    </Link>
                                </div>
                            </div> :
                                <div className='mr-6'>
                                    <span className='text-gray-white text-sm'>
                                        PROBLEMS SOLUTIONS
                                    </span>
                                    <div className='w-48'>
                                        <Link className='hover:underline' to="/support">
                                            <span className='font-bold lg:text-xl text-md'>{help.link}</span>
                                        </Link>
                                    </div>
                                </div>
                        }
                    </div>
                ))}

            </div>
        </div>
    )
}

export default HeroHelpSuggestions