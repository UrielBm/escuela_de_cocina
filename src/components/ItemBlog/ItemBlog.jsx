import { Link } from "react-router-dom";
import "./ItemBlog.scss";
const ItemBlog = () => {
  return (
    <div className="itemBlog">
      <img
        className="blogImage"
        loading="lazy"
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="logo"
        width="120px"
        height="60px"
      />
      <div className="about">
        <h2 className="blogTitle">Titulo de la entrada</h2>
        <div className="metaData">
          <p className="date">
            Escrito el:<span className="data"></span>
          </p>
          <p className="author">
            por:<span className="data"></span>
          </p>
        </div>
        <p className="aboutText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          reprehenderit, architecto rem culpa odit adipisci facilis at aut!
          Dolor inventore commodi mollitia eius ducimus in quos delectus dicta
          dignissimos debitis? Lorem ipsum dolor sit, amet consectetur
        </p>
      </div>
      <Link to={`/articulo/${1}`} className="ActionButton">
        Ver Entrada
      </Link>
    </div>
  );
};

export default ItemBlog;
