import React, { useRef } from "react";
import propTypes from "prop-types";
import "./index.scss";

function File(props) {
  const {
    name,
    accept,
    value,
    onChange,
    prepend,
    append,
    placeholder,
    outerClassName,
    inputClassName,
  } = props;

  // fungsi hooks dari react
  // default refInputFile null
  const refInputFile = useRef(null);

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {/* ada prepend? dimasukin dan tambah elemen and text */}
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text"> {prepend} </span>
          </div>
        )}

        {/* input default (value to sending) */}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          type="file"
          // hide input file biar ngg keliatan di dom (aslinya ada)
          className="d-none"
          value={value}
          onChange={props.onChange}
        />

        {/* show file is selected in here ... */}
        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={value}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
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

File.defaultProps = {
  placeholder: "Browse a files ...",
};

File.propTypes = {
  name: propTypes.string.isRequired,
  // file name nerima bentuk file nya apa saja
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};

export default File;
