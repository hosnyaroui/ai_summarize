import {logo} from '../assets';
import React from 'react'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
<nav className="flex justify-between items-center flex-col">
    <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

<button
type="button"
onClick={() => {

    
}}
>


    Github
</button>

</nav>
    </header>
  )
}

export default Hero
