import styled from "styled-components";
import React ,{useEffect} from "react";
import { mobile } from "./responsive";
import Aos from 'aos';
import "aos/dist/aos.css";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const OurWorkItems = ({ item }) => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
  return (
    <Container data-aos="zoom-in">
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>LEARN MORE</Button>
      </Info>
    </Container>
  );
};

export default OurWorkItems;