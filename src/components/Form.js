import styled from "styled-components";
import { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { dropSymbolAndLowerCase } from "../utils";

const CustomizedTextField = styled(TextField)`
  width: 100%;
  height: 56px;
  & + & {
    margin-top: 40px;
  }
`;

const CustomizedButton = styled(Button)`
  margin-top: 40px;
`;

const Title = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 26px;
`;

const Footer = styled.div`
  display: ${(props) => (props.footer ? "flex" : "none")};
  justify-content: space-between;
  margin-top: 24px;
  ${(props) => !props.footer && `display: none;`}
  a {
    text-decoration: none;
    color: #666;
  }
`;

const CustomizedBox = styled(Box)`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 65px 122px 93px 122px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 640px;
  max-width: 640px;
  background: white;
  border-radius: 16px;
  p {
    margin: 0;
  }
`;

const Form = ({ footer = false, elementsData }) => {
  const [inputValue, setInputValue] = useState(() => {
    const initialError = {};
    elementsData.input.reduce((obj, data) => {
      const { name } = data;
      obj[name] = "";
      return obj;
    }, initialError);
    return initialError;
  });

  const [errorMessage, setErrorMessage] = useState(() => {
    const initialError = {};
    elementsData.input.reduce((obj, data) => {
      const { name } = data;
      obj[name] = "";
      return obj;
    }, initialError);
    return initialError;
  });

  const checkEmail = (email) => {
    return email.match(/^[a-z0-9]+([+.][a-z0-9]+)*[a-z0-9]*@[a-z]+\.[a-z]+/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tmpErrorMessage = {};
    Object.keys(inputValue).map((key) => {
      const newKey = key.charAt(0).toUpperCase() + key.slice(1);
      const keyValue = inputValue[key];
      if (!keyValue) {
        tmpErrorMessage[key] = `${newKey} must not be empty`;
      }
      if (key === "email" && keyValue) {
        tmpErrorMessage[key] = checkEmail(keyValue)
          ? tmpErrorMessage[key]
          : `${newKey} is incorrect`;
      }
    });
    setErrorMessage(tmpErrorMessage);
  };
  const handleChangeValue = (e) => {
    const {
      target: { name, value },
    } = e;
    setInputValue((previous) => ({
      ...previous,
      [name]: value,
    }));
  };
  return (
    <CustomizedBox
      component="form"
      sx={{
        boxShadow: 3,
      }}
      onSubmit={handleSubmit}
    >
      <Title>{elementsData.title}</Title>
      {elementsData.input.map((data, index) => (
        <CustomizedTextField
          error={errorMessage[data.name] ? true : false}
          key={index}
          id="outlined-basic"
          name={data.name}
          label={data.label + "*"}
          helperText={errorMessage[data.name]}
          variant="outlined"
          value={inputValue[data.name]}
          onChange={handleChangeValue}
        />
      ))}

      <CustomizedButton type="submit" variant="contained">
        {elementsData.button}
      </CustomizedButton>
      <Footer footer={footer}>
        <a href="#">Forgot password?</a>
        <a href="#">Sign Up</a>
      </Footer>
    </CustomizedBox>
  );
};

export default Form;
