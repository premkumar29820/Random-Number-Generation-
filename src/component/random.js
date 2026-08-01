import { useState } from "react";


function RandomNumber() {
  var [random, setRandom] = useState(null)
   const [luckypool, setluckypool] = useState("")



  var generate = () => {
        const number = Math.floor(Math.random() * 100) + 1;
        setRandom(number)
  

    if (random === 7) {
      setluckypool("🍀 Lucky Number!");
    } else if (
      random === 2  ||
      random === 29 ||
      random === 100
    ) {
      setluckypool("🎉 Jackpot!");
    } else {
      setluckypool("😢 Try Again!");
    }
  };


    var reset = () => {
    setRandom(null)
  }

 

  return (
    <div className="container">
      <h1> 🎲 RANDOM NUMBER GENERATION</h1>
         {random === null ? (
        <p className="message">No number generated yet</p>
      ) : (
      <>
       <h2 className="number">{random}</h2>
       <h2>{luckypool}</h2>
      </>
      )}

      <div className="buttons">
        <button onClick={generate}>Generate</button>
        <button onClick={reset}>RESET</button>
        
      </div>
    </div>
  )
}
export default RandomNumber