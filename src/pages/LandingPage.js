import React, { Component } from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";

// export with extends to component
export default class LandingPage extends Component {
  render() {
    // console.log(this.props);
    return (
      <>
        {/* ... : syntax es6, Kalo ada props dari kelas ini akan di masukan juga ke dalam Header class*/}
        <Header {...this.props}></Header>
        {/* get object data hero dari landingPage json */}
        <Hero data={landingPage.hero} />
      </>
    );
  }
}
