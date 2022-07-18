import React, { Component } from "react";
import Header from "parts/Header";

export default class Checkout extends Component {
  render() {
    return (
      // react fragment
      // kembalikan sekumpulan element html dengan dinamai sebagai fragment
      <>
        <Header isCentered />
      </>
    );
  }
}
