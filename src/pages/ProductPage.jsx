import Footer from "../Footer";
import Cart from "../Cart";
import Navbar from "../Navbar";
import Chatbot from "../Chatbot";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid border">
        <h1 className="page-direction">
          <span>Home</span>
          <span>/</span>
          <span>Men</span>
          <span>/</span>
          <span>Shoes</span>
          <span>/</span>
        </h1>
        <Chatbot />
      </div>

      <Footer />
    </>
  );
}
