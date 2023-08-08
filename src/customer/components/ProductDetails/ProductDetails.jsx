import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Rating from '@mui/material/Rating';
import { Button, Grid, Box, LinearProgress } from '@mui/material';
import ProductReviewCard from './ProductReviewCard';
import { computer_parts } from '../../../Data/computer_parts';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://m.media-amazon.com/images/I/81Q-hxowAqL._SX679_.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://m.media-amazon.com/images/I/819fBNepfoL._SX679_.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://m.media-amazon.com/images/I/913yADsqDxL._SX679_.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://m.media-amazon.com/images/I/913yADsqDxL._SX679_.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: '1', inStock: true },
    { name: '2', inStock: true },
    { name: '3', inStock: true },
    { name: '4', inStock: true },

  ],
  description:
    'AMD AM4 Socket and PCIe 4. 0: The perfect pairing for 3rd Gen AMD Ryzen CPUs',
  highlights: [
    'AMD AM4 Socket and PCIe 4. 0: The perfect pairing for 3rd Gen AMD Ryzen CPUs',
    'Robust Power Design: 12+2 DrMOS power stages with high-quality alloy chokes and durable capacitors provide reliable power for the last AMD high-count-core CPUs',
    'Optimized Thermal Solution: Fanless VRM and chipset heatsinks with ASUS Stack Cool 3+ design keep your system running reliably under heavy load by enhancing passive cooling capacity for critical onboard components.',
    'High-performance Gaming Networking: 2. 5 Gb LAN with ASUS LANGuard; Best Gaming Connectivity: Supports HDMI 2. 1(4K@60HZ) and DisplayPort 1. 2 output, featuring dual M. 2 slots (NVMe SSD)—one with PCIe 4. 0 x4 connectivity, USB 3. 2 Gen 2 Type-C port and Thunderbolt 3 header',
    'Graphics Card Interface: Pci E',

  ],
  details:
    'ASUS B550 ROG Strix B550-F Gaming AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
<section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>

        {/* Image gallery */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-wrap space-x-5 justify-center">
            { product.images.map((item)=> <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>)}
            
          </div>
          
        </div>

        {/* Product info */}
        <div className="text-start lg:col-span-1 maxt-auto max-w-2x1 px-4 pb-16 sm:px-6 lg:max-w-7x1 lg:px-8 lg:pb-24 ">
          <div className="lg:col-span-2 ">
            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">ASUS</h1>
            <h1 className='text-lg lg:text-xl text-gray-900 opacity-70 pt-1'>ASUS ROG Strix B550-F Gaming Motherboard</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <div className='flex space-x-5 items-center text-lg lg-text-x1 text-gray-900 mt-6'>
              
              <p className='font-semibold'>$7000</p>
              <p className='opacity-50 line-through'>13000</p>
              <p className='text-green-600 font-semiboldf'>53% off</p>

            </div>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center space-x-3">
                <Rating name="read-only" value={5.5} readOnly />
                <p className='opacity-50 text-sm'>5654 Ratings</p>
                <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>3870 Reviews</p>
              </div>
            </div>

            <form className="mt-10">
              

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <Button variant="contained" sx={{px:"2rem",py:"1rem", bgcolor:"#9155fd"}}>
                Add To Cart
              </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
</section>
    {/* ratings and reviews */}
    <section className='text-start'>
      <h1 className='font-semibold text-lg pb-4'>Recent Reviews & Ratings</h1>
      <div className='border p-5 '>
        <Grid container spacing={7}>
         <Grid item xs={7}>
          <div className='space-y-5'>
            { [1,1,1,1].map((item)=> <ProductReviewCard/>)}
          </div>
         </Grid>

         <Grid item xs={5}>
          <h1 className='text-xl font-semibold pb-2'>Product Ratings</h1>
          <div className='flex items-center space-x-3'>
            <Rating value={4.6} precision={.5} readOnly/>
            <p className='opacity-60'>344530 Ratings</p>
          </div>

          <Box className="mt-5 space-y-4 space-x-auto">

            <Grid container alignItems="center" gap={2}>
              <Grid item xs={2}>
                <p>Excellent</p>
              </Grid>
              <Grid item xs={7}>
                <LinearProgress sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} variant='determinate' value={80} color='success'/>
              </Grid>
            </Grid>

            <Grid container alignItems="center" gap={2}>
              <Grid item xs={2}>
                <p>Good</p>
              </Grid>
              <Grid item xs={7}>
                <LinearProgress sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} variant='determinate' value={55} color='success'/>
              </Grid>
            </Grid><Grid container alignItems="center" gap={2}>
              <Grid item xs={2}>
                <p>Average</p>
              </Grid>
              <Grid item xs={7}>
                <LinearProgress sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} variant='determinate' value={40} color='warning'/>
              </Grid>
            </Grid><Grid container alignItems="center" gap={2}>
              <Grid item xs={2}>
                <p>Poor</p>
              </Grid>
              <Grid item xs={7}>
                <LinearProgress sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} variant='determinate' value={20} color='error'/>
              </Grid>
            </Grid>

          </Box>

         </Grid>

        </Grid>
      </div>

    </section>

    {/* Similar Products */}
    <section className='pt-10'>
      <h1 className='text-start py-5 text-xl font-bold'>Similar Products</h1>
      <div className='flex flex-wrap justify-center items-center	 space-y-5'>
        {computer_parts.map((item)=><HomeSectionCard product={item}/>)}
      </div>
    </section>

      </div>
    </div>
  )
}
