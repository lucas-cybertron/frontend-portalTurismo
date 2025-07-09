import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import AboutPage from "./pages/aboutPage"
import ContactPage from "./pages/contactPage"
import Home from "./pages/home"
import LoginPage from "./pages/loginPage"
import RegisterPage from "./pages/registerPage"
import ServicePage from "./pages/servicePage"

function App() {
  return (                                                       
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App
