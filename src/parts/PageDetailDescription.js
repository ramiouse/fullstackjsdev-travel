import React from "react";
import ReactHtmlParser from "html-react-parser";
export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div
              key={`feature-${index}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                width="38"
                className="d-block mb-2"
                src={feature.imageUrl}
                alt={feature.name}
              />{" "}
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
