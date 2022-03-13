import React from "react";
import ListBlog from "../components/ListBlog/ListBlog";
import "./style/pages.scss";
const Home = () => {
  return (
    <section className="wrapper wrapperDataPages">
      <div className="imgHero" />
      <ListBlog title="Nuestro blog" />
    </section>
  );
};

export default Home;
