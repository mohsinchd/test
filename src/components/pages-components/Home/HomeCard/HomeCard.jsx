import React, { useState } from "react";
import { FaStore } from "react-icons/fa";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import "./HomeCard.css";
import TransportForm from "./TransportForm/TransportForm";
import UnitStorageForm from "./UnitStorageForm/UnitStorageForm";

const HomeCard = () => {
  const [showUnitStorageForm, setShowUnitStorageForm] = useState(true);
  const [showTransportForm, setShowTransportForm] = useState(false);

  const unitStorageHandler = (e) => {
    setShowTransportForm(false);
    setShowUnitStorageForm(true);
  };

  const transportHandler = (e) => {
    setShowUnitStorageForm(false);
    setShowTransportForm(true);
  };

  return (
    <div className="card card-body  p-0 showcase-card">
      <div className="row">
        <div
          className={`col-6 left-box p-3 card-boxes ${
            showUnitStorageForm ? "selected-box" : ""
          }`}
          onClick={unitStorageHandler}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FaStore size={30} />
            <h5>Unit Storage</h5>
          </div>
        </div>
        <div
          className={`col-6 right-box p-3 card-boxes ${
            showTransportForm ? "selected-box" : ""
          }`}
          onClick={transportHandler}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <MdOutlineEmojiTransportation size={30} />
            <h5>Transport</h5>
          </div>
        </div>
      </div>
      {showUnitStorageForm && <UnitStorageForm />}
      {showTransportForm && <TransportForm />}
    </div>
  );
};

export default HomeCard;
