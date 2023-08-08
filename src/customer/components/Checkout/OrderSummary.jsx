import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import { CartItem } from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
      <div className='text-start p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>

      </div>
      <div>
        <div className='lg:grid grid-cols-3 relative'>
            <div className='col-span-2'>
                {[1,1,1,1].map((item) =><CartItem/>)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-10 lg:mt-10'>
                <div className='border'>
                    <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                    <hr/>
                    <div className='space-y-3 mb-10'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>7000</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Discount</span>
                            <span className='text-green-600'>-6000</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Delivery Charge</span>
                            <span className='text-green-600'>48</span>
                        </div>
                        <hr/>
                        <div className='flex justify-between pt-3 font-bold'>
                            <span>Total Amount</span>
                            <span className='text-green-600'>7048</span>
                        </div>
                    </div>
                    <Button variant="contained" className='w-full mt-5' sx={{px:"3rem",py:".7rem", bgcolor:"#9155fd"}}>
                        Checkout
                    </Button>

                </div>

            </div>
        </div>
        
    </div>
    </div>
  )
}

export default OrderSummary