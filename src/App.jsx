import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPageContent from "./LandingPageContent";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <Router>
      <Analytics/>
      <Routes>
        <Route path="/" element={<Navigate to="/dev" replace />} />
        <Route path="/:role" element={<LandingPageContent />} />
      </Routes>
    </Router>
  );
}
