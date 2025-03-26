import React from 'react';
import Radioimg from '../../assets/images/icon-radio-selected.svg';

const Radio = ({ id, name, value, label, checked, onChange }) => {
  return (
    <div className="w-full border-grey500 hover:border-green600 border-[1px] flex gap-3 px-6 py-3 rounded-lg cursor-pointer
                    items-center hover:peer-checked:bg-green200">
      <div className="relative w-6 h-6 flex items-center justify-center">
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="w-6 h-6  appearance-none border-2 border-grey500 rounded-full cursor-pointer peer"
            />
            <img
                src={Radioimg}
                alt="radio selected"
                className="w-6 h-6 absolute hidden peer-checked:block"
            />
      </div>
      <label htmlFor={id} className="cursor-pointer text-[18px] leading-[150%] text-grey900">
        {label}
      </label>
    </div>
  );
};

export default Radio;