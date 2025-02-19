import React from "react";
import LineCharts from "../charts/LineCharts";
import { BarCharts, BarFinance } from "../charts/BarCharts";
import DonutCharts from "../charts/DonutCharts";


const Dashboard: React.FC = () => {
  return (
    <div className="p-1 mt-1">
      <h1 className="text-3xl font-inter text-gray-300 font-inter mb-5">D a s h b o a r d</h1>

      {/* Layout em duas colunas */}
      <div className="grid grid-cols-[25%_75%] gap-1">
        {/* Coluna da Esquerda (Gráficos) */}
        <div className="flex flex-col gap-6">
        <LineCharts />
        </div>

        {/* Coluna da Direita (Pasta de Arquivos) */}
        <div className="bg-[#0d124b] rounded-lg p-6 relative w-full min-h-[400px]">
            {/* Aba da Pasta - Group Buttons estilizado */}
            <div className="absolute -top-6 right-5 scale-110">
              <div className="inline-flex rounded-lg bg-[#0d124b] shadow-sm" role="group">
                {/* Insta */}
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#0d124b] focus:z-10 focus:ring-2 focus:ring-gray-600 focus:text-blue-400 rounded-l-lg"
                >
                  <img src="/public/insta.webp" alt="Profile" className="w-4 h-4 me-2" />
                  Instagram
                </button>

                {/* Linkedin */}
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#0d124b] focus:z-10 focus:ring-2 focus:ring-gray-600 focus:text-blue-400 border-l border-gray-700"
                >
                  <img src="/public/linkedin.png" alt="Profile" className="w-4 h-4 me-2" />
                  Linkedin
                </button>

                {/* Newsletter */}
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#0d124b] focus:z-10 focus:ring-2 focus:ring-gray-600 focus:text-blue-400 border-l border-gray-700 rounded-r-lg"
                >
                  <img src="/public/logo.png" alt="Profile" className="w-4 h-4 me-2" />
                  Newsletter
                </button>
              </div>
            </div>
             {/* Conteúdo da Pasta - Agora dividido em 3 colunas */}
            <div className="grid grid-cols-[40%_25%_33%] gap-4">
            {/* Coluna da Esquerda */}
            <div className="bg-[#0a1539] border-2 border-[#939394] rounded-lg p-4">
              <BarCharts />
            </div>

            {/* Coluna do Meio */}
            <div className="bg-[#0a1539] border-2 border-[#939394] rounded-lg p-4">
            <DonutCharts />
            </div>

            {/* Coluna da Direita */}
            <div className="bg-[#0a1539] border-2 border-[#939394] rounded-lg p-4">
            <BarFinance />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;