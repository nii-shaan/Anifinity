import { useState, useEffect } from "react";
import Footer from "./pages/footer/Footer";
import NavBar from "./pages/header/NavBar";
import Modal from "./pages/Modal";

import { Outlet } from "react-router-dom";
function App() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 1000);
  }, []);

  return (
    <>
      {modal && <Modal closeFunction={setModal} />}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
