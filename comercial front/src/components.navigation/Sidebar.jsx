const Sidebar = () => {
    return (
      <aside className="w-64 h-screen bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li><a href="/" className="block p-2 rounded hover:bg-gray-700">Home</a></li>
          <li><a href="#" className="block p-2 rounded hover:bg-gray-700">Dashboard</a></li>
          <li><a href="#" className="block p-2 rounded hover:bg-gray-700">Configurações</a></li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  