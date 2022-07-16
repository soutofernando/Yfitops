import React, { FC } from 'react'

const ButtonFilled: FC = ({ children }) => {
    return (
        <button className="rounded-full bg-black border-black border-2 text-white font-semibold px-6 py-3 hover:px-7 hover:py-4 w-full">
            {children}
        </button>
    )
}

export default ButtonFilled