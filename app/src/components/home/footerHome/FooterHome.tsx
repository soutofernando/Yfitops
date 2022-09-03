import React from 'react'
import { Link } from 'react-router-dom'
import LinksCommunities from './LinksCommunities'
import LinksCompany from './LinksCompany'
import LinksUseful from './LinksUseful'
import OptionsPrivacy from './OptionsPrivacy'


const FooterHome = () => {
    return (
        <div>
            <footer className="p-4 bg-black-gray-2 mt-28 mb-16">
                <div className="lg:flex md:justify-start py-4 lg:px-24 md:20 ">
                    <div className="xl:grid grid-cols-3 gap-3 sm:gap-3 sm:grid-cols-3">
                        <div>
                            <LinksCompany />
                        </div>
                        <div>
                            <LinksCommunities />
                        </div>
                        <div>
                            <LinksUseful />
                        </div>
                    </div>

                </div>
                <div className="sm:flex  justify-between sm:items-center px-20">
                    <OptionsPrivacy />
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className='mt-4 sm:mt-0'>
                        <div className='flex  items-center'>
                            <span className='text-gray-400 text-sm font-medium'>© 2022 Yfitops AB</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterHome