
// 'use client';
// import React, { useState } from "react";

// const payorTypes = ["Cash", "Medicaid", "HMO", "PPO", "Medicare Only", "Medicare & Supp"];

// const initialData = {
//   practiceSize: 2000,
//   payorPercentages: [2.5, 12.5, 20, 20, 35, 10],
//   dfuPercentages: [5.0, 1.0, 1.0, 0.0, 5.0, 5.0],
//   qualifyingPercentages: [0.0, 10.0, 10.0, 10.0, 20.0, 15.0],
// };

// export default function FullCalculator() {
//   const [practiceSize, setPracticeSize] = useState(initialData.practiceSize);
//   const [payorPercentages, setPayorPercentages] = useState(initialData.payorPercentages);
//   const [dfuPercentages, setDfuPercentages] = useState(initialData.dfuPercentages);
//   const [qualifyingPercentages, setQualifyingPercentages] = useState(initialData.qualifyingPercentages);

//   const updateValue = (type: string, index: number, value: number) => {
//     const update = (arr: number[]) => {
//       const updated = [...arr];
//       updated[index] = value;
//       return updated;
//     };

//     if (type === "payor") setPayorPercentages(update(payorPercentages));
//     if (type === "dfu") setDfuPercentages(update(dfuPercentages));
//     if (type === "qual") setQualifyingPercentages(update(qualifyingPercentages));
//   };

//   const calculate = (i: number) => {
//     const patientCount = (payorPercentages[i] / 100) * practiceSize;
//     const dfuCount = (dfuPercentages[i] / 100) * patientCount;
//     const qualifying = (qualifyingPercentages[i] / 100) * dfuCount;
//     return {
//       patientCount: patientCount.toFixed(0),
//       dfuCount: dfuCount.toFixed(1),
//       qualifying: qualifying.toFixed(1),
//     };
//   };

//   const totalDFU = payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).dfuCount), 0);
//   const totalQualifying = payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).qualifying), 0);

//   return (
//     <div className="p-6 space-y-10 container mx-auto">
//       {/* Practice Size Input */}
//       <div>
//         <label className="block font-semibold text-lg mb-2">Practice Size</label>
//         <input
//           type="number"
//           value={practiceSize}
//           onChange={(e) => setPracticeSize(Number(e.target.value))}
//           className="border p-2 rounded-md w-60 shadow-sm"
//         />
//       </div>

//       {/* Payor Cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {payorTypes.map((payor, i) => {
//           const values = calculate(i);
//           return (
//             <div key={payor} className="bg-white p-4 rounded-xl shadow space-y-3">
//               <h2 className="text-xl font-bold text-blue-600">{payor}</h2>

//               <div className="space-y-2 text-sm text-gray-700">
//                 <div>
//                   <label className="text-xs font-medium">Payor %</label>
//                   <input
//                     type="number"
//                     value={payorPercentages[i]}
//                     onChange={(e) => updateValue("payor", i, Number(e.target.value))}
//                     className="w-full border p-1 rounded"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-medium">DFU %</label>
//                   <input
//                     type="number"
//                     value={dfuPercentages[i]}
//                     onChange={(e) => updateValue("dfu", i, Number(e.target.value))}
//                     className="w-full border p-1 rounded"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-medium">Qualifying %</label>
//                   <input
//                     type="number"
//                     value={qualifyingPercentages[i]}
//                     onChange={(e) => updateValue("qual", i, Number(e.target.value))}
//                     className="w-full border p-1 rounded"
//                   />
//                 </div>

//                 <div className="pt-2 text-sm text-gray-800 space-y-1">
//                   <p><b>Patients:</b> {values.patientCount}</p>
//                   <p><b>DFU Count:</b> {values.dfuCount}</p>
//                   <p><b>Qualifying:</b> {values.qualifying}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Summary Table */}
//       <div className="border-t pt-6">
//         <h2 className="text-2xl font-bold mb-4 text-gray-700">Summary Table</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-2 border">Category</th>
//                 <th className="p-2 border">Total</th>
//                 {payorTypes.map((payor, i) => (
//                   <th key={i} className="p-2 border">{payor}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {/* Row 1: % of Patient Base */}
//               <tr>
//                 <td className="p-2 border font-medium">% of Patient Base</td>
//                 <td className="p-2 border">100%</td>
//                 {payorPercentages.map((p, i) => (
//                   <td key={i} className="p-2 border">{p.toFixed(1)}%</td>
//                 ))}
//               </tr>

//               {/* Row 2: Unique Patients / Yr */}
//               <tr>
//                 <td className="p-2 border font-medium">Unique Pats / Yr</td>
//                 <td className="p-2 border">{practiceSize}</td>
//                 {payorPercentages.map((p, i) => (
//                   <td key={i} className="p-2 border">
//                     {((p / 100) * practiceSize).toFixed(0)}
//                   </td>
//                 ))}
//               </tr>

//               {/* Row 3: % DFU Patients */}
//               <tr>
//                 <td className="p-2 border font-medium">% DFU Patients</td>
//                 <td className="p-2 border">
//                   {((totalDFU / practiceSize) * 100).toFixed(1)}%
//                 </td>
//                 {dfuPercentages.map((dfu, i) => (
//                   <td key={i} className="p-2 border">{dfu.toFixed(1)}%</td>
//                 ))}
//               </tr>

//               {/* Row 4: Qualifying Patients */}
//               <tr>
//                 <td className="p-2 border font-medium">Qualifying Patients</td>
//                 <td className="p-2 border">{totalQualifying.toFixed(1)}</td>
//                 {payorTypes.map((_, i) => (
//                   <td key={i} className="p-2 border">{calculate(i).qualifying}</td>
//                 ))}
//               </tr>

//               {/* Row 5: % Qualifying of DFU Patients */}
//               <tr>
//                 <td className="p-2 border font-medium">% Qualifying of DFU</td>
//                 <td className="p-2 border">
//                   {totalDFU > 0 ? ((totalQualifying / totalDFU) * 100).toFixed(1) + "%" : "0.0%"}
//                 </td>
//                 {payorTypes.map((_, i) => {
//                   const dfu = Number(calculate(i).dfuCount);
//                   const qual = Number(calculate(i).qualifying);
//                   return (
//                     <td key={i} className="p-2 border">
//                       {dfu > 0 ? ((qual / dfu) * 100).toFixed(1) + "%" : "0.0%"}
//                     </td>
//                   );
//                 })}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }




// 'use client';
// import React, { useState } from "react";

// const payorTypes = ["Cash", "Medicaid", "HMO", "PPO", "Medicare Only", "Medicare & Supp"];

// const initialData = {
//   practiceSize: 2000,
//   payorPercentages: [2.5, 12.5, 20, 20, 35, 10],
//   dfuPercentages: [5.0, 1.0, 1.0, 0.0, 5.0, 5.0],
//   qualifyingPercentages: [0.0, 10.0, 10.0, 10.0, 20.0, 15.0],
//   woundSizes: [5.0, 5.0, 5.0, 5.0, 12.0, 12.0],
//   products: ["Pillai - 1", "Pillai - 2", "Pillai - 2", "Pillai - 1", "Arsenal - 1", "Arsenal - 1"],
//   ucr: [1600, 800, 800, 1600, 2652, 2652],
//   commissionPercentages: [20, 10, 10, 20, 30, 30],
//   treatmentWeeks: 10,
//   woundShrinkage: 10.0,
//   txtCancellation: 30.0,
//   materialsCost: 60.0,
//   billingExp: 2.91,
//   ccFees: [2.5, 0, 0, 0, 0, 0],
//   insuranceSG: 6.0,
//   leadGenCost: 5.0,
//   insuranceDist: 0.5,
// };

// export default function FullCalculator() {
//   const [practiceSize, setPracticeSize] = useState(initialData.practiceSize);
//   const [payorPercentages, setPayorPercentages] = useState(initialData.payorPercentages);
//   const [dfuPercentages, setDfuPercentages] = useState(initialData.dfuPercentages);
//   const [qualifyingPercentages, setQualifyingPercentages] = useState(initialData.qualifyingPercentages);
//   const [woundSizes, setWoundSizes] = useState(initialData.woundSizes);
//   const [products, setProducts] = useState(initialData.products);
//   const [ucr, setUcr] = useState(initialData.ucr);
//   const [commissionPercentages, setCommissionPercentages] = useState(initialData.commissionPercentages);
//   const [treatmentWeeks, setTreatmentWeeks] = useState(initialData.treatmentWeeks);
//   const [woundShrinkage, setWoundShrinkage] = useState(initialData.woundShrinkage);
//   const [txtCancellation, setTxtCancellation] = useState(initialData.txtCancellation);
//   const [materialsCost, setMaterialsCost] = useState(initialData.materialsCost);
//   const [billingExp, setBillingExp] = useState(initialData.billingExp);
//   const [ccFees, setCcFees] = useState(initialData.ccFees);
//   const [insuranceSG, setInsuranceSG] = useState(initialData.insuranceSG);
//   const [leadGenCost, setLeadGenCost] = useState(initialData.leadGenCost);
//   const [insuranceDist, setInsuranceDist] = useState(initialData.insuranceDist);

//   const updateValue = (type: string, index: number, value: number) => {
//     const update = (arr: number[]) => {
//       const updated = [...arr];
//       updated[index] = value;
//       return updated;
//     };
//     if (type === "payor") setPayorPercentages(update(payorPercentages));
//     if (type === "dfu") setDfuPercentages(update(dfuPercentages));
//     if (type === "qual") setQualifyingPercentages(update(qualifyingPercentages));
//     if (type === "wound") setWoundSizes(update(woundSizes));
//     if (type === "ucr") setUcr(update(ucr));
//     if (type === "commission") setCommissionPercentages(update(commissionPercentages));
//     if (type === "ccFees") setCcFees(update(ccFees));
//   };

//   const updateProduct = (index: number, value: string) => {
//     const updated = [...products];
//     updated[index] = value;
//     setProducts(updated);
//   };

//   const calculate = (i: number) => {
//     const patientCount = (payorPercentages[i] / 100) * practiceSize;
//     const dfuCount = (dfuPercentages[i] / 100) * patientCount;
//     const qualifying = (qualifyingPercentages[i] / 100) * dfuCount;

//     // Profit calculations
//     const woundSize = woundSizes[i];
//     const membraneMin = Math.ceil(woundSize);
//     const membraneOverage = membraneMin * 0.1;
//     const unitsWk1 = membraneMin + membraneOverage;

//     let totalUnits = 0;
//     let currentSize = woundSize;
//     for (let week = 1; week <= treatmentWeeks; week++) {
//       const units = week === 1 ? unitsWk1 : Math.ceil(currentSize * (1 + 0.1));
//       totalUnits += units;
//       currentSize *= (1 - woundShrinkage / 100);
//     }

//     const cancelledUnits = totalUnits * (txtCancellation / 100);
//     const finalUnits = totalUnits - cancelledUnits;

//     const reimbursement = ucr[i] * (1 - (i === 0 ? 0.3 : i === 2 ? 0.2 : i === 3 ? 0.4 : i === 4 ? 0.8 : i === 5 ? 0.8 : 0));
//     const supplementalIns = i === 5 ? ucr[i] * 0.2 : 0;
//     const totalReimbursement = (reimbursement + supplementalIns) * finalUnits;

//     const materialsCostValue = (materialsCost / 100) * ucr[i] * finalUnits;
//     const grossProfit = totalReimbursement - materialsCostValue;

//     const billingExpense = (billingExp / 100) * totalReimbursement;
//     const ccFee = (ccFees[i] / 100) * totalReimbursement;
//     const insuranceSGValue = (insuranceSG / 100) * totalReimbursement;
//     const sga = billingExpense + ccFee + insuranceSGValue;

//     const providerProfit = grossProfit - sga;
//     const providerProfitPerPatient = providerProfit / (qualifying || 1);

//     const commission = (commissionPercentages[i] / 100) * materialsCostValue;
//     const leadGen = (leadGenCost / 100) * totalReimbursement;
//     const insuranceDistValue = (insuranceDist / 100) * totalReimbursement;
//     const distributorProfit = commission - leadGen + insuranceDistValue;
//     const distributorProfitPerPatient = distributorProfit / (qualifying || 1);

//     const leadGenSalesCommission = leadGen * qualifying;

//     return {
//       patientCount: patientCount.toFixed(0),
//       dfuCount: dfuCount.toFixed(1),
//       qualifying: qualifying.toFixed(1),
//       totalUnits: finalUnits.toFixed(0),
//       providerProfit: (providerProfit * qualifying).toFixed(0),
//       distributorProfit: (distributorProfit * qualifying).toFixed(0),
//       leadGenSalesCommission: leadGenSalesCommission.toFixed(0),
//     };
//   };

//   const totalDFU = payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).dfuCount), 0);
//   const totalQualifying = payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).qualifying), 0);
//   const totalProviderProfit = payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).providerProfit), 0);
//   const totalDistributorProfit = payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).distributorProfit), 0);
//   const totalLeadGenSalesCommission = payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).leadGenSalesCommission), 0);

//   return (
//     <div className="p-6 space-y-10 container mx-auto">
//       {/* Practice Size Input */}
//       <div>
//         <label className="block font-semibold text-lg mb-2">Practice Size</label>
//         <input
//           type="number"
//           value={practiceSize}
//           onChange={(e) => setPracticeSize(Number(e.target.value))}
//           className="border p-2 rounded-md w-60 shadow-sm"
//         />
//       </div>

// {/* Global Inputs */}
// <div className="space-y-4">
//   <h2 className="text-xl font-bold text-gray-700">Global Settings</h2>
//   <div className="grid grid-cols-2 gap-4">
//     <div>
//       <label className="text-xs font-medium">Treatment Weeks</label>
//       <input
//         type="number"
//         value={treatmentWeeks}
//         onChange={(e) => setTreatmentWeeks(Number(e.target.value))}
//         className="w-full border p-1 rounded"
//       />
//     </div>
//     <div>
//       <label className="text-xs font-medium">Wound Shrinkage (%)</label>
//       <input
//         type="number"
//         value={woundShrinkage}
//         onChange={(e) => setWoundShrinkage(Number(e.target.value))}
//         className="w-full border p-1 rounded"
//       />
//     </div>
//     <div>
//       <label className="text-xs font-medium">Treatment Cancellation (%)</label>
//       <input
//         type="number"
//         value={txtCancellation}
//         onChange={(e) => setTxtCancellation(Number(e.target.value))}
//         className="w-full border p-1 rounded"
//       />
//     </div>
//     <div>
//       <label className="text-xs font-medium">Materials Cost (% of UCR)</label>
//       <input
//         type="number"
//         value={materialsCost}
//         onChange={(e) => setMaterialsCost(Number(e.target.value))}
//         className="w-full border p-1 rounded"
//       />
//     </div>
//     <div>
//       <label className="text-xs font-medium">Billing Expense (%)</label>
//       <input
//         type="number"
//         value={billingExp}
//         onChange={(e) => setBillingExp(Number(e.target.value))}
//         className="w-full border p-1 rounded"
//       />
//     </div>
//     <div>
//       <label className="text-xs font-medium">Insurance SG&A (%)</label>
//       <input
//         type="number"
//         value={insuranceSG}
//         onChange={(e) => setInsuranceSG(Number(e.target.value))}
//         className="w-full border p-1 rounded"
//       />
//     </div>
//     <div>
//       <label className="text-xs font-medium">Lead Gen Cost (%)</label>
//       <input
//         type="number"
//         value={leadGenCost}
//         onChange={(e) => setLeadGenCost(Number(e.target.value))}
//         className="w-full border p-1 rounded"
//       />
//     </div>
//     <div>
//       <label className="text-xs font-medium">Insurance Distributor (%)</label>
//       <input
//         type="number"
//         value={insuranceDist}
//         onChange={(e) => setInsuranceDist(Number(e.target.value))}
//         className="w-full border p-1 rounded"
//       />
//     </div>
//   </div>
// </div>

// {/* Payor Cards */}
// <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//   {payorTypes.map((payor, i) => {
//     const values = calculate(i);
//     return (
//       <div key={payor} className="bg-white p-4 rounded-xl shadow space-y-3">
//         <h2 className="text-xl font-bold text-blue-600">{payor}</h2>
//         <div className="space-y-2 text-sm text-gray-700">
//           <div>
//             <label className="text-xs font-medium">Payor %</label>
//             <input
//               type="number"
//               value={payorPercentages[i]}
//               onChange={(e) => updateValue("payor", i, Number(e.target.value))}
//               className="w-full border p-1 rounded"
//             />
//           </div>
//           <div>
//             <label className="text-xs font-medium">DFU %</label>
//             <input
//               type="number"
//               value={dfuPercentages[i]}
//               onChange={(e) => updateValue("dfu", i, Number(e.target.value))}
//               className="w-full border p-1 rounded"
//             />
//           </div>
//           <div>
//             <label className="text-xs font-medium">Qualifying %</label>
//             <input
//               type="number"
//               value={qualifyingPercentages[i]}
//               onChange={(e) => updateValue("qual", i, Number(e.target.value))}
//               className="w-full border p-1 rounded"
//             />
//           </div>
//           <div>
//             <label className="text-xs font-medium">Wound Size (cm²)</label>
//             <input
//               type="number"
//               value={woundSizes[i]}
//               onChange={(e) => updateValue("wound", i, Number(e.target.value))}
//               className="w-full border p-1 rounded"
//             />
//           </div>
//           <div>
//             <label className="text-xs font-medium">Product</label>
//             <select
//               value={products[i]}
//               onChange={(e) => updateProduct(i, e.target.value)}
//               className="w-full border p-1 rounded"
//             >
//               {["Arsenal - 1", "Arsenal - 2", "Arsenal - 3", "Pillai - 1", "Pillai - 2", "Pillai - 3"].map((prod) => (
//                 <option key={prod} value={prod}>{prod}</option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="text-xs font-medium">UCR ($)</label>
//             <input
//               type="number"
//               value={ucr[i]}
//               onChange={(e) => updateValue("ucr", i, Number(e.target.value))}
//               className="w-full border p-1 rounded"
//             />
//           </div>
//           <div>
//             <label className="text-xs font-medium">Commission %</label>
//             <input
//               type="number"
//               value={commissionPercentages[i]}
//               onChange={(e) => updateValue("commission", i, Number(e.target.value))}
//               className="w-full border p-1 rounded"
//             />
//           </div>
//           <div>
//             <label className="text-xs font-medium">CC Fees (%)</label>
//             <input
//               type="number"
//               value={ccFees[i]}
//               onChange={(e) => updateValue("ccFees", i, Number(e.target.value))}
//               className="w-full border p-1 rounded"
//             />
//           </div>
//           <div className="pt-2 text-sm text-gray-800 space-y-1">
//             <p><b>Patients:</b> {values.patientCount}</p>
//             <p><b>DFU Count:</b> {values.dfuCount}</p>
//             <p><b>Qualifying:</b> {values.qualifying}</p>
//             <p><b>Total Units:</b> {values.totalUnits}</p>
//             <p><b>Provider Profit:</b> ${values.providerProfit}</p>
//             <p><b>Distributor Profit:</b> ${values.distributorProfit}</p>
//           </div>
//         </div>
//       </div>
//     );
//   })}
// </div>

// {/* Summary Table */}
// <div className="border-t pt-6">
//   <h2 className="text-2xl font-bold mb-4 text-gray-700">Summary Table</h2>
//   <div className="overflow-x-auto">
//     <table className="min-w-full border border-gray-300 text-sm">
//       <thead className="bg-gray-100">
//         <tr>
//           <th className="p-2 border">Category</th>
//           <th className="p-2 border">Total</th>
//           {payorTypes.map((payor, i) => (
//             <th key={i} className="p-2 border">{payor}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td className="p-2 border font-medium">% of Patient Base</td>
//           <td className="p-2 border">100%</td>
//           {payorPercentages.map((p, i) => (
//             <td key={i} className="p-2 border">{p.toFixed(1)}%</td>
//           ))}
//         </tr>
//         <tr>
//           <td className="p-2 border font-medium">Unique Pats / Yr</td>
//           <td className="p-2 border">{practiceSize}</td>
//           {payorPercentages.map((p, i) => (
//             <td key={i} className="p-2 border">
//               {((p / 100) * practiceSize).toFixed(0)}
//             </td>
//           ))}
//         </tr>
//         <tr>
//           <td providerProfit className="p-2 border font-medium">% DFU Patients</td>
//           <td className="p-2 border">
//             {((totalDFU / practiceSize) * 100).toFixed(1)}%
//           </td>
//           {dfuPercentages.map((dfu, i) => (
//             // eslint-disable-next-line react/jsx-key
//             <td keythe className="p-2 border">{dfu.toFixed(1)}%</td>
//           ))}
//         </tr>
//         <tr>
//           <td className="p-2 border font-medium">Qualifying Patients</td>
//           <td className="p-2 border">{totalQualifying.toFixed(1)}</td>
//           {payorTypes.map((_, i) => (
//             <td key={i} className="p-2 border">{calculate(i).qualifying}</td>
//           ))}
//         </tr>
//         <tr>
//           <td className="p-2 border font-medium">% Qualifying of DFU</td>
//           <td className="p-2 border">
//             {totalDFU > 0 ? ((totalQualifying / totalDFU) * 100).toFixed(1) + "%" : "0"}
//           </td>
//           {payorTypes.map((_, i) => {
//             const dfu = Number(calculate(i).dfuCount);
//             const qual = Number(calculate(i).qualifying);
//             return (
//               <td key={i} className="p-2 border">
//                 {dfu > 0 ? ((qual / dfu) * 100).toFixed(1) + "%" : "0.0%"}
//               </td>
//             );
//           })}
//         </tr>
//         <tr>
//           <td className="p-2 border font-medium">Total Units</td>
//           <td className="p-2 border">
//             {payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).totalUnits), 0)}
//           </td>
//           {payorTypes.map((_, i) => (
//             <td key={i} className="p-2 border">{calculate(i).totalUnits}</td>
//           ))}
//         </tr>
//         <tr>
//           <td className="p-2 border font-medium">Provider Profit ($)</td>
//           <td className="p-2 border">{totalProviderProfit.toFixed(0)}</td>
//           {payorTypes.map((_, i) => (
//             <td key={i} className="p-2 border">{calculate(i).providerProfit}</td>
//           ))}
//         </tr>
//         <tr>
//           <td className="p-2 border font-medium">Distributor Profit ($)</td>
//           <td className="p-2 border">{totalDistributorProfit.toFixed(0)}</td>
//           {payorTypes.map((_, i) => (
//             <td key={i} className="p-2 border">{calculate(i).distributorProfit}</td>
//           ))}
//         </tr>
//         <tr>
//           <td className="p-2 border font-medium">Lead Gen Sales Commission ($)</td>
//           <td className="p-2 border">{totalLeadGenSalesCommission.toFixed(0)}</td>
//           {payorTypes.map((_, i) => (
//             <td key={i} className="p-2 border">{calculate(i).leadGenSalesCommission}</td>
//           ))}
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </div>
//     </div>
//   );
// }

'use client';
import React, { useState, useMemo } from "react";

const payorTypes = ["Cash", "Medicaid", "HMO", "PPO", "Medicare Only", "Medicare & Supp"];

const initialData = {
  practiceSize: 2000,
  payorPercentages: [2.5, 12.5, 20, 20, 35, 10],
  dfuPercentages: [5.0, 1.0, 1.0, 0.0, 5.0, 5.0],
  qualifyingPercentages: [0.0, 10.0, 10.0, 10.0, 20.0, 15.0],
  woundSizes: [5.0, 5.0, 5.0, 5.0, 12.0, 12.0],
  products: ["Pillai - 1", "Pillai - 2", "Pillai - 2", "Pillai - 1", "Arsenal - 1", "Arsenal - 1"],
  ucr: [1600, 800, 800, 1600, 2652, 2652],
  commissionPercentages: [20, 10, 10, 20, 30, 30],
  treatmentWeeks: 10,
  woundShrinkage: 10.0,
  txtCancellation: 30.0,
  materialsCost: 60.0,
  billingExp: 2.91,
  ccFees: [2.5, 0, 0, 0, 0, 0],
  insuranceSG: 6.0,
  leadGenCost: 5.0,
  insuranceDist: 0.5,
};

export default function FullCalculator() {
  const [practiceSize, setPracticeSize] = useState<number>(initialData.practiceSize);

  const [payorPercentages, setPayorPercentages] = useState(initialData.payorPercentages);
  const [dfuPercentages, setDfuPercentages] = useState(initialData.dfuPercentages);
  const [qualifyingPercentages, setQualifyingPercentages] = useState(initialData.qualifyingPercentages);
  const [woundSizes, setWoundSizes] = useState(initialData.woundSizes);
  const [products, setProducts] = useState(initialData.products);
  const [ucr, setUcr] = useState(initialData.ucr);
  const [commissionPercentages, setCommissionPercentages] = useState(initialData.commissionPercentages);
  const [treatmentWeeks, setTreatmentWeeks] = useState(initialData.treatmentWeeks);
  const [woundShrinkage, setWoundShrinkage] = useState(initialData.woundShrinkage);
  const [txtCancellation, setTxtCancellation] = useState(initialData.txtCancellation);
  const [materialsCost, setMaterialsCost] = useState(initialData.materialsCost);
  const [billingExp, setBillingExp] = useState(initialData.billingExp);
  const [ccFees, setCcFees] = useState(initialData.ccFees);
  const [insuranceSG, setInsuranceSG] = useState(initialData.insuranceSG);
  const [leadGenCost, setLeadGenCost] = useState(initialData.leadGenCost);
  const [insuranceDist, setInsuranceDist] = useState(initialData.insuranceDist);

  const updateValue = (type: string, index: number, value: number) => {
    const update = (arr: number[]) => {
      const updated = [...arr];
      updated[index] = value;
      return updated;
    };
    if (type === "payor") setPayorPercentages(update(payorPercentages));
    if (type === "dfu") setDfuPercentages(update(dfuPercentages));
    if (type === "qual") setQualifyingPercentages(update(qualifyingPercentages));
    if (type === "wound") setWoundSizes(update(woundSizes));
    if (type === "ucr") setUcr(update(ucr));
    if (type === "commission") setCommissionPercentages(update(commissionPercentages));
    if (type === "ccFees") setCcFees(update(ccFees));
  };

  const updateProduct = (index: number, value: string) => {
    const updated = [...products];
    updated[index] = value;
    setProducts(updated);
  };

  const calculate = useMemo(() => {
    return (i: number) => {
      const patientCount = (payorPercentages[i] / 100) * practiceSize;
      const dfuCount = (dfuPercentages[i] / 100) * patientCount;
      const qualifying = (qualifyingPercentages[i] / 100) * dfuCount;

      // Profit calculations
      const woundSize = woundSizes[i];
      const membraneMin = Math.ceil(woundSize);
      const membraneOverage = membraneMin * 0.1;
      const unitsWk1 = membraneMin + membraneOverage;

      let totalUnits = 0;
      let currentSize = woundSize;
      for (let week = 1; week <= treatmentWeeks; week++) {
        const units = week === 1 ? unitsWk1 : Math.ceil(currentSize * (1 + 0.1));
        totalUnits += units;
        currentSize *= (1 - woundShrinkage / 100);
      }

      const cancelledUnits = totalUnits * (txtCancellation / 100);
      const finalUnits = totalUnits - cancelledUnits;

      const reimbursement = ucr[i] * (1 - (i === 0 ? 0.3 : i === 2 ? 0.2 : i === 3 ? 0.4 : i === 4 ? 0.8 : i === 5 ? 0.8 : 0));
      const supplementalIns = i === 5 ? ucr[i] * 0.2 : 0;
      const totalReimbursement = (reimbursement + supplementalIns) * finalUnits;

      const materialsCostValue = (materialsCost / 100) * ucr[i] * finalUnits;
      const grossProfit = totalReimbursement - materialsCostValue;

      const billingExpense = (billingExp / 100) * totalReimbursement;
      const ccFee = (ccFees[i] / 100) * totalReimbursement;
      const insuranceSGValue = (insuranceSG / 100) * totalReimbursement;
      const sga = billingExpense + ccFee + insuranceSGValue;

      const providerProfit = grossProfit - sga;
      // const providerProfitPerPatient = providerProfit / (qualifying || 1);

      const commission = (commissionPercentages[i] / 100) * materialsCostValue;
      const leadGen = (leadGenCost / 100) * totalReimbursement;
      const insuranceDistValue = (insuranceDist / 100) * totalReimbursement;
      const distributorProfit = commission - leadGen + insuranceDistValue;
      // const distributorProfitPerPatient = distributorProfit / (qualifying || 1);

      const leadGenSalesCommission = leadGen * qualifying;

      return {
        patientCount: patientCount.toFixed(0),
        dfuCount: dfuCount.toFixed(1),
        qualifying: qualifying.toFixed(1),
        totalUnits: finalUnits.toFixed(0),
        providerProfit: (providerProfit * qualifying).toFixed(0),
        distributorProfit: (distributorProfit * qualifying).toFixed(0),
        leadGenSalesCommission: leadGenSalesCommission.toFixed(0),
      };
    };
  }, [practiceSize, payorPercentages, dfuPercentages, qualifyingPercentages, woundSizes,
    treatmentWeeks, woundShrinkage, txtCancellation, materialsCost, billingExp, ccFees,
    insuranceSG, leadGenCost, insuranceDist, ucr, commissionPercentages]);

  const totalDFU = useMemo(() =>
    payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).dfuCount), 0),
    [calculate]);

  const totalQualifying = useMemo(() =>
    payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).qualifying), 0),
    [calculate]);

  const totalProviderProfit = useMemo(() =>
    payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).providerProfit), 0),
    [calculate]);

  const totalDistributorProfit = useMemo(() =>
    payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).distributorProfit), 0),
    [calculate]);

  const totalLeadGenSalesCommission = useMemo(() =>
    payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).leadGenSalesCommission), 0),
    [calculate]);

  return (
    <div className="p-6 space-y-10 container mx-auto">
      {/* Practice Size Input */}
      <div>
        <label className="block font-semibold text-lg mb-2">Practice Size</label>
        {/* <input
          type="number"
          value={practiceSize}
          min={1}
          onChange={(e) => setPracticeSize(Number(e.target.value))}
          className="border p-2 rounded-md w-60 shadow-sm"
        /> */}

        <input
    type="number"
    value={practiceSize.toString()} // convert number → string for display
    min={1}
    onChange={(e) => {
      const val = e.target.value;
      if (val === "") {
        // Show empty in the UI, but don't change state until a valid number
        setPracticeSize(1);
      } else {
        const num = Number(val);
        if (num >= 1) {
          setPracticeSize(num);
        }
      }
    }}
    className="border p-2 rounded-md w-60 shadow-sm"
  />


      </div>

      {/* Rest of your component remains the same */}
      {/* ... */}
      {/* Global Inputs */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-700">Global Settings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium">Treatment Weeks</label>
            <input
              type="number"
              value={treatmentWeeks}
              onChange={(e) => setTreatmentWeeks(Number(e.target.value))}
              className="w-full border p-1 rounded"
            />
          </div>
          <div>
            <label className="text-xs font-medium">Wound Shrinkage (%)</label>
            <input
              type="number"
              value={woundShrinkage}
              onChange={(e) => setWoundShrinkage(Number(e.target.value))}
              className="w-full border p-1 rounded"
            />
          </div>
          <div>
            <label className="text-xs font-medium">Treatment Cancellation (%)</label>
            <input
              type="number"
              value={txtCancellation}
              onChange={(e) => setTxtCancellation(Number(e.target.value))}
              className="w-full border p-1 rounded"
            />
          </div>
          <div>
            <label className="text-xs font-medium">Materials Cost (% of UCR)</label>
            <input
              type="number"
              value={materialsCost}
              onChange={(e) => setMaterialsCost(Number(e.target.value))}
              className="w-full border p-1 rounded"
            />
          </div>
          <div>
            <label className="text-xs font-medium">Billing Expense (%)</label>
            <input
              type="number"
              value={billingExp}
              onChange={(e) => setBillingExp(Number(e.target.value))}
              className="w-full border p-1 rounded"
            />
          </div>
          <div>
            <label className="text-xs font-medium">Insurance SG&A (%)</label>
            <input
              type="number"
              value={insuranceSG}
              onChange={(e) => setInsuranceSG(Number(e.target.value))}
              className="w-full border p-1 rounded"
            />
          </div>
          <div>
            <label className="text-xs font-medium">Lead Gen Cost (%)</label>
            <input
              type="number"
              value={leadGenCost}
              onChange={(e) => setLeadGenCost(Number(e.target.value))}
              className="w-full border p-1 rounded"
            />
          </div>
          <div>
            <label className="text-xs font-medium">Insurance Distributor (%)</label>
            <input
              type="number"
              value={insuranceDist}
              onChange={(e) => setInsuranceDist(Number(e.target.value))}
              className="w-full border p-1 rounded"
            />
          </div>
        </div>
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
                <div>
                  <label className="text-xs font-medium">Wound Size (cm²)</label>
                  <input
                    type="number"
                    value={woundSizes[i]}
                    onChange={(e) => updateValue("wound", i, Number(e.target.value))}
                    className="w-full border p-1 rounded"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium">Product</label>
                  <select
                    value={products[i]}
                    onChange={(e) => updateProduct(i, e.target.value)}
                    className="w-full border p-1 rounded"
                  >
                    {["Arsenal - 1", "Arsenal - 2", "Arsenal - 3", "Pillai - 1", "Pillai - 2", "Pillai - 3"].map((prod) => (
                      <option key={prod} value={prod}>{prod}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium">UCR ($)</label>
                  <input
                    type="number"
                    value={ucr[i]}
                    onChange={(e) => updateValue("ucr", i, Number(e.target.value))}
                    className="w-full border p-1 rounded"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium">Commission %</label>
                  <input
                    type="number"
                    value={commissionPercentages[i]}
                    onChange={(e) => updateValue("commission", i, Number(e.target.value))}
                    className="w-full border p-1 rounded"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium">CC Fees (%)</label>
                  <input
                    type="number"
                    value={ccFees[i]}
                    onChange={(e) => updateValue("ccFees", i, Number(e.target.value))}
                    className="w-full border p-1 rounded"
                  />
                </div>
                <div className="pt-2 text-sm text-gray-800 space-y-1">
                  <p><b>Patients:</b> {values.patientCount}</p>
                  <p><b>DFU Count:</b> {values.dfuCount}</p>
                  <p><b>Qualifying:</b> {values.qualifying}</p>
                  <p><b>Total Units:</b> {values.totalUnits}</p>
                  <p><b>Provider Profit:</b> ${values.providerProfit}</p>
                  <p><b>Distributor Profit:</b> ${values.distributorProfit}</p>
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
              <tr>
                <td className="p-2 border font-medium">% of Patient Base</td>
                <td className="p-2 border">100%</td>
                {payorPercentages.map((p, i) => (
                  <td key={i} className="p-2 border">{p.toFixed(1)}%</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 border font-medium">Unique Pats / Yr</td>
                <td className="p-2 border">{practiceSize}</td>
                {payorPercentages.map((p, i) => (
                  <td key={i} className="p-2 border">
                    {((p / 100) * practiceSize).toFixed(0)}
                  </td>
                ))}
              </tr>
              {/* <tr>
                <td providerProfit className="p-2 border font-medium">% DFU Patients</td>
                <td className="p-2 border">
                  {((totalDFU / practiceSize) * 100).toFixed(1)}%
                </td>
                {dfuPercentages.map((dfu, i) => (
                  // eslint-disable-next-line react/jsx-key
                  <td keith key={i} className="p-2 border">{dfu.toFixed(1)}%</td>
                ))}
              </tr> */}
              <tr>
                <td  className="p-2 border font-medium">% DFU Patients</td>
                <td className="p-2 border">
                  {((totalDFU / practiceSize) * 100).toFixed(1)}%
                </td>
                {dfuPercentages.map((dfu, i) => (
                  // eslint-disable-next-line react/jsx-key
                  <td  key={i} className="p-2 border">{dfu.toFixed(1)}%</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 border font-medium">Qualifying Patients</td>
                <td className="p-2 border">{totalQualifying.toFixed(1)}</td>
                {payorTypes.map((_, i) => (
                  <td key={i} className="p-2 border">{calculate(i).qualifying}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 border font-medium">% Qualifying of DFU</td>
                <td className="p-2 border">
                  {totalDFU > 0 ? ((totalQualifying / totalDFU) * 100).toFixed(1) + "%" : "0"}
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
              <tr>
                <td className="p-2 border font-medium">Total Units</td>
                <td className="p-2 border">
                  {payorTypes.reduce((acc, _, i) => acc + Number(calculate(i).totalUnits), 0)}
                </td>
                {payorTypes.map((_, i) => (
                  <td key={i} className="p-2 border">{calculate(i).totalUnits}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 border font-medium">Provider Profit ($)</td>
                <td className="p-2 border">{totalProviderProfit.toFixed(0)}</td>
                {payorTypes.map((_, i) => (
                  <td key={i} className="p-2 border">{calculate(i).providerProfit}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 border font-medium">Distributor Profit ($)</td>
                <td className="p-2 border">{totalDistributorProfit.toFixed(0)}</td>
                {payorTypes.map((_, i) => (
                  <td key={i} className="p-2 border">{calculate(i).distributorProfit}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 border font-medium">Lead Gen Sales Commission ($)</td>
                <td className="p-2 border">{totalLeadGenSalesCommission.toFixed(0)}</td>
                {payorTypes.map((_, i) => (
                  <td key={i} className="p-2 border">{calculate(i).leadGenSalesCommission}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}