import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  const [prevCount, setPrevCount] = useState('')
  const [input, setinput] = useState('')
  const [Info, setInfo] = useState('')
  const [rando, setrando] = useState('')
  const [place, setPlace] = useState('')
  const [btn, setbtn] = useState('hidden')
  const [read, setreadonly] = useState(false)
  function RandomNumber() {
    let random = Math.floor(Math.random() * 100 + 1)
    return random
  }
  const restart = useCallback(() => {
    setInfo('New Game');
    setPrevCount('')
    setCount(5)
    setinput('')
    setreadonly(false)
    setrando(RandomNumber())
  })
  useEffect(() => {
    setrando(RandomNumber())
  }, [])
  const GuessGame = useCallback(() => {
    if (!input) {
      setPlace("Give the value first")
      return
    } else if (count < 1) {
      setInfo(`OOP's You-loose (out of Guesses) Value was-${rando}`)
      setreadonly(true)
      setbtn('')
      return
    }
    setCount(count - 1)
    setPrevCount(input)
    console.log(`inside GuessGame-${input}`);

    if (input > rando) {
      setInfo("My Value is Lower")
       setinput('')
      return
    } else if (input < rando) {
      setInfo("My Value is Higher")
       setinput('')
      return
    } else if (input == rando) {
      setInfo("Olee Yay you guessed it right !!")
      setreadonly(true)
      setbtn('')
      
       return
    }
  }, [input])


  return (
    <>
     <div className="game-container" >
        <h1 className='text-2xl font-bold'>Guess The Number</h1>
        <p className="subtitle">Guess a number between <strong>1 and 100</strong> You only have 10 Attempts to guess correct
          one</p>

        <form className="block"
          onSubmit={(e) => {
            console.log(rando);
            e.preventDefault()
            console.log("submitted");
            GuessGame()


          }}>
          <div className="input-box">
            <input type="number" id="guessInput" name="mello"
              placeholder={place || "enter the amount"} min="1" max="100"
              value={input}
              readOnly={read}
              onChange={(e) => {
                setinput(e.target.value)
              }}
            />
            <button name="mello" id="btn">Submit</button>
          </div>
        </form>


        <p id="message">{Info}</p>

        <div className="game-info">

          <div className="info-box">
            <h3>Previous Guesses</h3>
            <p id="previousGuesses">{prevCount}</p>
          </div>

          <div className="info-box">
            <h3>Guesses Remaining</h3>
            <p id="remainingGuesses">{count}</p>
          </div>

        </div>

        <button id="restartGame" className={btn}
          onClick={() => {
            restart()
            setbtn("hidden")
          }}
        >Restart Game</button>

      </div>
    </>
  )
}

export default App
