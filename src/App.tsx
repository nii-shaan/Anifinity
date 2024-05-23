import { useState } from "react";
import Footer from "./pages/footer/Footer";
import NavBar from "./pages/header/NavBar";
import Alert from "./pages/Alert";

import { Outlet } from "react-router-dom";
function App() {
  const [modal, setModal] = useState(true);
  console.log(modal);

  return (
    <>
      {modal && <Alert closeFunction={setModal} />}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
