import React, { useState } from "react";
import propTypes from "prop-types";

export default function Stepper(props) {
  const { steps, initialStep } = props;
  // get all keys of data object
  const stepsKeys = Object.keys(steps);

  // set array of Current(get current step) & Setting (set/update current) For it
  const [CurrentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
  );
  // get array keys of data
  const totalStep = Object.keys(steps).length;
  // current steps = keberapa?
  const indexStep = stepsKeys.indexOf(CurrentStep);

  // prevstep when click
  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  }

  // nextstep when click
  function nextStep() {
    if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
  }

  // return element with react fragment mode
  return <> {props.children(prevStep, nextStep, CurrentStep, steps)} </>;
}

// intial proptypes
Stepper.propTypes = {
  steps: propTypes.object.isRequired, // ? data?
  initialStep: propTypes.string,
};

// create initial for all class included with Stepper
export { default as Numbering } from "./Numbering";
export { default as Meta } from "./Meta";
export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";
