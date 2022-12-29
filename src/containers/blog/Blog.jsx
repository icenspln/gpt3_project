/** @format */
import Article from "../../components/article/Article";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

import "./blog.css";
function Blog() {
  return (
    <>
      <div className="blog section__margin section__padding">
        <h1 className="blog__heading gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
        <div className="blog__container">
          <Article
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            img={blog01}
          />
          <Article
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            img={blog02}
          />
          <Article
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            img={blog03}
          />
          <Article
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            img={blog04}
          />
          <Article
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            img={blog05}
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
