import React from 'react'
import '../App.css'
import Man from './images/man.png'
import Abt from './images/abt.png'
import insta from './images/instagram.png'
import lnkd from './images/linkedin.png'
import gtb from './images/github.png'

const About = () => {
  return (<div id='abt'>
    <div className='ab' id='ab'>
      <h1>About Website</h1>
      <img src={Abt} alt="" className='abt' />
      <p> This website helps you to remind your work you can add many of the works as a list it gives you a sorted(by date) list of your work and after completing any work you can mark that as a completed work and then you can delete that work. and you can divide your work into many categories and you can also sort by category of works .it also give a color sign based on the deadline red means your deadline is today orange means one day left for it. you can use this website in two-mode light and dark modes. This website was made just for study purposes.

      </p>
    </div>
    <div className='ad'>
      <h1>About devloper</h1>
      <img src={Man} alt="" className='man' />
      <p>I am Vimal Mishra from Prayagraj and i am pursuing my bachelors of engineering
        in computer science branch and it is my 3rd year of graduation. I have keen interest in compititve
        and currently i am exploring web devlopment (MERN stack devlopment).

      </p>
      <h4 className='cm'>Connect to me</h4>
      <div className='sm'>
        <a href="https://www.linkedin.com/in/vimal-mishra-b01958198/" rel="noopener noreferrer"> <img src={lnkd} alt="" className='lnkd' /></a>
        <a href="https://www.instagram.com/vimalmishra836/" rel="noopener noreferrer"><img src={insta} alt="" className='insta' /></a>
        <a href="https://github.com/vimal20002" rel="noopener noreferrer"><img src={gtb} alt="" className='gtb' /></a>


      </div>
    </div>
  </div>
  )
}

export default About
