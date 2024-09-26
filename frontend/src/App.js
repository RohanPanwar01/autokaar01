import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './pages/ScrollToTop'; 
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Services from "./pages/Ourservice";
import Bookapointment from "./pages/Bookapointment"; 
import Washing from "./pages/Washing";
import Paintprotectionfilm from "./pages/paintprotectionfilm";
import Creamiccoating from "./pages/Creamiccoating";
import Interiortreatment from "./pages/Interiortreatment";
import Airconditioner from "./pages/Airconditioner";
import Engineprotection from "./pages/Engineprotection";
import Headlamp from "./pages/Headlamp";
import Windshieldrestoration from "./pages/windshieldrestoration";
import Exteriortreatment from "./pages/Exteriortreatment";
import ANTIRUSTPROTECTION from "./pages/Antirustprotection";
import HOWWEWORK from "./pages/howwework";
import TermsnCondition from "./pages/TermsCondition";
import CookiesPolicy from "./pages/CookiesPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Aboutus from "./pages/Aboutus";
import ResponsiveLayout from "./pages/partner";
import whatsappicon from './image/whatsapp-icon.png';
import FAQPage from './pages/faq';
import LoginForm from './components/login';

function App() {
  return (
    <div>
  <LoginForm/>
{/* 
      <BrowserRouter>
        <Navbar />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bookanappointment" element={<Bookapointment />} />
          <Route path="/foamwash" element={<Washing />} />
          <Route path="/paintprotectionfilm" element={<Paintprotectionfilm />} />
          <Route path="/ceramiccoating" element={<Creamiccoating />} />
          <Route path="/interiortreatment" element={<Interiortreatment />} />
          <Route path="/exteriortreatment" element={<Exteriortreatment />} />
          <Route path="/airconditioner" element={<Airconditioner />} />
          <Route path="/engineprotection" element={<Engineprotection />} />
          <Route path="/headlamprestoration" element={<Headlamp />} />
          <Route path="/windshieldrestoration" element={<Windshieldrestoration />} />
          <Route path="/antirustprotection" element={<ANTIRUSTPROTECTION />} />
          <Route path="/howwework" element={<HOWWEWORK />} />
          <Route path="/termsnondition" element={<TermsnCondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/cookiespolicy" element={<CookiesPolicy />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/become-a-partner" element={<ResponsiveLayout />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      <div className="whatsappicon"> <a href="https://wa.me/+919981040082" target="_blank"> <img src={whatsappicon} alt="" /></a> </div>
    </div>
  );
}

export default App;
