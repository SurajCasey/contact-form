import React from 'react'

const Textfield = ({title, type, placeholder, value, onChange, id, name, error, multiline}) => {
  return (
    <div  
        className=' flex flex-col gap-2 w-full'
    >

        <label htmlFor={id}
            className='text-grey900 leading-[150%]'
        >
            {title} <span className='text-green600'>*</span>
        </label>
        {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full border-[1px] px-6 py-3 rounded-lg border-grey-500 cursor-pointer hover:border-green-600 ${
            error ? 'border-red-error' : ''
          } h-32 resize-y`} // Added height and resize
        />
      ) : (
        <input 
            type={type} 
            id={id}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full invalid:border-red-error border-[1px] px-6 py-3 rounded-lg border-grey500 
                cursor-pointer hover:border-green600
                ${error ? 'border-red-error' : ''}
                `}
        />
        )}

        {error && <p 
            className='text-red-error '
        >
            {error}
        </p>}
       

    </div>
    
  )
}

export default Textfield