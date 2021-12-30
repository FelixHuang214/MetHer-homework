import styled from "styled-components";
import { useState, useEffect } from "react";

import GlobalStyle from "./globalStyle";
import LoginPage from "./pages/LoginPage";
import SendEmailPage from "./pages/SendEmailPage";
import SignupPage from "./pages/SignupPage";
import VerifyPage from "./pages/VerifyPage";
import SignupConfirm from "./pages/SignupConfirm";
import LoginSuccessPage from "./pages/LoginSuccessPage";
import BackButton from "./components/BackButton";

import bg from "./images/bg.png";
import bgSuccess from "./images/bg-success.png";

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
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (page === "login" && email) {
      setEmail("");
    }
  }, [page]);
  const handleToLoginPage = () => {
    setPage("login");
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Bg src={page === "loginSuccess" ? bgSuccess : bg} />
        {page === "login" && <LoginPage setPage={setPage} page={page} />}
        {page === "loginSuccess" && <LoginSuccessPage setPage={setPage} />}
        {page === "sendEmail" && (
          <SendEmailPage setPage={setPage} setEmail={setEmail} page={page} />
        )}
        {page === "signup" && <SignupPage setPage={setPage} page={page} />}
        {page === "signupConfirm" && <SignupConfirm setPage={setPage} />}
        {page === "verify" && <VerifyPage setPage={setPage} email={email} />}
        {page.search(/login/) !== 0 && (
          <BackButton handleToLoginPage={handleToLoginPage} />
        )}
      </Container>
    </>
  );
}

export default App;
