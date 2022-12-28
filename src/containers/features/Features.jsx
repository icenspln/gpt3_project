/** @format */

import { Feature } from "../../components";
import "./features.css";
function Features() {
  return (
    <>
      <div className="features section__margin section__padding">
        <div className="features__heading">
          <h1 className="features__heading-text gradient__text ">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <span>Request Early Access to Get Started</span>
        </div>
        <div className="features__cards">
          <div className="features__card">
            <div className="features__card-head">
              <Feature>Improving end distrusts instantly </Feature>
            </div>
            <div className="features__card-disc">
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded.
            </div>
          </div>
          <div className="features__card">
            <div className="features__card-head">
              <Feature>Become the tended active</Feature>
            </div>
            <div className="features__card-disc">
              Considered sympathize ten uncommonly occasional assistance
              sufficient not. Letter of on become he tended active enable to.
            </div>
          </div>
          <div className="features__card">
            <div className="features__card-head">
              <Feature>Message or am nothing</Feature>
            </div>
            <div className="features__card-disc">
              Led ask possible mistress relation elegance eat likewise debating.
              By message or am nothing amongst chiefly address.
            </div>
          </div>
          <div className="features__card">
            <div className="features__card-head">
              <Feature>Really boy law county</Feature>
            </div>
            <div className="features__card-disc">
              Really boy law county she unable her sister. Feet you off its like
              like six. Among sex are leave law built now. In built table in an
              rapid blush.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
