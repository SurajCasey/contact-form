import React from "react";
import Checkimg from "../../assets/images/icon-checkbox-check.svg";

const Checkbox = ({ id, name, value, label, checked, onChange }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Hidden Checkbox */}
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="peer w-6 h-6 border border-gray-500
            absolute top-0 left-0 appearance-none peer-checked:invisible"
        />
        {/* Checkbox Image (Shown when checked) */}
        <img
          src={Checkimg}
          alt="check tick mark"
          className="w-6 h-6 absolute opacity-0 
            peer-checked:opacity-100 transition-opacity duration-200"
        />
      </div>

      {/* Label */}
      <label
        htmlFor={id}
        className="cursor-pointer text-[18px] leading-[150%] text-gray-900"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
