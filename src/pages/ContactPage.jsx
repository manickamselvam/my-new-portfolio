import ContactDetails from "../component/ContactDetails";
import ContactForm from "../component/ContactForm";

const ContactPage = () => {
  return (
    <div className="lg:m-10 md:m-0">
      <div className="flex mt-5 flex-col-reverse md:flex-col-reverse lg:flex-row">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
