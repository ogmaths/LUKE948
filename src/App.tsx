import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SafeguardingPage from "./pages/SafeguardingPage";
import ApplyPage from "./pages/ApplyPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/safeguarding" element={<SafeguardingPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </Layout>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;