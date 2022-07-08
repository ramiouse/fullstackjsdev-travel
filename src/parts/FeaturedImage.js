import React from "react";
import Fade from "react-reveal/Fade";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return <div key={`FeaturedImage-${index}`} className={`item ${index > 0 ? "column-5"}`}></div>;
        })}
      </div>
    </section>
  );
}
