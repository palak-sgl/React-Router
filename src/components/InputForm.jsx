import React from "react";
import Label from "./Label";
import Input from "./Input";
function InputForm({
  someLabel,
  type,
  value,
  name,
  placeholder,
  onChange,
  required,
  errorMessages,
}) {
  return (
    <div>
      <Label someLabel={someLabel} required={required}></Label>
      <Input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="text-xs text-red-600 font-medium">{errorMessages}</p>
    </div>
  );
}

export default InputForm;
