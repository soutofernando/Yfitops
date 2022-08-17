import React from 'react'

const navigationMenu = [
    { name: "Premium", link: "/premium" },
    { name: "Support", link: "/support" },
    { name: "Download", link: "/download" },
]

const NavigationMenuBtns = () => {
    return (
        <div className='flex'>
            {navigationMenu.map((link) => (
                <button key={link.name} onClick={() => window.open(link.link, "_blak")}>
                    <div className='ml-6'>
                        <span className='text-gray-white font-bold hover:text-white hover:transition-all hover:duration-300'>{link.name}</span>
                    </div>
                </button>
            ))}
        </div>

    )
}

export default NavigationMenuBtns