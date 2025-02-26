import { useFormData } from "herotofu-react";
import { useEffect } from "react";
import "./ContactForm.css";

export function ContactForm() {
  const { formState, getFormSubmitHandler } = useFormData(
    "https://public.herotofu.com/v1/22f60dd0-f44b-11ef-831c-f7fd4c94a18d"
  );

  useEffect(() => {
    if (formState.status === "success") {
      alert("Thank you! Your message has been sent.");
    } else if (formState.status === "error") {
      alert("Oops! Something went wrong. Please try again.");
    }
  }, [formState.status]);

  return (
    <>
      <form onSubmit={getFormSubmitHandler()}>
        <div>
          <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div>
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
          <button type="submit">Send a message</button>
        </div>
      </form>
    </>
  );
}
