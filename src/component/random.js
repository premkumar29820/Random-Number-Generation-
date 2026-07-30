function RandomNumber() {
  var [random, setRandom] = useState(null)



  var generate = () => {
        const number = Math.floor(Math.random() * 100) + 1;
        setRandom(number)
  }

    var reset = () => {
    setRandom("No number generated yet")
  }

 

  return (
    <div className="container">
      <h1> 🎲 RANDOM NUMBER GENERATION</h1>
         {random === null ? (
        <p className="message">No number generated yet</p>
      ) : (
        <h2 className="number">{random}</h2>
      )}

      <div className="buttons">
        <button onClick={generate}>Generate</button>
        <button onClick={reset}>RESET</button>
        
      </div>
    </div>
  )
}
export default RandomNumber