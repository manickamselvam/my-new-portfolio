import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import About from "./component/About";
import Footer from "./component/Footer";
import ContactPage from "./pages/ContactPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pl-10 pr-10 pt-5">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
