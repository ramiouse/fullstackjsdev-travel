import React, { useState } from "react";
import propTypes from "prop-types";

import "./index.scss";

// FUNCTION NUMBER => case verifyng number input  
export default function Number(props) {
  const { value, placeholder, min, max, name, prefix, suffix } = props;
  const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  // FUNCTION ONCHANGE => rules when onChange is called / Form input is changed
  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    const patternNumeric = new RegExp("[0-9]*");
    const isNumeric = patternNumeric.test(value);

    // RULES VALUE => isnumeric and <= max && >= min
    if(isNumeric && +value <= max && +value >= min) {
        props.onChange({
            target: {
                name: name,
                value: +value
            }
        });

        // CALL FUNCTION => setInputValue
        setInputValue(`${prefix}${value}${suffix}`);
    }
  };
  
  const minus = () => {
    value > min && 
    onChange({
        target: {
            name: name,
            value: +value - 1
        }
    });
  };

  const plus = () => {
    value < max &&
    onChange({
        target: {
            name: name,
            value: +value + 1
        }
    });
  };

  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text minus" onClick={minus}> - </span>
            </div>
            <input 
            type="text" 
            min={min} 
            max={max} 
            name={name} 
            pattern="[0-9]*" 
            className="form-control" 
            placeholder={placeholder ? placeholder : "0"} 
            value={String(InputValue)} 
            onChange={onChange}
            />
          <div className="input-group-append">
            <span className="input-group-text plus" onClick={plus}>
                +
            </span>
          </div>
       </div>
    </div>
  );
}

// default to declaration
Number.defaultProps = {
    min: 1,
    max: 1,
    prefix: "",
    suffix: ""
}

// rule of props element
Number.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange : propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}
