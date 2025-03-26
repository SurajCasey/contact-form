import React from 'react'
import TickImg from '../assets/images/icon-success-check.svg'


const Toast = () => {
  return (
    <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
        <div className='p-6 bg-grey900 text-white 
        flex gap-2 flex-col rounded-xl max-w-md 
         min-w-[327px] mt-6 mx-2.5'
    >
        <div className='flex gap-2'>
            <img 
                className=''
                src={TickImg} alt="Tick image" 
            />
            <h1 className='font-bold text-[18px]'>
                Message Sent!
            </h1>
        
        </div> 
        
        <p className='leading-[150%] font-normal text-green200'>
            Thanks for completing the form. 
            We'll be in touch soon!
        </p>

    </div>
    </div>

    
  )
}

export default Toast