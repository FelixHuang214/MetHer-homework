import styled from "styled-components";
import arrow from "../images/arrow.png";

const Container = styled.a`
  position: absolute;
  top: 34px;
  left: 40px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
`;

const Icon = styled.img`
  width: 28px;
`;

const BackButton = ({ handleToLoginPage }) => {
  return (
    <Container href="#" onClick={handleToLoginPage}>
      <Icon src={arrow} />
    </Container>
  );
};

export default BackButton;
