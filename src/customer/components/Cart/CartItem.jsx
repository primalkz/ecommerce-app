import React from 'react'
import { Button, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export const CartItem = () => {
    return (
        <div className=' text-left p-5 shadow-lg border rounded-md mt-10'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://www.mymbt.net/pub/media/catalog/product/cache/8a59274a72317ffdf6ff3193238efca6/z/o/zotac_geforce_gaming_rtx_3080_trinity_oc_10gb_gddr6_graphics_card_1_.png" alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>NVIDIA GeForce RTX 3080</p>
                    <p className='opacity-70'>Color: Black, GPU</p>
                    <p className='opacity-70 mt-2'>Seller: NVIDIA</p>

                    <div className='flex space-x-5 items-center text-gray-900 p-6'>

                        <p className='font-semibold'>$7000</p>
                        <p className='opacity-50 line-through'>13000</p>
                        <p className='text-green-600 font-semiboldf'>53% off</p>

                    </div>
                </div>

            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton sx={{color:"rgb(229, 116, 116)"}}>
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>2</span>
                        <IconButton sx={{color:"RGB(145 85 253)"}}>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                        
                    </div>

                    <div>
                        <Button sx={{color:"RGB(145 85 253)"}} >remove

                        </Button>
                    </div>

                </div>
        </div>
    )
}
