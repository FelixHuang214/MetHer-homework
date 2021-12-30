import styled from "styled-components";
import { Box } from "@mui/material";

const CustomizedBox = styled(Box)`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px 0px 56px 0px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 640px;
  height: 212px;
  background: white;
  border-radius: 16px;
  p {
    margin: 0;
  }
`;

const Title = styled.div`
  font-size: 24px;
`;

const Detail = styled.div`
  font-size: 16px;
  margin-top: 51px;
`;

const SignupConfirm = () => {
  return (
    <CustomizedBox>
      <Title>Signup</Title>
      <Detail>Send confirm to your E-mail already</Detail>
    </CustomizedBox>
  );
};

export default SignupConfirm;
