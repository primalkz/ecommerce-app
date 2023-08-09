import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomeSectionCard = ({ product }) => {
    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate("/product/${5}")} className='cursor-pointer flex flex-col items-center bg-zinc-100 hover:bg-white rounded-lg hover:shadow-lg overflow-hidden w-[15rem] mx-3 my-2 border border-zinc-300 hover:transition-all '>
            <div className='h-[13rem] w-[13rem]'>
                <img 
                className='object-cover object-top w-full h-full pt-2 mt-1' 
                src={product.imageUrl} 
                alt="" />

            </div>

            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>
                    {product.brand}
                </h3>
                <p className='mt-2 text-sm text-gray-500'>
                    {product.title}
                </p>
                <p className='mt-2 text-sm text-gray-1000'>
                    ${product.price}
                </p>
            </div>


        </div>
    )
}

export default HomeSectionCard;