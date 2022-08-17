import React, { Component } from "react";
import Fade from "react-reveal/Fade";

// import Stepper, with classes including
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "elements/Stepper";

import Header from "parts/Header";
import Button from "elements/Button";
import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";
import ItemDetails from "json/itemDetails.json";

export default class Checkout extends Component {
  //  create state for input form To POST
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  // function onchange
  onChange = (event) => {
    this.setState({
      data: {
        // set value to all this class state if name state same as this state (automation set state)
        ...this.state.data,
        // why use array?here
        [event.target.name]: event.target.value,
      },
    });
  };

  // maksa halaman untuk ke paling atas
  componentDidMount() {
    window.scroll(0, 0);
  }

  // render all
  render() {
    // put all this state to const data (make easy call)
    const { data } = this.state;
    const checkout = {
      duration: 3,
    };

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      // react fragment
      // kembalikan sekumpulan element html dengan dinamai sebagai fragment
      <>
        <Header isCentered />
        {/* STEPPER IN HERE ! */}
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            // react fragmnet
            <>
              {/* numbering */}
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />

              {/* meta */}
              <Meta data={steps} current={CurrentStep} />

              {/* main content */}
              <MainContent data={steps} current={CurrentStep} />
            </>
          )}
        </Stepper>
      </>
    );
  }
}
