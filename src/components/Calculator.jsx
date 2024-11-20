import React, { useState } from "react";

const Calculator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [score, setScore] = useState(null);
  const [lastName, setLastName] = useState({name1: "", name2: ""});

  const setScoreFunction = () => {
    if (!name1 || !name2) {    
        alert("Please enter both names!");
        return; 
    }

    if (name1.trim().toLowerCase() === lastName.name1 && name2.trim().toLowerCase() === lastName.name2) {
        alert("You have already calculated the love score for these names!");
        return;
    } 

    const score = Math.floor(Math.random() * 100) + 1;
    setScore(score);

    setLastName({name1: name1.trim().toLowerCase(), name2: name2.trim().toLowerCase()});
  }

  return (
    <div className="w-[50%] p-20 h-[100vh] mx-auto">
      <div className="w-full bg-white p-6 rounded-xl">
        <h1 className="flex items-center justify-center text-blue-800 text-5xl font-bold mb-8">
          Love Calculator ❤️
        </h1>
        <div className="flex justify-between items-center mt-10">
          <input
            type="text"
            placeholder="Your Name"
            className="h-12 text-center"
            value={name1}
            onChange={(e) => {
              setName1(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Partner's Name"
            className="h-12 text-center"
            value={name2}
            onChange={(e) => {
              setName2(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={setScoreFunction} className="rounded-full bg-cyan-500 w-36 font-semibold text-black h-10">Calculate Score</button>
        </div>
        <div className="text-green-600 flex justify-center font-bold mt-4 text-2xl">
            {score !== null && <h1>Your Love Score is : {score}</h1>}
        </div>
        <div className="flex justify-center mt-20">
            <h1 className="font-bold">Made with ❤️ By Abhishek Tiwari</h1>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
