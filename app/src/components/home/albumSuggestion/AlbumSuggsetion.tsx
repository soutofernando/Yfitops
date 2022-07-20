const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_large.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Some hits of Brazil',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_large.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_large.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_large.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Black',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_large.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Black',
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_large.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Black',
  },
]

const AlbumSuggestion = () => {
  return (

    <div className="max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-6">
        {products.map((product) => (
          <div key={product.id} className="group rounded-lg p-4 bg-gray-blackgray hover:bg-gray-ifitops cursor-pointer">
            <div className="w-full min-h-28 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-36 lg:aspect-none">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  <a href={product.href}>
                    <span aria-hidden="true" className="inset-0" />
                    <span className="font-bold text-lg">{product.name}</span>
                  </a>
                </h3>
                <p className="mt-1 text-sm text-white">{product.color}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default AlbumSuggestion