import React from 'react'

interface IRadioButton {
    label:string
}
const RadioButton: React.FC<IRadioButton> = ({ label }) => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="radio"
        id={label}
        name={label}
        className="w-6 h-6 rounded-full border-2 border-gray-500 bg-gray-800 focus:ring-0"
      />
      <label htmlFor={label} className="text-white">
        {label}
      </label>
    </div>
  );
};

export default RadioButton