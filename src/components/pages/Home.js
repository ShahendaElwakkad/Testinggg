import React from 'react';
import '../../App.css';
import AboutUs from '../AboutUs';
import { Data3 } from '../Data';
import { Data4 } from '../Data';
import HomeSection from '../HomeSection';
import OurTeam from '../OurTeam';
import OurWork from '../OurWork';
import ContactForm from "../ContactForm";
import Footer from '../Footer';

export default function Home() {
  return (
    <>
      <h1 className='home'></h1>
      <HomeSection />
      <AboutUs {...Data3} />
      <OurTeam {...Data4} />
      <OurWork />
      <ContactForm />
      <Footer />
      
    </>
  );
}
