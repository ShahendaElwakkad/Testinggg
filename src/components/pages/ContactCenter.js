import React from 'react';
import ContactService from '../ContactService';
import { Data } from '../Data';
import Footer from '../Footer';

export default function ContactCenter() {
  return (
    <>
      <ContactService {...Data}/>
      <Footer />
    </>
  );
}
