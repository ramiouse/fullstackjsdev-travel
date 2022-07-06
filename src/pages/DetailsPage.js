import React, { Component } from "react";
import PageDetailTitle from "parts/PageDetailTitle";
import Header from "parts/Header";
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
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
      </>
    );
  }
}
