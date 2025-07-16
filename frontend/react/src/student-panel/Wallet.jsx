import React from "react";
import { Button } from "react-bootstrap";

function Wallet() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="">
            <div className="card-body text-center">
              <img
                src="/img/card.png"
                alt="کارت بانکی"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="">
            <div className="card-body text-center">
              <img
                src="/img/card2.png"
                alt="کارت بانکی"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex mx-4 px-2">
          
          <Button variant="primary" className="w-100 mt-2">
            درخواست برداشت
          </Button>
          <Button variant="success" className="w-100 mt-2">
            افزایش موجودی
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
