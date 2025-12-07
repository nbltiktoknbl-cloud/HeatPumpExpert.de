import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ComparisonData } from '../types';

const data: ComparisonData[] = [
  { year: 1, gasCost: 2500, heatPumpCost: 1400 },
  { year: 3, gasCost: 2900, heatPumpCost: 1550 },
  { year: 5, gasCost: 3500, heatPumpCost: 1700 },
  { year: 10, gasCost: 4800, heatPumpCost: 2100 },
  { year: 15, gasCost: 6500, heatPumpCost: 2600 },
];

export const RunningCostsChart: React.FC = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-100 my-8">
      <h3 className="text-center font-bold text-lg mb-4 text-gray-800">Prognose Heizkosten pro Jahr: Gas vs. Wärmepumpe (2025-2040)</h3>
      
      {/* Dedicated wrapper with explicit height for Recharts to measure correctly */}
      <div className="w-full h-[350px] min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" tickFormatter={(val) => `Jahr ${val}`} />
            <YAxis unit=" €" />
            <Tooltip 
              formatter={(value: number) => [`${value} €`, 'Jährliche Kosten']}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              labelFormatter={(label) => `Jahr ${label}`}
            />
            <Legend />
            <Bar dataKey="gasCost" name="Alte Gasheizung" fill="#ef4444" radius={[4, 4, 0, 0]} />
            <Bar dataKey="heatPumpCost" name="Moderne Wärmepumpe" fill="#22c55e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        *Annahme: 20.000 kWh Wärmebedarf. Gaspreis steigt durch CO2-Steuer (BEHG). Wärmepumpe SCOP 3,5.
      </p>
    </div>
  );
};