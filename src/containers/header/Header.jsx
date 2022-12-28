/** @format */

import "./header.css";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";
function Header() {
  return (
    <>
      <div className="header section__padding" id="home">
        <div className="header__hero">
          <h1 className="header__hero-text gradient__text">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="header__disc ">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form action="">
            <input
              className="header__input"
              type="email"
              placeholder="Your Email Address"
            />
            <button className="header__submit" type="submit">
              Get Started
            </button>
          </form>
          <div className="header__visitors">
            <img src={people} alt="" />
            <div className="header__visitors-desc">
              1,600 people requested access a visit in last 24 hours
            </div>
          </div>
        </div>
        <div className="header__image">
          <img src={ai} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
