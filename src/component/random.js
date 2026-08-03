import { useState } from "react";

function RandomNumber() {
  const [random, setRandom] = useState(null);
  const [luckypool, setluckypool] = useState("");
  const [spinning, setSpinning] = useState(false);
  

  const generate = () => {
    setSpinning(true);
    setluckypool("");
  
   
    const interval = setInterval(() => {
      setRandom(Math.floor(Math.random() * 100) + 1);
    }, 60);

    setTimeout(() => {
      clearInterval(interval);

      const finalNumber = Math.floor(Math.random() * 100) + 1;

      setRandom(finalNumber);
      setSpinning(false);

      if (finalNumber === 7) {
        setluckypool("🍀 Lucky Number!");
        
      } else if (
        finalNumber === 21 ||
        finalNumber === 50 ||
        finalNumber === 100
      ) {
        setluckypool("🎉 Jackpot!");
       
      } else {
        setluckypool("😢 Try Again!");
      }

    }, 2000);
  };

  const reset = () => {
    setRandom(null);
    setluckypool("");
    setSpinning(false);
  };

  return (
    <>
     
      <div className="container">
        <h1>🎲 RANDOM NUMBER GENERATION</h1>

        {random === null ? (
          <p className="message">No number generated yet</p>
        ) : (
          <>
            <h2 className={spinning ? "number spin" : "number"}>
              {random}
            </h2>

            <h2>{luckypool}</h2>
          </>
        )}

        <div className="buttons">
          <button onClick={generate} disabled={spinning}>
            {spinning ? "Generating..." : "Generate"}
          </button>

          <button onClick={reset} disabled={spinning}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default RandomNumber;