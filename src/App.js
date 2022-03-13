import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Clases from "./pages/Clases";
import Gallery from "./pages/Gallery";
import "./App.scss";
import Article from "./pages/Article";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<AboutUs />} />
        <Route path="clases" element={<Clases />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="articulo/:id" element={<Article />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
