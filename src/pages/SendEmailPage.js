import Form from "../components/Form";

const SendEmailPage = ({ setEmail, page, setPage }) => {
  return (
    <Form
      name="sendEmail"
      elementsData={{
        title: "Forgot Password",
        input: [{ name: "email", label: "E-mail" }],
        button: "SEND",
      }}
      setEmail={setEmail}
      setPage={setPage}
      page={page}
    />
  );
};

export default SendEmailPage;
