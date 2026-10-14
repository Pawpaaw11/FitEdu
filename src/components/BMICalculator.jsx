import { useState, useCallback } from "react";
import { SlidersIcon, InfoIcon } from "./Icons";

// BMI category config
const getBMICategory = (bmi) => {
  if (bmi < 18.5) return { label: "Kurus", color: "bg-blue-100 text-blue-800", bar: "bg-blue-400", barPos: "10%" };
  if (bmi < 25)   return { label: "Normal", color: "bg-emerald-100 text-emerald-800", bar: "bg-emerald-500", barPos: "35%" };
  if (bmi < 30)   return { label: "Overweight", color: "bg-amber-100 text-amber-800", bar: "bg-amber-400", barPos: "60%" };
  return               { label: "Obesitas", color: "bg-red-100 text-red-800", bar: "bg-red-500", barPos: "85%" };
};

const getIdealWeight = (heightCm) => {
  const h = heightCm / 100;
  const min = Math.round(18.5 * h * h);
  const max = Math.round(24.9 * h * h);
  return { min, max };
};

const BMICalculator = () => {
  const [weight, setWeight] = useState("78");
  const [height, setHeight] = useState("170");
  const [result, setResult] = useState(() => {
    const bmi = (78 / ((170 / 100) ** 2)).toFixed(1);
    return { bmi, ...getBMICategory(parseFloat(bmi)), ideal: getIdealWeight(170) };
  });

  const calculate = useCallback(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || h <= 0 || w <= 0) return;
    const bmi = (w / ((h / 100) ** 2)).toFixed(1);
    setResult({
      bmi,
      ...getBMICategory(parseFloat(bmi)),
      ideal: getIdealWeight(h),
    });
  }, [weight, height]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") calculate();
  };

  return (
    <div
      className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-4"
      data-purpose="bmi-calculator"
    >
      {/* Card Header */}
      <div className="flex items-center space-x-2 text-slate-900">
        <SlidersIcon className="w-5 h-5 text-slate-700" />
        <h2 className="text-sm font-bold tracking-tight">Kalkulator BMI</h2>
      </div>

      {/* Input Forms */}
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1" htmlFor="berat-badan">
            Berat Badan (kg)
          </label>
          <input
            id="berat-badan"
            type="number"
            min="1"
            max="300"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full text-xs font-medium bg-slate-50/50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1" htmlFor="tinggi-badan">
            Tinggi Badan (cm)
          </label>
          <input
            id="tinggi-badan"
            type="number"
            min="1"
            max="300"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full text-xs font-medium bg-slate-50/50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
      </div>

      {/* Calculate Button */}
      <button
        type="button"
        onClick={calculate}
        className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold text-xs py-2.5 rounded-lg shadow-sm transition-all duration-150"
      >
        Hitung BMI
      </button>

      {/* Result */}
      {result && (
        <div className="pt-2 border-t border-slate-100 space-y-3 fade-in-up">
          <p className="text-xs text-slate-500 font-medium">Hasil BMI</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{result.bmi}</span>
            <span className={`${result.color} text-xs font-semibold px-3 py-1 rounded-full`}>
              {result.label}
            </span>
          </div>

          {/* BMI Gauge Bar */}
          <div className="relative">
            <div className="h-2 rounded-full bg-gradient-to-r from-blue-300 via-emerald-400 via-amber-300 to-red-400" />
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white shadow-md transition-all duration-500 ${result.bar}`}
              style={{ left: result.barPos, transform: "translate(-50%, -50%)" }}
            />
            <div className="flex justify-between text-[9px] text-slate-400 mt-1.5 px-0.5">
              <span>Kurus</span>
              <span>Normal</span>
              <span>Overweight</span>
              <span>Obesitas</span>
            </div>
          </div>

          <div className="pt-1">
            <p className="text-xs text-slate-500">Berat ideal (perkiraan)</p>
            <p className="text-xs font-bold text-slate-900 mt-0.5">
              {result.ideal.min} – {result.ideal.max} kg
            </p>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-3 flex items-start space-x-2.5">
        <InfoIcon className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
        <p className="text-[11px] leading-relaxed text-blue-900">
          BMI hanya salah satu indikator. Untuk hasil lebih akurat, konsultasikan dengan ahli gizi atau tenaga medis.
        </p>
      </div>
    </div>
  );
};

export default BMICalculator;
