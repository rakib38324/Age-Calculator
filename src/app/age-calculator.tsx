"use client";
import React, { useState } from "react";

interface Age {
  years: number;
  months: number;
  days: number;
}

const AgeCalculator: React.FC = () => {
  const [birthdate, setBirthdate] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [age, setAge] = useState<Age | string>("");

  const calculateAge = () => {
    const birthDateObj = new Date(birthdate);
    const currentDateObj = new Date(currentDate);

    if (
      birthdate &&
      currentDate &&
      !isNaN(birthDateObj.getTime()) &&
      !isNaN(currentDateObj.getTime())
    ) {
      const diffTime = Math.abs(
        currentDateObj.getTime() - birthDateObj.getTime()
      );
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const years = Math.floor(diffDays / 365);
      const months = Math.floor((diffDays % 365) / 30.4375);
      const days = Math.floor((diffDays % 365) % 30.4375);

      setAge({ years, months, days });
    } else {
      setAge("Invalid dates");
    }
  };

  return (
    <div className="bg-blue-50 p-8 rounded-lg shadow-md max-w-md w-full mx-auto my-20">
      <h1 className="text-2xl font-bold mb-4 text-center">Age Calculator</h1>
      <div className="flex flex-col space-y-4 text-lg">
        <div className="flex gap-5 justify-between">
          <label htmlFor="birthdate" className="font-semibold my-auto">
            Enter Birthdate:
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 my-auto"
          />
        </div>
        <div className="flex gap-5 justify-between">
          <label htmlFor="currentdate" className="font-semibold my-auto">
            Enter Current Date:
          </label>
          <input
            type="date"
            id="currentdate"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 my-auto"
          />
        </div>
        <button
          onClick={calculateAge}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Calculate Age
        </button>
        <div id="result" className="text-center">
          {typeof age === "object" && (
            <p>
              Your age is<span className="text-blue-600"> {age.years} </span>
              years,<span className="text-blue-600"> {age.months} </span>
              months, and <span className="text-blue-600"> {age.days} </span>
              days.
            </p>
          )}
          {typeof age === "string" && <p>{age}</p>}
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
