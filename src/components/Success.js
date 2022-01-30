import React from 'react';
import "./Success.css";
import { Item, AppContainer } from "./components";
import Carousel from "./Carousel";
import image3 from "../images/Capture1.JPG";
import image4 from "../images/Capture2.JPG";



const Success = () => {
  return <div className='second-part'>
            <h1 className='title'>Success Partners</h1>
             <p className='para-title'>Our partnerships' success stories reflect our vision about delivering quality and going the extra mile <br></br>
                of the technological logistics solutions</p>

            <AppContainer>
                <Carousel title="Carousel">
                    <Item img={image3} />
                    <Item img={image4} />
                </Carousel>
            </AppContainer>

  </div>;
};

export default Success;
