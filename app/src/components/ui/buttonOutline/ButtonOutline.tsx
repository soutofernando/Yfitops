import React, { FC } from 'react'

interface ButtonOutline {
    color?: string | undefined
}

const ButtonOutline: FC<ButtonOutline> = ({ children, color }) => {
    return (
        <div>
            <button className="rounded-full border-black border-2 text-black font-semibold px-6 py-3 hover:bg-white hover:px-7 hover:py-4">
                {children}
            </button>
        </div>
    )
}

export default ButtonOutline