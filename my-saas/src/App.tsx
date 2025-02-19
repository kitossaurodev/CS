import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Protocols from "./pages/Protocols";
import Goals from "./pages/Goals";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="min-h-screen text-white bg-[linear-gradient(to_right,#142862,#2563EB,#142862)]">
      <Navbar />
      <main className="p-6 mt-16">
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />  {/* Alias para Dashboard */}
          <Route path="/tables" element={<Tables />} />
          <Route path="/protocols" element={<Protocols />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;



