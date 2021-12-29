import Form from "../components/Form";

const LoginPage = () => {
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
    />
  );
};

export default LoginPage;
