import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const organicData = [
  { name: "01/25", Tráfego: 2400, Conversão: 1200 },
  { name: "02/25", Tráfego: 3200, Conversão: 1300 },
  { name: "03/25", Tráfego: 2800, Conversão: 1600 },
  { name: "04/25", Tráfego: 3600, Conversão: 2100 },
  { name: "05/25", Tráfego: 4100, Conversão: 2500 },
];

const paidData = [
  { name: "01/25", Tráfego: 3000, Conversão: 1500 },
  { name: "02/25", Tráfego: 4000, Conversão: 1800 },
  { name: "03/25", Tráfego: 4500, Conversão: 2200 },
  { name: "04/25", Tráfego: 5000, Conversão: 2700 },
  { name: "05/25", Tráfego: 5500, Conversão: 3200 },
];

const LineCharts: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Gráfico Orgânico */}
      <div className="w-[95%] max-w-lg bg-[#0d124b] rounded-lg shadow-sm p-4 md:p-6">
        <h3 className="text-center text-gray-300 text-xl font-semibold mb-6">Tráfego Orgânico</h3>
        <div className="flex justify-between mb-2">
          <div className="grid gap-2 grid-cols-2">
            <div>
              <h5 className="text-gray-400 text-xs font-normal mb-1">Tráfego</h5>
              <p className="text-white text-xl font-bold">42,3k</p>
            </div>
            <div>
              <h5 className="text-gray-400 text-xs font-normal mb-1">Conversão</h5>
              <p className="text-white text-xl font-bold">25,6k</p>
            </div>
          </div>
          <select className="bg-gray-700 text-white px-1 py-0 h-5 rounded-lg text-xs">
            <option>Last week</option>
            <option>Last month</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={organicData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line type="monotone" dataKey="Tráfego" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="Conversão" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico Pago */}
      <div className="w-[95%] max-w-lg bg-[#0d124b] rounded-lg shadow-sm p-4 md:p-6">
        <h3 className="text-center text-gray-300 text-xl font-semibold mb-6">Tráfego Pago</h3>
        <div className="flex justify-between mb-2">
          <div className="grid gap-2 grid-cols-2">
            <div>
              <h5 className="text-gray-400 text-xs font-normal mb-1">Tráfego</h5>
              <p className="text-white text-xl font-bold">55,0k</p>
            </div>
            <div>
              <h5 className="text-gray-400 text-xs font-normal mb-1">Conversão</h5>
              <p className="text-white text-xl font-bold">32,0k</p>
            </div>
          </div>
          <select className="bg-gray-700 text-white px-1 py-0 h-5 rounded-lg text-xs">
            <option>Last week</option>
            <option>Last month</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={paidData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line type="monotone" dataKey="Tráfego" stroke="#ff7300" strokeWidth={2} />
            <Line type="monotone" dataKey="Conversão" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineCharts;

