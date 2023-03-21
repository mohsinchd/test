import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { RxLoop } from "react-icons/rx";

const WhyOrange = () => {
  return (
    <div className="text-light text-center">
      <h2>Why our market place?</h2>
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-center">
            <FaRegCheckSquare size={30} />
            <h3>Quality Guarentee</h3>
          </div>
          <p>Quality checked by our team</p>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-center">
            <RiCustomerService2Line size={30} />
            <h3>Customer Service Support</h3>
          </div>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-center">
            <RxLoop size={30} />
            <h3>Money Back Guarentee</h3>
          </div>
          <p>100% Money Back Guarentee</p>
        </div>
      </div>
    </div>
  );
};

export default WhyOrange;
