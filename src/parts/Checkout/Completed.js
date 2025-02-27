import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIllustration from "assets/images/completed.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedIllustration}
              className="img-fluid"
              //   kasih "alt" agar google robot bisa baca image kita
              alt="completed checkout apartement"
            />

            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
