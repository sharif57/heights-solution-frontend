'use client'
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

  return (
    <div className="p-6 space-y-8 container mx-auto">
      <div>
        <label className="block font-semibold text-lg mb-2">Practice Size</label>
        <input
          type="number"
          value={practiceSize}
          onChange={(e) => setPracticeSize(Number(e.target.value))}
          className="border p-2 rounded-md w-60 shadow-sm"
        />
      </div>

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
    </div>
  );
}
