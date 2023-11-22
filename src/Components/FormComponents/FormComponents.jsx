import React from "react";

export const Input = ({
    type,
    id,
    required,
    additionalClass,
    name,
    placeholder,
    manipulationFunction, 
    value,
}) => {
   return (
    
    <Input 
    type={type}
    id={id}
    name={name}
    value={value}
    required={required}
    className={`input-component ${additionalClass}`}
    placeholder={placeholder}
    onChange={manipulationFunction}
    autoComplete='off'

    />

   );
}