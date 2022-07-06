import React, { Component } from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

// export with extends to component
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  // when first load window setting title & scroll on top
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0); // on top
  }

  render() {
    return (
      <>
        {/* ... : syntax es6, Kalo ada props dari kelas ini akan di masukan juga ke dalam Header class*/}
        <Header {...this.props}></Header>
        {/* get object data hero dari landingPage.json */}
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
