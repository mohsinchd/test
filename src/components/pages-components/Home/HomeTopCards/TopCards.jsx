import React from "react";
import { FaWarehouse } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { MdBedroomParent } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import "./TopCards.css";

const TopCards = () => {
  return (
    <div className="card card-body topcard p-0 d-none d-md-block">
      <div className="row">
        <div className="col-md-3 p-4">
          <FaWarehouse size={50} className="orange-color" />
          <h3 className="my-2">Warehouses</h3>
          <p>
            Our warehouses are fully equipped with state-of-the-art technology
            and staffed by experienced professionals who can handle all your
            storage and distribution needs. Whether you need short-term storage,
            long-term warehousing, or distribution services, Orange's warehouses
            have got you covered. Our facilities are secure, climate-controlled,
            and equipped with the latest inventory management systems to ensure
            that your goods are always safe and easily accessible.
          </p>
        </div>
        <div className="col-md-3 p-4 text-light bg-orange">
          <AiFillCar size={50} />
          <h3 className="my-2">Cars</h3>
          <p>
            At Orange, we're committed to providing a comprehensive
            transportation solution for all your shipping needs. That's why in
            addition to our network of reliable transporters, we also have our
            own fleet of cars and trucks to ensure that your goods are always
            transported safely and efficiently. Our vehicles are meticulously
            maintained and regularly inspected to ensure that they are in top
            condition for every trip. Whether you need a small car for a quick
            delivery or a large truck for a large shipment, Orange has got you
            covered.
          </p>
        </div>
        <div className="col-md-3 p-4">
          <MdBedroomParent size={50} className="orange-color" />
          <h3 className="my-2">Rooms</h3>
          <p>
            Our warehouses are fully equipped with state-of-the-art technology
            and staffed by experienced professionals who can handle all your
            storage and distribution needs. Whether you need short-term storage,
            long-term warehousing, or distribution services, Orange's warehouses
            have got you covered. Our facilities are secure, climate-controlled,
            and equipped with the latest inventory management systems to ensure
            that your goods are always safe and easily accessible.
          </p>
        </div>
        <div className="col-md-3 p-4 text-light bg-orange">
          <AiFillSafetyCertificate size={50} />
          <h3 className="my-2">Safety</h3>
          <p>
            At Orange, safety is our top priority. We understand that when you
            entrust us with your goods, you expect them to arrive at their
            destination safely and without damage. That's why we have
            implemented a comprehensive set of safety measures to ensure the
            secure transport of your shipments. All of our transporters,
            warehouse staff, and drivers are thoroughly vetted and trained to
            handle your goods with care and professionalism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
