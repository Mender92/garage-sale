import { Outlet } from "react-router-dom";
import Container from "./Container";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />

      <Container>
        <main className="pt-24">
          <Outlet />
        </main>

        <Footer />
      </Container>
    </>
  );
}

export default Layout;