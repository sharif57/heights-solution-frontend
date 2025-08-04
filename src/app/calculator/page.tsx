
'use client';
import React, { useState } from "react";

const payorTypes = ["Cash", "Medicaid", "HMO", "PPO", "Medicare Only", "Medicare & Supp"];

const initialData = {
  practiceSize: 2000,
  payorPercentages: [2.5, 12.5, 20, 20, 35, 10],
  dfuPercentages: [5.0, 1.0, 1.0, 0.0, 5.0, 5.0],
  qualifyingPercentages: [0.0, 10.0, 10.0, 10.0, 20.0, 15.0],
};

export default function FullCalculator() {
  const [practiceSize, setPracticeSize] = useState(initialData.practiceSize);
  const [payorPercentages, setPayorPercentages] = useState(initialData.payorPercentages);
  const [dfuPercentages, setDfuPercentages] = useState(initialData.dfuPercentages);
  const [qualifyingPercentages, setQualifyingPercentages] = useState(initialData.qualifyingPercentages);

  const updateValue = (type: string, index: number, value: number) => {
    const update = (arr: number[]) => {
      const updated = [...arr];
      updated[index] = value;
      return updated;
    };

    if (type === "payor") setPayorPercentages(update(payorPercentages));
    if (type === "dfu") setDfuPercentages(update(dfuPercentages));
    if (type === "qual") setQualifyingPercentages(update(qualifyingPercentages));
  };

  const calculate = (i: number) => {
    const patientCount = (payorPercentages[i] / 100) * practiceSize;
    const dfuCount = (dfuPercentages[i] / 100) * patientCount;
    const qualifying = (qualifyingPercentages[i] / 100) * dfuCount;
    return {
      patientCount: patientCount.toFixed(0),
      dfuCount: dfuCount.toFixed(1),
      qualifying: qualifying.toFixed(1),
    };
  };

  const totalDFU = payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).dfuCount), 0);
  const totalQualifying = payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).qualifying), 0);

  return (
    <div className="p-6 space-y-10 container mx-auto">
      {/* Practice Size Input */}
      <div>
        <label className="block font-semibold text-lg mb-2">Practice Size</label>
        <input
          type="number"
          value={practiceSize}
          onChange={(e) => setPracticeSize(Number(e.target.value))}
          className="border p-2 rounded-md w-60 shadow-sm"
        />
      </div>

      {/* Payor Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {payorTypes.map((payor, i) => {
          const values = calculate(i);
          return (
            <div key={payor} className="bg-white p-4 rounded-xl shadow space-y-3">
              <h2 className="text-xl font-bold text-blue-600">{payor}</h2>

              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <label className="text-xs font-medium">Payor %</label>
                  <input
                    type="number"
                    value={payorPercentages[i]}
                    onChange={(e) => updateValue("payor", i, Number(e.target.value))}
                    className="w-full border p-1 rounded"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium">DFU %</label>
                  <input
                    type="number"
                    value={dfuPercentages[i]}
                    onChange={(e) => updateValue("dfu", i, Number(e.target.value))}
                    className="w-full border p-1 rounded"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium">Qualifying %</label>
                  <input
                    type="number"
                    value={qualifyingPercentages[i]}
                    onChange={(e) => updateValue("qual", i, Number(e.target.value))}
                    className="w-full border p-1 rounded"
                  />
                </div>

                <div className="pt-2 text-sm text-gray-800 space-y-1">
                  <p><b>Patients:</b> {values.patientCount}</p>
                  <p><b>DFU Count:</b> {values.dfuCount}</p>
                  <p><b>Qualifying:</b> {values.qualifying}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Table */}
      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Summary Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Total</th>
                {payorTypes.map((payor, i) => (
                  <th key={i} className="p-2 border">{payor}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row 1: % of Patient Base */}
              <tr>
                <td className="p-2 border font-medium">% of Patient Base</td>
                <td className="p-2 border">100%</td>
                {payorPercentages.map((p, i) => (
                  <td key={i} className="p-2 border">{p.toFixed(1)}%</td>
                ))}
              </tr>

              {/* Row 2: Unique Patients / Yr */}
              <tr>
                <td className="p-2 border font-medium">Unique Pats / Yr</td>
                <td className="p-2 border">{practiceSize}</td>
                {payorPercentages.map((p, i) => (
                  <td key={i} className="p-2 border">
                    {((p / 100) * practiceSize).toFixed(0)}
                  </td>
                ))}
              </tr>

              {/* Row 3: % DFU Patients */}
              <tr>
                <td className="p-2 border font-medium">% DFU Patients</td>
                <td className="p-2 border">
                  {((totalDFU / practiceSize) * 100).toFixed(1)}%
                </td>
                {dfuPercentages.map((dfu, i) => (
                  <td key={i} className="p-2 border">{dfu.toFixed(1)}%</td>
                ))}
              </tr>

              {/* Row 4: Qualifying Patients */}
              <tr>
                <td className="p-2 border font-medium">Qualifying Patients</td>
                <td className="p-2 border">{totalQualifying.toFixed(1)}</td>
                {payorTypes.map((_, i) => (
                  <td key={i} className="p-2 border">{calculate(i).qualifying}</td>
                ))}
              </tr>

              {/* Row 5: % Qualifying of DFU Patients */}
              <tr>
                <td className="p-2 border font-medium">% Qualifying of DFU</td>
                <td className="p-2 border">
                  {totalDFU > 0 ? ((totalQualifying / totalDFU) * 100).toFixed(1) + "%" : "0.0%"}
                </td>
                {payorTypes.map((_, i) => {
                  const dfu = Number(calculate(i).dfuCount);
                  const qual = Number(calculate(i).qualifying);
                  return (
                    <td key={i} className="p-2 border">
                      {dfu > 0 ? ((qual / dfu) * 100).toFixed(1) + "%" : "0.0%"}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}




