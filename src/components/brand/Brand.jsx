/** @format */

import "./brand.css";

import { google, slack, atl, dropbox, shop } from "./imports";

function Brand() {
  return (
    <>
      <div className="brands section__padding">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atl} alt="atl" />
        <img src={dropbox} alt="dropbox" />
        <img src={shop} alt="shopify" />
      </div>
    </>
  );
}

export default Brand;
