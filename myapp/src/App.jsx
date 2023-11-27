import "./App.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import {Outlet} from "react-router-dom"
function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
