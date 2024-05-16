
import Footer from "./pages/footer/Footer";
import NavBar from "./pages/header/NavBar";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
