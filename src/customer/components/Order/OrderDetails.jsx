import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid, Box } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='text-start px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-5'>Delivery Address</h1>
            <AddressCard/>
        </div>

        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid className='space-y-5' container >
            {[1,1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border ' sx={{alignItems:"center", justifyContent:'space-between'}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4 transition-all'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' 
                        src="https://www.mymbt.net/pub/media/catalog/product/cache/8a59274a72317ffdf6ff3193238efca6/z/o/zotac_geforce_gaming_rtx_3080_trinity_oc_10gb_gddr6_graphics_card_1_.png" 
                        alt="" />

                        <div className='space-y-2 ml-5'>
                        <p className='font-semibold'>NVIDIA GeForce RTX 3080</p>
                        <p className='space-x-4 opacity-50 text-xs font-semibold'><span>Color: Black</span> <span>Item: GPU</span></p>
                        <p className='opacity-90 text-xs '>Seller: NVIDIA</p>
                        <p>₹7000</p>
                        </div>
                    </div>       
                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize: "2rem"}} className='px-2 text-5x1'/>
                        <span>Rate & Review</span>
                    </Box>
                </Grid>

            </Grid>)}
            

        </Grid>
        
    </div>
  )
}

export default OrderDetails