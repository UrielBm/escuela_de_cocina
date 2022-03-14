import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";
import "./ItemBlog.scss";
const ItemBlog = ({ article }) => {
  const { id, img, title, date, autor, shortDesc } = article;
  return (
    <div className="itemBlog">
      <img
        className="blogImage"
        loading="lazy"
        src={img}
        alt="logo"
        width="120px"
        height="60px"
      />
      <div className="about">
        <h2 className="blogTitle">{title}</h2>
        <div className="metaData">
          <p className="date">
            Escrito el:
            <span className="data">
              {format(new Date(date), "do-MMM-YYY", { locale: es })}
            </span>
          </p>
          <p className="author">
            por:<span className="data">{autor}</span>
          </p>
        </div>
        <p className="aboutText">{shortDesc}</p>
      </div>
      <Link to={`/articulo/${id}`} className="ActionButton">
        Ver Entrada
      </Link>
    </div>
  );
};

export default ItemBlog;
