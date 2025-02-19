import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen text-white bg-[linear-gradient(to_right,#142862,#2563EB,#142862)]">
      <Navbar />
      <main className="p-6 mt-16">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;


