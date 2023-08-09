import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate('/account/order/${5}')} className='p-5 shadow-md hover:shadow-2xl border transition-all'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://www.mymbt.net/pub/media/catalog/product/cache/8a59274a72317ffdf6ff3193238efca6/z/o/zotac_geforce_gaming_rtx_3080_trinity_oc_10gb_gddr6_graphics_card_1_.png"
                     alt="" />
                     <div className='ml-5 space-y-2'>
                        <p className=''>NVIDIA GeForce RTX 3080</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        <p className='opacity-50 text-xs font-semibold'>Item: GPU</p>
                     </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>7000</p>
            </Grid>

            <Grid item xs={4}>
                { true && <div>
                    <p>
                    <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered On August 09
                    </span>
                </p> 
                <p className='text-xs'>
                    Your Item Has Been Delivered
                </p>
                
                </div>}
                { false && <p>
                    <span>
                        Expected Delivery On August 09
                    </span>
                </p>}
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard