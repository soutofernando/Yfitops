import React, { FC, } from "react"


interface Props {
  name: string
  time: number
  image: string
  date: string
  href: string
}

const TrackSuggestion: FC<Props> = ({ name, date, image, time, href }) => {

  return (
    <a href={href}>
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
              {(time / 60000).toFixed(0)} Min
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default TrackSuggestion