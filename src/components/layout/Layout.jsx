import { Outlet } from "react-router-dom";
import Container from "./Container";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Container>
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
}

export default Layout;