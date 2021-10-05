import React, {useEffect} from 'react';
import "./servicecard.css";
import Aos from 'aos';
import "aos/dist/aos.css";



const ServiceCards = ({title,imageUrl}) => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <div className="card-container" data-aos="zoom-in">
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div> 
                <div className="image-container">
                    <img src={imageUrl} alt='' />
                </div> 
                <div className="buttonn">
                    <button>
                        <a className="viewMore"> View More</a>
                    </button>
                </div> 
            </div> 
        </div>
    )
}

export default ServiceCards;
