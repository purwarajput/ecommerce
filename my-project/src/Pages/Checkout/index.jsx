import React from 'react';
import TextField from '@mui/material/TextField';

const Checkout = () => {
  return (
    <section className='py-10'>
        <div className='container flex gap-5'>
            <div className='leftCol w-[70%]'>
                <div className='card bg-white shadow-md p-5 rounded-md w-full'>
                    <h1>Billing Details *</h1>

                    <form className='w-full mt-5'>
                        <div className='flex items-center gap-5 pb-5'>
                            <div className='col w-[50%]'>
                                 <TextField className='w-full' label="Full Name" variant="outlined" size="small" />
                            </div>

                             <div className='col w-[50%]'>
                                 <TextField className='w-full' label="Email" variant="outlined" size="small" />
                            </div>
                        </div>

                            <h4>Street Address*</h4>

                            <div className="flex items-center gap-5 pb-5 pt-3">
                                <div className="col w-[100%]">
                               <TextField className="w-full" label="House Number and Street" variant="outlined" size="small" />
                                </div>
                            </div>
                            <div className="flex items-center gap-5 pb-5">
                             <div className="col w-[100%]">
                            <TextField className="w-full" label="Apartment, Suite, unit, etc (optional)" variant="outlined" size="small" />
                            </div>
                            </div>


                           <div className='flex items-center gap-5 pb-5'>
                            <div className='col w-[50%]'>
                                 <TextField className='w-full' label="Town/City*" variant="outlined" size="small" />
                            </div>

                             <div className='col w-[50%]'>
                                 <TextField type="text" className='w-full' label="State/Country*" variant="outlined" size="small" />
                            </div>
                        </div> 
                        

                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Checkout;
