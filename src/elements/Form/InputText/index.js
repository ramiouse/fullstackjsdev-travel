import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.scss";

function Text(props) {
  const {
    type,
    placeholder,
    outerClassName,
    inputClassName,
    name,
    value,
    prepend,
    append,
    errorResponse,
  } = props;

  const [HasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (event) => {
    // setting prop target
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    // set Messages for validation email
    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    // validation telepon
    if (type === "tel") {
      // event.target.validity = input as another of number (return false if not number)
      if (event.target.validity.valid) props.onChange(target);
    } else {
      // if pass, return props as it
      props.onChange(target);
    }
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {/* ada prepend? dimasukin dan tambah elemen and text */}
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text"> {prepend} </span>
          </div>
        )}

        {/* input default */}
        <input
          type={type}
          name={name}
          pattern={pattern}
          className={["form-control", inputClassName].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />

        {/* ada append? tambahin element dan text/ message */}
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text"> {append} </span>
          </div>
        )}
      </div>

      {/* kalo ada error show it message in here */}
      {HasError && <span className="error-helper">{HasError}</span>}
    </div>
  );
}

Text.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here ...",
  errorResponse: "Please match the requested format.",
};

Text.propTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
};

export default Text;
