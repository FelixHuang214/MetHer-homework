import styled from "styled-components";

import GlobalStyle from "./globalStyle";
import Form from "./components/Form";
import LoginPage from "./pages/LoginPage";
import SendEmailPage from "./pages/SendEmailPage";
import SignupPage from "./pages/SignupPage";
import VerifyPage from "./pages/VerifyPage";
import SignupConfirm from "./pages/SignupConfirm";

import bg from "./images/bg.png";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Bg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Bg src={bg} />
        <SignupConfirm />
      </Container>
    </>
  );
}

export default App;
