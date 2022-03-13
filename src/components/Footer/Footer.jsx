import Nav from "../Nav/Nav"
import "./Footer.scss"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="wrapperFooter wrapper">
            <Nav />
            <p className="copyRight">todos los derechos reservados</p>
        </div>
    <hr className="line" />
    </footer>
  )
}

export default Footer