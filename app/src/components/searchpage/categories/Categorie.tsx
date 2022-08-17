import React, { FC } from 'react'

interface CategorieProps {
  name: string
  id: string
  href: string
  icon: string
}

const Categorie: FC<CategorieProps> = ({ id, name, href, icon }) => {
  return (
    <div key={id} className="group rounded-lg  hover:bg-gray-ifitops cursor-pointer">
        <div className="w-full min-h-28 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden lg:h-44 lg:aspect-none">
          <img
            src={icon}
            alt="categorie icon"
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
    </div>
  )
}

export default Categorie