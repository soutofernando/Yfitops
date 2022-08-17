import React, { FC } from 'react'

import UIHero from "../../ui/hero/Hero"
import HeroImg from "../../../../static/heroSupport/search-desktop.webp"
import Hero from '../../ui/hero/Hero'
import SearchSupport from '../searchSupport/SearchSupport'
import HeroHelpSuggestions from '../heroHelpSuggestions/HeroHelpSuggestions'

interface HeroProps {
    title: string

}

const HeroSupport: FC<HeroProps> = ({ title }) => {
    return (
        <UIHero>
            <div className="bg-[url('https://i.pinimg.com/736x/5e/e7/61/5ee76180e98f26c27be7752ad70a2f09.jpg')] w-full h-104 text-white text-center">
                <div className='xl:px-96 lg:px-72 md:px-56 sm:px-40 px-20'>
                    <div className='pt-20'>
                        <h1 className='font-bold xl:text-6xl lg:text-4xl text-2xl '>{title}</h1>
                    </div>
                    <div className='w-full mt-10'>
                        <SearchSupport />
                    </div>
                    <div className='mt-16'>
                        <HeroHelpSuggestions />
                    </div>
                </div>
            </div>
        </UIHero>
    )
}

export default HeroSupport