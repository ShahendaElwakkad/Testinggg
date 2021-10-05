import React,  {useEffect} from 'react';
import './marketingcards.css';
import Aos from 'aos';
import "aos/dist/aos.css";


const DesignCards = ({title1,paragraph1,title2,paragraph2,title3,paragraph3,title4,paragraph4}) => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <div class="row" data-aos="zoom-in-down">
            <div class="column">
                <div class="card">
                    <h3>{title1}</h3>
                    <p className="marketing-paragraph">{paragraph1}</p>
                    
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <h3>{title2}</h3>
                    <p className="marketing-paragraph">{paragraph2}</p>
                   
                </div>
             </div>
  
            <div class="column">
                <div class="card">
                    <h3>{title3}</h3>
                    <p className="marketing-paragraph">{paragraph3}</p>
                    
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <h3>{title4}</h3>
                    <p className="marketing-paragraph">{paragraph4}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default DesignCards;