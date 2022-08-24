import React, { useState } from "react";
import propTypes from "prop-types";
// import "./Numbering/index.scss";

export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepsKeys = Object.keys(steps);
  const [CurrentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
  );
  const totalStep = Object.keys(steps).length;
  const indexStep = stepsKeys.indexOf(CurrentStep);

  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  }

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
