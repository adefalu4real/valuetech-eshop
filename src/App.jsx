import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Header, Footer } from "./components";
// Pages
import { Home, Contact, Login, Register, Reset, Admin } from "./pages";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminOnlyRouter from "./components/adminOnlyRouter/AdminOnlyRouter";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />

          <Route
            path="/admin/*"
            element={
              <AdminOnlyRouter>
                <Admin />
              </AdminOnlyRouter>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
