import { Avatar, Rating, Grid, Box } from '@mui/material'
import React from 'react'


const ProductReviewCard = () => {
  return (
    <div className='text-start'>
        <Grid container spacing={2} gap={2} >
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white sx={{width:56, height:56, bgcolor:"#9155fd"}}'>G</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='text-semibold text-lg'>Acha</p>
                        <p className='opacity-70'>April 5, 2023</p>
                    </div>
                </div>

                <Rating value={3.5} name='half-rating' readOnly precision={.5}/>
                <p>hasidasjdasidajidnmasindaosndakosnmdkalsmdaklsmd</p>

            </Grid>

        </Grid>
    </div>
  )
}

export default ProductReviewCard