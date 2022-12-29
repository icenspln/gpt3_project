/** @format */

import "./article.css";

function Article(props) {
  return (
    <>
      <div className="article">
        <div className="article__image">
          <img src={props.img} alt="" />
        </div>
        <div className="article__body">
          <small className="article__date">{props.date}</small>
          <h2 className="article__text">{props.text}</h2>
          <small className="article__read">Read Full Article</small>
        </div>
      </div>
    </>
  );
}

export default Article;
