import styled from "styled-components";
import { categories } from "./Data";
import { mobile } from "./responsive";
import OurWorkItems from "./OurWorkItems";
import "./OurWork.css";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;


const OurWork = () => {
  return (
    <>
      <h2 className="h2-OurWork">Sample from Our Work</h2>
      <Container>
        {categories.map((item) => (
          <OurWorkItems item={item} key={item.id} />
        ))}
      </Container>

      
    </>
  );
};

export default OurWork;