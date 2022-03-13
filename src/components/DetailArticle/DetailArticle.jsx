import React from "react";
import "./DetailArticle.scss";
const DetailArticle = () => {
  return (
    <article className="article">
      <h1 className="articleTitle">Entrada del articulo</h1>
      <div className="wrapperArticle">
        <div className="wrapperImg">
          <img
            className="articleImage"
            loading="lazy"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="logo"
            width="120px"
            height="60px"
          />
        </div>
        <div className="wrapperText">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            at culpa similique velit, quo enim laudantium qui illo, quae a
            voluptas minus maiores autem ad veniam provident esse, recusandae
            assumenda? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cupiditate facilis necessitatibus ab ratione fugiat assumenda? Error
            odio, facilis quos tempora fugiat doloremque ratione dolorem optio
            repudiandae rerum, iusto qui corrupti. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quis nemo enim ipsam
            perferendis culpa earum incidunt repellendus facere impedit corporis
            sint pariatur ducimus cupiditate corrupti, voluptas odio ea id.
          </p>
          <div className="wrapperMetaData">
            <p>Escrito:</p>
            <p>Escrito por:</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DetailArticle;
