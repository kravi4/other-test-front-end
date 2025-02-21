'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const weekdays = {
    Monday: "Start your week strong! Time for new beginnings.",
    Tuesday: "Keep the momentum going! You're making progress.",
    Wednesday: "Halfway there! You're doing great.",
    Thursday: "The weekend is almost in sight! Stay focused.",
    Friday: "TGIF! Time to wrap up the week's tasks.",
    Saturday: "Relax and enjoy your weekend!",
    Sunday: "Time to recharge and prepare for the week ahead.",
    otherDays: "BV and Manu are the greatest people in the world",
    moneyTime: "Let's go get some money",
    HelloThere: "What is up my man?",
    BetterEngineer: "You are a better engineer than you think you are",
    BetterDeveloper: "You are a better developer than you think you are",
    BetterDesigner: "You are a better designer than you think you are",
    BetterManager: "You are a better manager than you think you are",
    BetterLeader: "You are a better leader than you think you are",
    ANotherButtons: "Click me to see another button",
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Daily Messages</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.keys(weekdays).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedDay === day
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {selectedDay && (
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{selectedDay}</h2>
            <p className="text-gray-700">{weekdays[selectedDay as keyof typeof weekdays]}</p>
          </div>
        )}
      </div>
    </main>
  );
}