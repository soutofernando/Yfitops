import React, { FC } from 'react'

const incentives = [
    { alt: "image offline mode", title: "Offline mode.", subtitle: "Listen to music wherever you are.", img: "https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f" },
    { alt: "image no ads", title: "No ads.", subtitle: "Enjoy music, non-stop.", img: "https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137" },
    { alt: "image listen music", title: "Listen to what you want.", subtitle: "Even on mobile or tablet.", img: "https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67" },
    { alt: "image music phone", title: "Change music as much as you like.", subtitle: "Jump whenever you want.", img: "https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012" },
]

const Incentives: FC = ({ children }) => {
    return (

        <div className='text-center mt-20 mb-20'>
            <div className='block'>
                <div>
                    <span className='text-4xl font-yfitops font-extrabold'>
                        Why be Premium?
                    </span>
                </div>
                <div >
                    <ul className='md:flex justify-center mt-20 sm:px-48 md:px-6 px-24'>
                        {
                            incentives.map((incentive) => (
                                <li className='items-center text-center text-xl font-yfitops font-bold w-72'>
                                    <div className='flex justify-center'>
                                        <img src={incentive.img} className="rounded-full h-36" alt={incentive.alt} />
                                    </div>

                                    <div className='mt-10'>
                                        <span>{incentive.title}</span>
                                    </div>
                                    <div className='font-medium text-base mt-4'>
                                        <span>{incentive.subtitle}</span>
                                    </div>

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Incentives