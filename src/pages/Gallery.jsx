import img1 from "./../assets/img/Gallery/imguno.jpg";
import img1web from "./../assets/img/Gallery/imguno.webp";
import img2 from "./../assets/img/Gallery/imgdos.jpg";
import img2web from "./../assets/img/Gallery/imgdos.webp";
import img3 from "./../assets/img/Gallery/imgtres.jpg";
import img3web from "./../assets/img/Gallery/imgtres.webp";
import img4 from "./../assets/img/Gallery/imgcuatro.jpg";
import img4web from "./../assets/img/Gallery/imgcuatro.webp";
import img5 from "./../assets/img/Gallery/imgcinco.jpg";
import img5web from "./../assets/img/Gallery/imgcinco.webp";
import img6 from "./../assets/img/Gallery/imgseis.jpg";
import img6web from "./../assets/img/Gallery/imgseis.webp";
import img7 from "./../assets/img/Gallery/imgsiete.jpg";
import img7web from "./../assets/img/Gallery/imgsiete.webp";
import img8 from "./../assets/img/Gallery/imgocho.jpg";
import img8web from "./../assets/img/Gallery/imgocho.webp";
import img9 from "./../assets/img/Gallery/imgnueve.jpg";
import img9web from "./../assets/img/Gallery/imgnueve.webp";

const Gallery = () => {
  return (
    <section className="wrapper wrapperDataPages">
      <h1 className="pagesTitle">Galería</h1>
      <ul className="wrapperGallery">
        <li>
          <a href={img1}>
            <picture>
              <source srcSet={img1web} type="image/webp" />
              <img
                className="imgGallery"
                loading="lazy"
                src={img1}
                alt="primera"
                width="300px"
                height="200px"
              />
            </picture>
          </a>
        </li>
        <li>
          <a href={img2}>
            <picture>
              <source srcSet={img2web} type="image/webp" />
              <img
                className="imgGallery"
                loading="lazy"
                src={img2}
                alt="primera"
                width="300px"
                height="200px"
              />
            </picture>
          </a>
        </li>
        <li>
          <a href={img3}>
            <picture>
              <source srcSet={img3web} type="image/webp" />
              <img
                className="imgGallery"
                loading="lazy"
                src={img3}
                alt="primera"
                width="300px"
                height="200px"
              />
            </picture>
          </a>
        </li>
        <li>
          <a href={img4}>
            <picture>
              <source srcSet={img4web} type="image/webp" />
              <img
                className="imgGallery"
                loading="lazy"
                src={img4}
                alt="primera"
                width="300px"
                height="200px"
              />
            </picture>
          </a>
        </li>
        <li>
          <a href={img5}>
            <picture>
              <source srcSet={img5web} type="image/webp" />
              <img
                className="imgGallery"
                loading="lazy"
                src={img5}
                alt="primera"
                width="300px"
                height="200px"
              />
            </picture>
          </a>
        </li>
        <li>
          <a href={img6}>
            <picture>
              <source srcSet={img6web} type="image/webp" />
              <img
                className="imgGallery"
                loading="lazy"
                src={img6}
                alt="primera"
                width="300px"
                height="200px"
              />
            </picture>
          </a>
        </li>
        <li>
          <a href={img7}>
            <picture>
              <source srcSet={img7web} type="image/webp" />
              <img
                className="imgGallery"
                loading="lazy"
                src={img7}
                alt="primera"
                width="300px"
                height="200px"
              />
            </picture>
          </a>
        </li>
        <li>
          <a href={img8}>
            <picture>
              <source srcSet={img8web} type="image/webp" />
              <img
                className="imgGallery"
                loading="lazy"
                src={img8}
                alt="primera"
                width="300px"
                height="200px"
              />
            </picture>
          </a>
        </li>
        <li>
          <a href={img9}>
            <picture>
              <source srcSet={img9web} type="image/webp" />
              <img
                className="imgGallery"
                loading="lazy"
                src={img9}
                alt="primera"
                width="300px"
                height="200px"
              />
            </picture>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Gallery;
