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
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);

      const finalNumber = Math.floor(Math.random() * 100) + 1;

      setRandom(finalNumber);
      setSpinning(false);

      if (finalNumber === 7) {
        setluckypool("🍀 Lucky Number!");
        
      } else if (
        finalNumber === 2 ||
        finalNumber === 29 ||
        finalNumber === 100
      ) {
        setluckypool("🎉 Jackpot!");
       
      } else {
        setluckypool("😢 Try Again!");
      }

      setTimeout(() => {
        setluckypool("");
      }, 4000);

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

          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default RandomNumber;