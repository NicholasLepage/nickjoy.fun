// import { useState } from 'react'
import youtubeIcon from "/youtube-icon.svg"
import coffeeIcon from "/coffee-cup-svgrepo-com.svg"
import maniaquariumLogo from "/ManiaquariumLogo.png"
import './App.css'

import Header from './components/Header'

import { Link } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <h1 className='main-title font-black font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Nick Joy's Fun Zone</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          Reach 420 and see what happens {count}
          </button> */}
      </div>
        
        

      <div className="container-grid pb-20">
        <a href="https://itch.io/embed-upload/10633043?color=333333" target="_blank" className="experience-container">
            <img src={maniaquariumLogo} className="pt-1 "  alt="Maniaquarium Logo" />
        </a>


        <div className="experience-container">
        </div>
        <div className="experience-container">

        </div>
      </div>

      <div className='pt-30'></div>

      <p className="read-the-docs flex items-center justify-center gap-2">
        <img src={youtubeIcon} className='bottom-icon' alt="YouTube Icon" /> Subscribe at <a href='https://youtube.com/@nick_joy' target='_blank'>youtube.com/@nick_joy</a>
      </p>
      <p className="read-the-docs flex items-center justify-center gap-2">
        <img src={coffeeIcon} className='bottom-icon' alt="Ko-fi Icon" />  <a href='https://paypal.me/JoyNico' target='_blank'>Buy me a coffee</a>
      </p>
    </>
  )
}

export default App
