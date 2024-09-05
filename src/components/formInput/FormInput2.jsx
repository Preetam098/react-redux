import React from "react";

const FormInput2 = (props) => {
  const {
    name,
    onChange,
    value,
    options,
    className,
    errorMessage = null,
    type,
    disabled,
    min,
    max,
    placeholder,
    maxLength,
  } = props;

  const inputStyle =
    "inline-flex items-center text-xs gap-3 px-3 py-3 text-gray-700 bg-secondary rounded outline-none border-none";

  // render input fields
  const renderInputs = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={name}
            name={name}
            disabled={disabled}
            onChange={onChange}
            value={value}
            placeholder={`Enter ${placeholder ? "here" : name}`}
            rows={7}
            className={inputStyle}
          />
        );

      case "select":
        return (
          <select
            id={name}
            name={name}
            disabled={disabled}
            value={value}
            onChange={onChange}
            className={`${inputStyle} ${className} capitalize`}
          >
            {/* <option>Select {name} </option> */}
            {options}
          </select>
        );

      default:
        return (
          <input
            type={type || "text"}
            id={name}
            name={name}
            disabled={disabled}
            value={value}
            onChange={onChange}
            min={type == "date" ? min : ""}
            max={type == "date" ? max : ""}
            maxLength={maxLength}
            placeholder={`${type == "search" ? "Search" : "Enter"} ${
              placeholder ? placeholder : name
            }`}
            className={`${inputStyle} ${className}`}
          />
        );
    }
  };

  return (
    <div className="tracking-wider text-sm grid">
      {/* input fields */}
      {renderInputs()}

      {/* error */}
      {errorMessage && (
        <h1 className="text-primary text-xs px-0.5 mt-1">{errorMessage}</h1>
      )}
    </div>
  );
};

export default FormInput2;
