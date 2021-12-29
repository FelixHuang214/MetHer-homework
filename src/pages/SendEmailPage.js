import Form from "../components/Form";

const SendEmailPage = () => {
  return (
    <Form
      name="sendEmail"
      elementsData={{
        title: "Forgot Password",
        input: [{ name: "email", label: "E-mail" }],
        button: "SEND",
      }}
    />
  );
};

export default SendEmailPage;
