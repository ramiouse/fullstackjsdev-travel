import React from "react";
import Star from "elements/Star";
import ImgTestimonialFrame from "assets/images/image-testimonial-frame.jpg";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Testimony({ data }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          {/* COLUMN LEFT col-auto */}
          <div className="col-auto" style={{ marginRight: 60 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={ImgTestimonialFrame}
                alt="Testimonial Frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </div>
          </div>
          {/* END COLUMN LEFT */}

          {/* COLUMN - RIGHT col-6 (12\2)*/}
          <div className="col">
            <h4 style={{ marginBottom: 40 }}> {data.name} </h4>
            <Star value={data.rate} width={35} height={35} spacing={4}></Star>
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
          {/* END COLUMN RIGHT */}
        </div>
      </section>
    </Fade>
  );
}
