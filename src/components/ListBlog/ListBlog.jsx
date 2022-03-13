import seperadorwebp from "./../../assets/img/separador.webp";
import separador from "./../../assets/img/separador.png";
import "./ListBlog.scss";
import ItemBlog from "../ItemBlog/ItemBlog";
const ListBlog = ({ title }) => {
  return (
    <main className="wrapperBlog">
      <h1 className="title">{title}</h1>
      <picture>
        <source srcset={seperadorwebp} type="image/webp" />
        <img
          className="separador"
          loading="lazy"
          src={separador}
          alt="logo"
          width="400px"
          height="200px"
        />
      </picture>
      <ItemBlog />
      <ItemBlog />
      <ItemBlog />
    </main>
  );
};

export default ListBlog;
