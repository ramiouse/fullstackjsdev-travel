import React from "react";
import Fade from "react-reveal/Fade";
import { InputText, InputFile } from "elements/Form";
import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;
  const subTotal = ItemDetails.price * checkout.duration;

  // get grandTotal with Tax parameters
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  // return
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items center">
          {/* content1 */}
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandtotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={loboBca} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 20223</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 19295</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
