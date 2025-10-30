import { Formik, Form, Field, ErrorMessage } from "formik";
import { notifySuccess, notifyError } from "../utils/toastService";
import * as Yup from "yup";
import formApi from "../api/formSubmitApi";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Your Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Your Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Your Mobile No is required"),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters")
    .required("Your Message is required"),
});

const ContactForm = () => {
  return (
    <section className="flex flex-col items-center justify-center md:min-h-0 md:w-full lg:w-1/2 lg:p-6 md:p-6">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-md p-8">
        <h1 className="text-blue-600 text-3xl font-bold text-center mb-6">
          Contact Form
        </h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            mobile: "",
            message: "",
          }}
          validationSchema={ContactSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await formApi.formSubmit(JSON.stringify(values));
              console.log("Response :", response);
              if (response.ok) {
                notifySuccess("Message sent sucessfully!");
                resetForm();
              }
            } catch (error) {
              console.log("Notification error :", error);
              notifyError("Message Failed to sent");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <Field
                  name="name"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Mobile No
                </label>
                <Field
                  name="mobile"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your mobile number"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Message
                </label>
                <Field
                  name="message"
                  as="textarea"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  placeholder="Write your message..."
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
