import Link from "next/link";
import Select from "react-select";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { manageLoginModal } from "@/redux/action/authAction";
import { useDispatch } from "react-redux";
import { BsInfoCircle } from "react-icons/bs";

const FormInput = (props) => {
  const dispatch = useDispatch();
  const {
    label,
    name,
    onChange,
    value,
    options,
    isForgot = false,
    errorMessage = null,
    isPassword = false,
    inputType,
    type,
    disabled,
    rows,
    min = "",
    placeholder,
    isMultiple,
    isAbout = null,
    maxLength,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const CustomOption = ({ innerRef, innerProps, data }) => (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex hover:bg-blue-300 items-center py-1.5 cursor-pointer"
    >
      <span
        className="inline-block border border-gray-200 rounded-full mx-2.5 w-2.5 h-2.5"
        style={{
          backgroundColor: data.color,
        }}
      />
      {data.label}
    </div>
  );
  const CustomMultiValue = ({ data, removeProps }) => (
    <div
      className="px-1.5 py-1 flex items-center mr-2 rounded"
      style={{ backgroundColor: "#e5e5e5" }}
    >
      <span
        className="inline-block border border-gray-200 rounded-full mr-1 w-2.5 h-2.5"
        style={{ backgroundColor: data.color }}
      />
      <span className="text-xs mx-1">{data.label}</span>
      <span className="cursor-pointer ml-1" onClick={removeProps.onClick}>
        &#x2715;
      </span>
    </div>
  );

  const inputStyle =
    "block w-full px-4  py-2.5 mt-2 text-gray-700 bg-white border border-gray-400 rounded-lg focus:border-[#c6003d] focus:outline-none focus:ring-opacity-40";

  // render input fields
  const renderInputs = () => {
    switch (inputType) {
      case "textarea":
        return (
          <textarea
            id={name}
            name={name}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            autoComplete="false"
            className={inputStyle}
          />
        );

      case "texteditor":
        return (
          <div className="bg-white mt-1.5 rounded">
            <ReactQuill
              value={value}
              className="rounded"
              onChange={(e) => onChange({ target: { value: e, name } })}
            />
          </div>
        );

      case "select":
        return (
          <select
            id={name}
            name={name}
            disabled={disabled}
            value={value}
            onChange={onChange}
            autoComplete="false"
            className={`${inputStyle} capitalize`}
          >
            <option >Select {label} </option>
            {options}
          </select>
        );

      case "multi-select":
        return (
          <div className="mt-2.5">
            <Select
              value={value}
              options={options}
              onChange={(e) => {
                onChange({ target: { value: e, name } });
              }}
              isMulti={true}
              components={
                name == "p_color"
                  ? {
                      Option: CustomOption,
                      MultiValue: CustomMultiValue,
                    }
                  : {}
              }
            />
          </div>
        );

      case "file":
        return (
          <input
            id={name}
            name={name}
            disabled={disabled}
            type="file"
            multiple={isMultiple}
            accept=".jpeg,.jpg,.png,.gif"
            onChange={onChange}
            className={`${inputStyle} hidden`}
          />
        );

      default:
        return (
          <input
          {...props}
            type={
              isPassword ? (showPassword ? "text" : "password") : type || "text"
            }
            id={name}
            name={name}
            disabled={disabled}
            value={value}
            min={min}
            autoComplete="false"
            onChange={onChange}
            maxLength={maxLength}
            placeholder={`Enter here`}
            className={inputStyle}
          />
        );
    }
  };

  return (
    <div className="tracking-wide text-sm grid">
      {/* Label, input */}
      <div className="flex justify-between">
        {/* label to form input field */}
        {label && (
          <label
            htmlFor={name}
            className="text-sm w-full font-semibold gap-1 flex items-center text-gray-800"
          >
            {label}{" "}
            {inputType != "file" && (
              <span className="text-primary text-base">*</span>
            )}{" "}
            {isAbout && (
              <div
                onMouseOver={() => setShowInfo(true)}
                onMouseOut={() => setShowInfo(false)}
                className="relative"
              >
                <BsInfoCircle className="cursor-pointer" />
                {showInfo && (
                  <div className="absolute top-5 text-[10px] text-nowrap bg-gray-300 rounded px-1.5">
                    {isAbout}
                  </div>
                )}
              </div>
            )}
          </label>
        )}

        {/* if inputType is password */}
        {isPassword && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="text-secondary flex items-center gap-2 cursor-pointer"
          >
            <span className="text-lg">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {showPassword ? "Hide" : "Show"}
          </span>
        )}
      </div>

      {/* input fields */}
      {renderInputs()}

      {/* error */}
      <div>
        {errorMessage && inputType != "file" && (
          <h1 className="text-primary px-0.5 mt-1">{errorMessage}</h1>
        )}
        {isForgot && (
          <div className="cursor-pointer text-right mt-2 underline text-secondary">
            <Link
              href={`/auth/forget-password`}
              onClick={() => dispatch(manageLoginModal({ value: false }))}
            >
              Forgot your password
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;
