import React from 'react'
import { logo } from '../assets';
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img
            src={logo} alt='summz_logo' className='w-28 object-contain'
            />
            <button
                type='button' onClick={()=>{window.open('https://github.com/adrianhajdin/project_ai_summarizer')}} className='black_btn'
            >
                GitHub
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize Artices with <br className='max-md:hidden'/>
            <span className='orange_gradient'> Open AI GPT-4 </span>
        </h1>
        <h2 className='desc'>
            Simplify your reading with Summize, an open-source article summarizer who transforms lengthy articles into shorter and much concise summaries.
        </h2>
    </header>
  )
}

export default Hero