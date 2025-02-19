import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const BarCharts: React.FC = () => {
    return (
        <div className="w-[95%] max-w-lg bg-[#0a1539] rounded-lg shadow-sm p-4 md:p-2">
          <div className="flex justify-between pb-6 mb-6 border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center me-3">
                <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                  <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
                  <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
                </svg>
              </div>
              <div>
                <h5 className="text-2xl font-bold text-white pb-1">3.4k</h5>
                <p className="text-3x1 font-normal text-white">Leads generated per week</p>
              </div>
            </div>
            <div>
              <span className="bg-green-900 text-green-300 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md">
                <svg className="w-2.5 h-2.5 me-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                </svg>
                42.5%
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <dl className="flex items-center">
              <dt className="text-gray-400 text-sm font-normal me-1">Money spent:</dt>
              <dd className="text-white text-sm font-semibold">$3,232</dd>
            </dl>
            <dl className="flex items-center justify-end">
              <dt className="text-gray-400 text-sm font-normal me-1">Conversion rate:</dt>
              <dd className="text-white text-sm font-semibold">1.2%</dd>
            </dl>
          </div>

          {/* Gráfico de Barras */}
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={[
              { name: "Mon", Leads: 100, Clicks: 80 },
              { name: "Tue", Leads: 60, Clicks: 30 },
              { name: "Wed", Leads: 130, Clicks: 100 },
              { name: "Thu", Leads: 90, Clicks: 70 },
              { name: "Fri", Leads: 180, Clicks: 150 },
              { name: "Sat", Leads: 140, Clicks: 110 },
              { name: "Sun", Leads: 80, Clicks: 60 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="Leads" fill="#2563EB" />
              <Bar dataKey="Clicks" fill="#FBBF24" />
            </BarChart>
          </ResponsiveContainer>

          {/* Footer */}
          <div className="border-t border-gray-700 pt-5 flex justify-between items-center">
          <select className="bg-gray-700 text-white px-1 py-0 h- rounded-lg text-xs">
                <option>Last week</option>
                <option>Last month</option>
              </select>
          </div>
        </div>
        );
    };
    
    const BarFinance: React.FC = () => {
        return (
            <div className="max-w-sm w-full bg-[#0a1539] rounded-lg shadow-sm p-4 md:p-2">
                <div className="flex justify-between border-b border-gray-700 pb-3">
                    <dl>
                        <dt className="text-base font-normal text-gray-400 pb-1">Campain costs x Income</dt>
                        <dd className="leading-none text-2xl font-bold text-white">$5,405</dd>
                    </dl>
                    <div>
                        <span className="bg-green-900 text-green-300 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md">
                            Profit rate 180.5%
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 py-3">
                    <dl>
                        <dt className="text-base font-normal text-gray-400 pb-1">Income</dt>
                        <dd className="leading-none text-xl font-bold text-green-400">$14,635</dd>
                    </dl>
                    <dl>
                        <dt className="text-base font-normal text-gray-400 pb-1">Expense</dt>
                        <dd className="leading-none text-xl font-bold text-red-500">-$5,230</dd>
                    </dl>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart layout="vertical" data={[
                        { name: "07/02", Income: 2300, Expense: 800 },
                        { name: "14/02", Income: 2100, Expense: 950 },
                        { name: "21/02", Income: 2400, Expense: 1000 },
                        { name: "28/02", Income: 2200, Expense: 870 },
                        { name: "07/03", Income: 2000, Expense: 930 },
                        { name: "14/03", Income: 2500, Expense: 1100 }
                    ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" stroke="#ccc" />
                        <YAxis dataKey="name" type="category" stroke="#ccc" />
                        <Tooltip />
                        <Bar dataKey="Income" fill="#10B981" />
                        <Bar dataKey="Expense" fill="#EF4444" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
    
    export { BarCharts, BarFinance };