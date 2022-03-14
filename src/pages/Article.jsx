import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailArticle from "../components/DetailArticle/DetailArticle";
import axios from "axios";
import "./style/pages.scss";
import Loading from "../components/Loading/Loading";
const Article = () => {
  const { id } = useParams();
  const [article, Setarticle] = useState();
  const [loading, Setloading] = useState(true);
  useEffect(() => {
    handleGetArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetArticle = async () => {
    const { data } = await axios.get(
      `https://kitchenschool.herokuapp.com/article/${id}`
    );
    Setarticle(data);
    Setloading(false);
  };
  return (
    <section className="wrapper wrapperDataPages">
      {loading ? <Loading /> : <DetailArticle article={article} />}
    </section>
  );
};

export default Article;
