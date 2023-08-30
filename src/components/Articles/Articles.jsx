import React from "react";
import "./Articles.scss";
import { articlesData } from "../../data/Data";

const Articles = () => {
  return (
    <div className="articles">
      <h2>Latest Articles</h2>
      <article className="cardWrapper">
        {articlesData.map((item) => (
          <section className="card" key={item.id}>
            <img src={item.image} alt="image" />

            <div className="infoWraps">
            <p className="author">{item.author}</p>
            <h3>{item.title}</h3>
            <p className="info">{item.info}</p>
            </div>
           
          </section>
        ))}
      </article>
    </div>
  );
};

export default Articles;
