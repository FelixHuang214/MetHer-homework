import styled from "styled-components";
import group from "../images/group.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Fab } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    logoutBtn: {
      main: "#ffffff",
    },
  },
});

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  padding-top: 15%;
  left: 50%;
  transform: translateX(-50%);
`;

const Image = styled.img`
  height: 30%;
`;

const Title = styled.div`
  font-size: 42px;
  color: white;
  margin-top: 40.4px;
`;

const CustomizedButton = styled(Button)`
  margin-top: 26px;
`;

const UsernameWrap = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: center;
  padding-left: 36px;
  right: 0;
  top: 18px;
  width: 153px;
  height: 53px;
  font-size: 18px;
  background: #00ade3;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
`;

const Username = styled.div`
  white-space: nowrap;
  color: white;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LoginSuccessPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Image src={group} />
        <Title>LOGIN SUCCESS</Title>
        <CustomizedButton
          variant="outlined"
          color="logoutBtn"
          startIcon={<LogoutIcon />}
        >
          Logout
        </CustomizedButton>
      </Container>
      <UsernameWrap>
        <Username>Hi user</Username>
      </UsernameWrap>
    </ThemeProvider>
  );
};

export default LoginSuccessPage;
