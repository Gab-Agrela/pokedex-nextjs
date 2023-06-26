import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
