import { Outlet } from "react-router-dom";
import Container from "./Container";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ language, setLanguage }) {
  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />

      <Container>
        <main className="pt-24">
          <Outlet
            context={{
              language,
              setLanguage,
            }}
          />
        </main>

        <Footer />
      </Container>
    </>
  );
}

export default Layout;