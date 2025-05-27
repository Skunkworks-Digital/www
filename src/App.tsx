import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ProcessPage from "./pages/ProcessPage";
import GoToMarketPage from "./pages/GoToMarketPage";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieConsent from "./components/CookieConsent";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/go-to-market" element={<GoToMarketPage />} />
          </Routes>
        </Layout>
        <WhatsAppButton />
        <CookieConsent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
