// import { useState } from 'react'
import youtubeIcon from "/youtube-icon.svg"
import coffeeIcon from "/coffee-cup-svgrepo-com.svg"
import maniaquariumLogo from "/ManiaquariumLogo.png"
import popItLogo from "/PopItLogoForWeb.png"
import newSticker from "/NewSticker.png"
import breathfullyLogo from "/Breathfully_Title_V2.png"

import './App.css'

import Header from './components/Header'

import { Link } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <h1 className='main-title mb-20 font-black font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Nick Joy's Fun Zone</h1>



      <div className="container-grid pb-20">
        {/* Game 1 */}
        <div className="container-grid pb-20">
          <a href="https://itch.io/embed-upload/10633043?color=333333" target="_blank" className="experience-container z-10">
              <img src={maniaquariumLogo} className="maniaquariumlogo"  alt="Maniaquarium Logo" />
          </a>
        </div>
        
        {/* Game 2 */}
        <div className="container-grid pb-20">
          <a href="https://itch.io/embed-upload/11601155?color=333333" target="_blank" className="experience-container">
            <img src={newSticker} className="sticker" alt="" />
            <img src={breathfullyLogo} className="breathfullylogo"  alt="Maniaquarium Logo" />
          </a>
        </div>

        {/* Game 3 */}
        <div className="container-grid pb-20">
          <a href="https://itch.io/embed-upload/10681777?color=333333" target="_blank" className="experience-container">
            <img src={popItLogo} className="popitlogo "  alt="PopIt Logo" />
          </a>
        </div>

      </div>

      <div className='pt-30'></div>

      <p className="read-the-docs flex items-center justify-center gap-2">
        <img src={youtubeIcon} className='bottom-icon' alt="YouTube Icon" /> Subscribe at <a href='https://youtube.com/@nick_joy' target='_blank'>youtube.com/@nick_joy</a>
      </p>
      <p className="read-the-docs flex items-center justify-center gap-2">
        <img src={coffeeIcon} className='bottom-icon' alt="Ko-fi Icon" />  <a href='https://ko-fi.com/nickjoytv' target='_blank'>Buy me a coffee</a>
      </p>
    </>
  )
}

export default App
