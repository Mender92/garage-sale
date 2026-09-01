import { useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "./Container";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      <Container>
        <main className="pt-24">
          <Outlet context={{ language }} />
        </main>

        <Footer />
      </Container>
    </>
  );
}

export default Layout;