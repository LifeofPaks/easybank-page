import React from "react";
import "./Main.scss";
import infoImg from "../../images/icon-online.svg";
import { infoData } from "../../data/Data";
import { articlesData } from "../../data/Data";

const Main = () => {
  return (
    <div className="main">
      <div className="infoInfo">
        <div className="intro">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        </div>
       
        <article className="contentWrapper">
          {
            infoData.map(item =>(
              <section key={item.id}>
              <img src={item.image} alt="infoImg" />
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </section>
            ))
          }
         
        </article>
      </div>
    </div>
  );
};

export default Main;
