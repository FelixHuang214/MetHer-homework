import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { FilledInput, Box, Button } from "@mui/material";

const CustomizedBox = styled(Box)`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 70px 100px;
  align-items: center;
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

const CustomizedFilledInput = styled(FilledInput)`
  width: 60px;
  height: 71px;
  font-size: 42px;
  background: #e0e0e0;
  border-radius: 0;
  color: ${(props) => (props.isError ? "#940505" : "#1976d2")};
  :before {
    border-bottom: 2px solid #1976d2;
  }
  & + & {
    margin-left: 16px;
  }
  input {
    text-align: center;
  }
`;

const Title = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 26px;
`;

const DetailBlock = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;

const Desc = styled.div`
  position: relative;
  left: -15px;
  font-size: 15px;
  margin-top: 31px;
  max-width: 90%;
  word-break: break-word;
  text-align: center;
`;

const Timer = styled.div`
  position: absolute;
  right: 0;
  font-size: 24px;
  color: #bdbdbd;
  margin-left: 15px;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
`;

const CustomizedButton = styled(Button)`
  padding: 13px 101px 9px 101px;
  width: 252px;
  height: 36px;
  font-size: 14px;
  & + & {
    margin-top: 21px;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 19px;
  color: #940505;
`;

const initInputValue = () => [...Array(6)].map(() => "");

const VerifyPage = () => {
  const [inputValue, setInputValue] = useState(() => initInputValue());
  const [errorMessage, setErrorMessage] = useState("");
  const inputsRef = useRef([]);
  const [timer, setTimer] = useState(60);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleKeyUp = (e, index) => {
    if (e.keyCode === 8 && !inputValue[index] && index !== 0) {
      let newInputValue = [...inputValue];
      newInputValue[index - 1] = "";
      setInputValue(newInputValue);
      inputsRef.current[index - 1].focus();
    }
    if (inputValue[index] && index < inputValue.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };
  const handleChangeValue = (e, index) => {
    const { value } = e.target;
    if (value >= 0 && value < 10) {
      let newInputValue = [...inputValue];
      newInputValue[index] = value;
      setInputValue(newInputValue);
    }
  };

  const handleRetry = () => {
    setInputValue(initInputValue());
  };

  useEffect(() => {
    inputsRef.current[0].focus();
  }, [inputsRef]);

  useEffect(() => {
    if (timer <= 0) return;
    let timeId = setTimeout(() => {
      setTimer((number) => number - 1);
    }, 1000);
    return () => {
      clearTimeout(timeId);
    };
  }, [timer]);

  useEffect(() => {
    if (inputValue[inputValue.length - 1]) {
      // setInputValue(initInputValue());
      // inputsRef.current[0].focus();
    }
  }, [inputValue]);
  return (
    <CustomizedBox
      component="form"
      sx={{
        boxShadow: 3,
      }}
      onSubmit={handleSubmit}
    >
      <Title>Verify Your E-mail</Title>
      <div>
        {inputValue.map((value, index) => (
          <CustomizedFilledInput
            isError={errorMessage}
            key={index}
            hiddenLabel
            id="component-filled"
            value={value}
            readOnly={value ? "readonly" : false}
            inputRef={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleChangeValue(e, index)}
            inputProps={{
              maxLength: 1,
              onKeyUp(e) {
                handleKeyUp(e, index);
              },
            }}
          />
        ))}
      </div>
      <DetailBlock>
        <Desc>Please enter 6 digital code sent to XXX@gmail.com</Desc>
        <Timer>{timer}s</Timer>
      </DetailBlock>
      <ButtonBlock>
        <CustomizedButton type="submit" variant="contained">
          VERIFY
        </CustomizedButton>
        <CustomizedButton
          type="button"
          variant="outlined"
          onClick={handleRetry}
        >
          RETRY
        </CustomizedButton>
      </ButtonBlock>
      {errorMessage && (
        <ErrorMessage>Wrong code, Please try again</ErrorMessage>
      )}
    </CustomizedBox>
  );
};

export default VerifyPage;
