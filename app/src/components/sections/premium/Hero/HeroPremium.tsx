import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import ButtonFilled from '~/src/components/ui/buttonFilled/ButtonFilled'
import ButtonOutline from '~/src/components/ui/buttonOutline/ButtonOutline'
import UIHero from '../../../ui/hero/Hero'


interface HeroProps {
    title: string
    subtitle: string

}

const HeroPremium: FC<HeroProps> = ({ title, subtitle }) => {
    return (

        <UIHero>
            <div className='bg-pink-yfitops lg:h-88 py-20 lg:px-48 md:px-22 sm:px-12 px-4 block'>
                <div>
                    <span className='font-extrabold text-4xl  font-yfitops'>
                        {title}
                    </span>
                </div>
                <div className='mt-10'>
                    <span className='text-2xl'>
                        {subtitle}
                    </span>
                </div>

                <div className='flex mt-10 h-24'>
                    <div className='h-1 w-40'>
                        <ButtonFilled>GET STARTED</ButtonFilled>
                    </div>
                    <div className='ml-2'>
                        <ButtonOutline>SEE PLANS</ButtonOutline>
                    </div>
                </div>
                <div className=' text-xs'>
                    <span><Link className='underline font-normal' to="/">Subject to Terms and Conditions.</Link> The 2 months free is not available for users who have already tried Premium.</span>
                </div>
            </div>
        </UIHero>
    )
}

export default HeroPremium