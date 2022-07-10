import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import PageDetailTitle from "parts/PageDetailTitle";
import Header from "parts/Header";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  // setting window to first load
  //   also setting to landingPage
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0); // on top
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      //   create react fragment
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade Bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade Bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />

        <Footer />
      </>
    );
  }
}
