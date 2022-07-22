import React from 'react'

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-HyVJhp4EnMWSvSYZEro5_TvtrJTPqoTQw&usqp=CAU',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'Some hits of Brazil',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAUExRj4hyDfvburxMhdJwZz8ADI3sXD5fg&usqp=CAU',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlBge6NUjQx5Yn3g5nsheSKdRSi6ABdBp-A&usqp=CAU',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5VaHb2Cd7ARaEqxgH-zDkZCH3N8w3Z4eug&usqp=CAU',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'Black',
    },
    {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLheYtoZL6Tb6D46rVJaM8OdRtZMnaTG4CXw&usqp=CAU',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'Black',
    },
    {
      id: 6,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1oAVnYU7kx4XedFq9hhsuKXM6xpKAZe98g&usqp=CAU',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'Black',
    },
  ]

const PossibleAlbums = () => {
    return (
        <div className="max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-6">
                {products.map((product) => (
                    <div key={product.id} className="group rounded-lg  hover:bg-gray-ifitops cursor-pointer">
                        <div className="w-full min-h-28 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden lg:h-44 lg:aspect-none">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PossibleAlbums