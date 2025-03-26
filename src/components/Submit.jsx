import React from 'react'

const Submit = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      className='bg-green600 text-white rounded-lg h-[59px] 
      flex justify-center items-center cursor-pointer hover:opacity-90'
      aria-label='click to submit'
    >
      Submit
    </button>
  )
}

export default Submit