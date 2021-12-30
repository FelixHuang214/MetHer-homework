import Form from "../components/Form";

const LoginPage = ({ page, setPage }) => {
  return (
    <Form
      name="login"
      elementsData={{
        title: "Login",
        input: [
          { name: "account", label: "Account" },
          { name: "password", label: "Password" },
        ],
        button: "LOGIN",
      }}
      footer={true}
      setPage={setPage}
      page={page}
    />
  );
};

export default LoginPage;
