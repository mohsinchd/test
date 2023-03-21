import React from "react";
import { HiTrendingUp } from "react-icons/hi";
import { HiTrendingDown } from "react-icons/hi";
import { BsCalendar3 } from "react-icons/bs";
import { MdBedroomParent } from "react-icons/md";

const UnitStorageForm = () => {
  return (
    <div className="p-3">
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="from">From</label>
              <div className="input-group input-group-lg">
                <span className="input-group-text">
                  <HiTrendingUp size={20} />
                </span>
                <input
                  type="text"
                  name="from"
                  id="from"
                  placeholder="Where would you like to start?"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="to">To</label>
              <div className="input-group input-group-lg">
                <span className="input-group-text">
                  <HiTrendingDown size={20} />
                </span>
                <input
                  type="text"
                  name="to"
                  id="=to"
                  placeholder="Where would you like to end?"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <div className="input-group input-group-lg">
            <span className="input-group-text">
              <BsCalendar3 size={20} />
            </span>
            <input type="date" name="date" id="date" className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="rooms">Rooms</label>
          <div className="input-group input-group-lg">
            <span className="input-group-text">
              <MdBedroomParent size={20} />
            </span>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose Rooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">2</option>
            </select>
          </div>
        </div>
        <div className="form-group mt-3 w-100">
          <button className="btn btn-dark btn-lg w-100">Find a Service</button>
        </div>
      </form>
    </div>
  );
};

export default UnitStorageForm;
