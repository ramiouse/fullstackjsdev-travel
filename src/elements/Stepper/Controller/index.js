import React from "react";
import Fade from "react-reveal/Fade";

// bagian untuk mengatur bawah (button)
// ngg pake tes, karena cuma tamipin div doang

export default function Controller(props) {
  return (
    <Fade>
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-3">{props.children}</div>
        </div>
      </section>
    </Fade>
  );
}
