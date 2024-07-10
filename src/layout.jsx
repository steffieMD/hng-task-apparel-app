import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          {children}
        </div>
      <Footer />
    </>
  )
}

export default RootLayout;
