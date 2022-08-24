import React from "react";
import Fade from "react-reveal/Fade";

// bagian untuk mengatur bawah (button)
// ngg pake tes, karena cuma tampilin div doang

export default function MainContent({ data, current }) {
  return <Fade>{data[current] && data[current].content}</Fade>;
}
