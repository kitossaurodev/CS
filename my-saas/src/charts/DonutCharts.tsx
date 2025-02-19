import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Linkedin", value: 40, color: "#2563EB" },
  { name: "Newsletter", value: 30, color: "#10B981" },
  { name: "Organic", value: 20, color: "#FBBF24" },
  { name: "Instagram", value: 10, color: "#EC4899" },
];

const DonutCharts: React.FC = () => {
  return (
    <div className="max-w-sm w-full bg-[#0a1539] rounded-lg shadow-sm p-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-xl font-bold text-white">Atividade das Redes</h5>
      </div>

      {/* Opções de Dispositivo */}
      <div className="flex justify-center gap-4 text-gray-300 text-sm">
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="checkbox" className="accent-blue-600" />
          Tenet 
        </label>
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="checkbox" className="accent-blue-600" />
          Passion
        </label>
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="checkbox" className="accent-blue-600" />
          Blossom
        </label>
      </div>

      {/* Donut Chart */}
      <div className="relative flex items-center justify-center h-60">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70} // Donut effect
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute text-center">
          <p className="text-white text-2xl font-bold">$66.4k</p>
          <p className="text-gray-400 text-sm">Unique visitors</p>
        </div>
      </div>

      {/* Legenda */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
            <span className="text-gray-300 text-sm">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-between items-center">
        <button className="text-gray-400 text-sm hover:text-white">Last 15 days</button>
      </div>
    </div>
  );
};

export default DonutCharts;
