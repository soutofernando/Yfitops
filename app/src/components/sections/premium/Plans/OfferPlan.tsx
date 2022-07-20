import { CheckIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import ButtonFilled from '~/src/components/ui/buttonFilled/ButtonFilled'

const plansPremium = [
    {
        name: "Single", price: 19.90, numberAccounts: 1, onetimePaymente: true,
        freeMonth: "Sign up and get 2 months free", benefits1: "Listen to music without ads",
        benefits2: "Listen anywhere — even offline", benefits3: "Choose the song you want to hear",
        benefits4: "Take a prepaid plan or a subscription"
    },
    {
        name: "Duo", price: 24.90, numberAccounts: 2, onetimePaymente: true,
        freeMonth: "1 month free when subscribing", benefits1: "2 Premium accounts for a couple who live together",
        benefits2: "Listen ad-free, offline and on demand", benefits3: "Take a prepaid plan or a subscription",
    },
    {
        name: "Family", price: 34.90, numberAccounts: 6, onetimePaymente: true,
        freeMonth: "1 month free when subscribing", benefits1: "6 Premium accounts for family members who live at the same address",
        benefits2: "Block songs with explicit content", benefits3: "Listen ad-free, offline and on demand",
        benefits4: "Spotify Kids: a separate app made especially for kids", benefits5: "Take a prepaid plan or a subscription"
    },
    {
        name: "University", price: 9.90, numberAccounts: 1, onetimePaymente: false,
        freeMonth: "1 month free when subscribing", benefits1: "Special discount for university students who are entitled to the offer",
        benefits2: "Listen to music without ads", benefits3: "Listen anywhere — even offline",
        benefits4: "Choose the song you want to hear"
    },
]

const OfferPlan = () => {
    return (
        <div className='pb-20'>
            <ul className='xl:flex xl:px-0 px-28 lg:px-112 md:px-96 sm:px-56 justify-center'>
                {plansPremium.map((plan) => (
                    <div key={plan.name}>
                        <div className='text-center w-72 shadow-2xl rounded-xl border-2 mr-4 bg-white h-128 mt-4'>
                            <div className='p-6'>
                                <div className='py-2 text-left'>
                                    <span className='bg-blue-ocean font-medium text-white p-1 rounded-md text-sm'>{plan.freeMonth}</span>
                                </div>
                                <div className='py-2'>
                                    {plan.onetimePaymente ?
                                        <div className='text-left'>
                                            <span className='border-2 border-blue-ocean p-1 rounded-md text-blue-ocean font-bold'>One-time payment available</span>
                                        </div> : ""}
                                </div>
                                <div className='text-left'>
                                    <span className='font-yfitops font-extrabold text-xl'>{plan.name}</span>
                                </div>
                                <div className='text-left font-medium'>
                                    <span>R$ {plan.price}/ month after the offer period</span>
                                </div>
                                <div className='py-4'>
                                    <hr className='border-gray-600' />
                                </div>
                                <div className='block'>
                                    <div className='flex '>
                                        <div className='w-6 h-6'>
                                            <CheckIcon className='w-6 h-6' />
                                        </div>
                                        <div className='text-left'>
                                            <span>
                                                {plan.benefits1}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-6 h-6'>
                                            <CheckIcon className='w-6 h-6' />
                                        </div>
                                        <div className='text-left'>
                                            <span>
                                                {plan.benefits2}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <div className='w-6 h-6'>
                                        <CheckIcon className='w-6 h-6' />
                                    </div>
                                    <div className='text-left'>
                                        <span>
                                            {plan.benefits3}
                                        </span>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <div className='w-6 h-6'>
                                        {plan.benefits4 ? <CheckIcon className='w-6 h-6' /> : ''}
                                    </div>
                                    <div className='text-left'>
                                        <span>
                                            {plan.benefits4}
                                        </span>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <div className='w-6 h-6'>
                                        {plan.benefits5 ? <CheckIcon className='w-6 h-6' /> : ''}
                                    </div>
                                    <div className='text-left'>
                                        <span>
                                            {plan.benefits5}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4 w-full h-16'>
                                <ButtonFilled>GET STARTED</ButtonFilled>
                            </div>
                            <div className='p-4 text-left text-xs'>
                                <span>
                                    <Link className='underline' to="/premium">Subject to Terms and Conditions. </Link>The free month is not available to users who have already tried Premium.
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default OfferPlan