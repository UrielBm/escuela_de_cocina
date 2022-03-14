import React, { useEffect, useState } from "react";
import axios from "axios";
import seperadorwebp from "./../../assets/img/separador.webp";
import separador from "./../../assets/img/separador.png";
import ItemBlog from "../ItemBlog/ItemBlog";
import "./ListBlog.scss";
import Loading from "../Loading/Loading";
const ListBlog = ({ title }) => {
  useEffect(() => {
    handleGetArticles();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [articles, Setarticles] = useState([]);
  const [loading, Setloading] = useState(true);
  const handleGetArticles = async () => {
    const { data } = await axios.get(
      `https://kitchenschool.herokuapp.com/articles`
    );
    Setarticles(data);
    Setloading(false);
  };
  return (
    <main className="wrapperBlog">
      <h1 className="title">{title}</h1>
      <picture>
        <source srcSet={seperadorwebp} type="image/webp" />
        <img
          className="separador"
          loading="lazy"
          src={separador}
          alt="logo"
          width="400px"
          height="200px"
        />
      </picture>
      {loading ? (
        <Loading />
      ) : (
        articles.map((article) => (
          <ItemBlog key={article.id} article={article} />
        ))
      )}
    </main>
  );
};

export default ListBlog;
