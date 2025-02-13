import { Sidebar } from "../components.navigation/Sidebar";
import { Navbar } from "../components.navigation/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Área principal */}
      <div className="flex flex-col flex-1 overflow-auto">
        {/* Navbar fixa no topo */}
        <Navbar />

        {/* Conteúdo dinâmico da página */}
        <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
