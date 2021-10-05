import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Bttn } from './Bttn';
import Aos from 'aos';
import "aos/dist/aos.css";


const Section=styled.div`
    width:100%;
    height:100%;
    margin-top:0%;

`;

const Container=styled.div`
    padding: 0rem calc((100vw - 1300px) / 2);
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 600px;


    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }
    
`;

const ColumnLeft=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    line-height:1.4;
    padding:5rem 6rem;
    order:${({reverse}) => (reverse ? '1' : '2')};

    h1{
        margin-bottom:2rem;
        font-size:clamp(1.5rem, 6vw, 2rem);
    }

    p{
        margin-bottom: 2rem;
    }
`;


const ColumnRight=styled.div`
    order:${({reverse}) => (reverse ? '1' : '2')};
    display:flex;
    justify-content:center;
    align-items:center;

    @media screen and (max-width:768px){
        order:${({reverse}) => (reverse ? '1' : '2')};
    }

    img{
        width:90%;
        height:70%;
        border-radius:30px;
    }

        @media screen and (max-width:768px){
            width:100%;
            height:100%;
    }
    }
    

`;



const AboutUs = ({heading, image, paragraphOne, paragraphTwo, buttonLabel,reverse}) => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <Section data-aos="zoom-in">
            <Container>
                <ColumnLeft>
                <h2>About Us</h2>
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                <Bttn to="/homes" primary="true">{buttonLabel}</Bttn>

                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                <img src={image} alt="home" />
                </ColumnRight>
            </Container>
            
        </Section>
    )
}

export default AboutUs;