import React from 'react'
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Resume from "./resume";
import About from './About';
import "../asset/styles/abot.scss"
import MySkillComponent from './Skills';
import ContactMe from './Contact';
import { BrowserRouter } from 'react-router-dom';

export default function PotfolioWebsite() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Main />
        <About />
        <MySkillComponent />
        <ContactMe />
        <Resume />
      </div>
      <Footer />
    </BrowserRouter>
  )
}