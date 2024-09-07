import React, { useState } from 'react';

const TemperatureCalculator: React.FC = () => {
  const [targetTemp, setTargetTemp] = useState('');
  const [targetVolume, setTargetVolume] = useState('');
  const [hotWaterTemp, setHotWaterTemp] = useState('');
  const [coldWaterTemp, setColdWaterTemp] = useState('');

  const calculateWaterMix = () => {
    const target = parseFloat(targetTemp);
    const volume = parseFloat(targetVolume);
    const hot = parseFloat(hotWaterTemp);
    const cold = parseFloat(coldWaterTemp);

    if (isNaN(target) || isNaN(volume) || isNaN(hot) || isNaN(cold)) {
      return { hotWater: 0, coldWater: 0 };
    }

    const hotWaterVolume = (volume * (target - cold)) / (hot - cold);
    const coldWaterVolume = volume - hotWaterVolume;

    return {
      hotWater: Math.round(hotWaterVolume * 100) / 100,
      coldWater: Math.round(coldWaterVolume * 100) / 100
    };
  };

  const { hotWater, coldWater } = calculateWaterMix();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">温度計算機</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">目標温度 (°C)</label>
          <input
            type="number"
            value={targetTemp}
            onChange={(e) => setTargetTemp(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">目標量 (ml)</label>
          <input
            type="number"
            value={targetVolume}
            onChange={(e) => setTargetVolume(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">お湯の温度 (°C)</label>
          <input
            type="number"
            value={hotWaterTemp}
            onChange={(e) => setHotWaterTemp(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">水の温度 (°C)</label>
          <input
            type="number"
            value={coldWaterTemp}
            onChange={(e) => setColdWaterTemp(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="font-semibold mb-2">結果:</h3>
        <p>お湯: {hotWater} ml</p>
        <p>水: {coldWater} ml</p>
      </div>
    </div>
  );
};

export default TemperatureCalculator;
