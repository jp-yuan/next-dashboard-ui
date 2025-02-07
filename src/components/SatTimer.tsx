'use client';

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(60); // Countdown from 60 seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Countdown Timer</h1>
      <div className="text-6xl font-mono bg-gray-200 p-4 rounded-xl shadow-lg">
        {timeLeft}s
      </div>
    </div>
  );
}
