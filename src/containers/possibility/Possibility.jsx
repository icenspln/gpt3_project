/** @format */

import "./possibility.css";

import img from "../../assets/possibility.png";

function Possibility() {
  return (
    <>
      <div
        className="possibility gradient__bg section__padding"
        id="possibility"
      >
        <div className="possibility__image">
          <img src={img} alt="" />
        </div>
        <div className="possibility__text">
          <p className="possibility__request">
            Request Early Access to Get Started
          </p>
          <h1 className="possibility__header gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <div className="possibility__disc">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </div>
          <p className="possibility__request possibility__request--second">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </>
  );
}

export default Possibility;
