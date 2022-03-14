import { formatDistance } from "date-fns";
import { es } from "date-fns/locale";
import React from "react";
import "./DetailArticle.scss";
const DetailArticle = ({ article }) => {
  const { title, desc, img, autor, date } = article;
  return (
    <article className="article">
      <h1 className="articleTitle">{title}</h1>
      <div className="wrapperArticle">
        <div className="wrapperImg">
          <img
            className="articleImage"
            loading="lazy"
            src={img}
            alt="logo"
            width="120px"
            height="60px"
          />
        </div>
        <div className="wrapperText">
          <p className="text">{desc}</p>
          <div className="wrapperMetaData">
            <p>
              Publicado:
              <span className="data">
                {formatDistance(new Date(date), new Date(), {
                  addSuffix: true,
                  locale: es,
                })}
              </span>
            </p>
            <p>
              Escrito por:<span className="data">{autor}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DetailArticle;
