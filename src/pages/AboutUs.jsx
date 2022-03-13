import imgAboutWebp from "./../assets/img/AboutUs.webp";
import imgAbout from "./../assets/img/AboutUs.jpg";
const AboutUs = () => {
  return (
    <section className="wrapper wrapperDataPages">
      <h1 className="pagesTitle">Acerca de Nosotros</h1>
      <div className="aboutUs">
        <picture>
          <source srcSet={imgAboutWebp} type="image/webp" />
          <img
            className="aboutImg"
            loading="lazy"
            src={imgAbout}
            alt="About Us"
            width="360px"
            height="400px"
          />
        </picture>
        <div className="textAbout">
          <p className="first">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            reiciendis vitae? Cum saepe animi optio, perspiciatis soluta aliquam
            cupiditate doloribus ipsum nihil placeat iure quae. Doloremque qui
            nulla tempora ipsum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vero modi tenetur sunt! Tempora, amet ipsam commodi quod dicta ex
            adipisci saepe autem ipsa eligendi, fugiat illo? Magni, excepturi
            doloribus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est
            fugiat nemo a animi aliquid excepturi ad porro qui doloremque
            voluptates voluptatibus cupiditate, totam quidem placeat enim, ex
            atque sunt!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
