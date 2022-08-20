import React, { FC, useContext } from "react"
import { SearchContext } from "~/src/contexts/search/SearchProvider"

interface Props {
  name: string
  time: number
  image: string
  date: string
}

const AlbumSuggestion: FC<Props> = ({ name, date, image, time }) => {

  return (
    <div className='p-6 bg-black-gray rounded-md hover:bg-black-gray-hover text-white w-48 h-64'>
      <div>
        <img src={image} className="h-36 rounded-md" />
      </div>
      <div className='mt-4'>
        <p className='text-white w-full text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis'>{name}</p>
      </div>
      <div className='mt-1 pb-10'>
        <div className='text-gray-white font-semibold flex'>
          <span className='mr-1'>
            {date.substring(0, 4)}
          </span>
          <div>•</div>
          <p className='ml-1 overflow-hidden whitespace-nowrap text-ellipsis'>
            {(time / 60000).toFixed(0) } Min
          </p>
        </div>
      </div>
    </div>
  )
}

export default AlbumSuggestion