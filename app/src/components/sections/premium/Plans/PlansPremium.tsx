import React from 'react'
import OfferPlan from './OfferPlan'

const paymentForms = [
    { alt: "visa icon", img: "https://content-tooling.spotifycdn.com/images/52f004ea-a49a-420b-8dca-14f5304ff4bf_visa.svg" },
    { alt: "mastercard icon", img: "https://content-tooling.spotifycdn.com/images/3a865441-c6d4-4f92-a4be-6c96c0e96d1f_mastercard.svg" },
    { alt: "amex icon", img: "https://content-tooling.spotifycdn.com/images/d4dd3e5b-f7d9-4cd0-80f1-b65f19c5e55c_amex.svg" },
    { alt: "elo icon", img: "https://content-tooling.spotifycdn.com/images/0a5cdc06-7024-4d04-999f-18e8b225b581_elo.svg" },
    { alt: "hipercard icon", img: "https://content-tooling.spotifycdn.com/images/52f004ea-a49a-420b-8dca-14f5304ff4bf_visa.svg" },
]


const PlansPremium = () => {
    return (
        <div className=" bg-white-gray mt-10">
            <div>
                <div className='text-center pt-20'>
                    <span className='font-extrabold font-yfitops text-4xl'>Choose your Premium plan</span>
                </div>
                <div className='text-center mt-4'>
                    <span className="font-medium">Listen without limits on your phone, speaker and other devices.</span>
                </div>
                <div>
                    <ul className='flex justify-center mt-4'>
                        {paymentForms.map((form) =>
                        (
                            <li className='mr-2'>
                                <div>
                                    <img className='w-8 h-8' src={form.img} alt={form.alt} />
                                </div>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div className='mt-6'>
                    <OfferPlan />

                </div>
            </div >
        </div >
    )
}

export default PlansPremium