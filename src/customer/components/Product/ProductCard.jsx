import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {

    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate("/product/${5}")} className='productCard w-[14rem] m-3 transition-all cursor-pointer'>
            <div className='h-[12rem]'>
                <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt=""/>
            </div>
            <div className='textPart bg-white p-3'>
                <div className=''>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p>{product.title}</p>
                </div>
                <div className='flex item-center space-x-1 px-6'>
                    <p className='font-semibold'>₹{product.discountedPrice}</p>
                    <p className='font-sm line-through opacity-60'>₹{product.price}</p>
                    <p className='text-green-600 font-semibold'>{product.discountPersent}% off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;