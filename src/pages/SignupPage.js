import Form from "../components/Form";

const SignupPage = () => {
  return (
    <Form
      name="signup"
      elementsData={{
        title: "Signup",
        input: [
          { name: "email", label: "E-mail" },
          { name: "username", label: "User name" },
          { name: "password", label: "Password" },
          { name: "passwordAgain", label: "Password again" },
        ],
        button: "SIGNUP",
      }}
    />
  );
};

export default SignupPage;
