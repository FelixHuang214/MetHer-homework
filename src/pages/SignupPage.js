import Form from "../components/Form";

const SignupPage = ({ page }) => {
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
      page={page}
    />
  );
};

export default SignupPage;
