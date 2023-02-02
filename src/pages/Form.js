import { useRef } from "react";
import useForm from "./UseForm";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - fill on the later step

const Form = () => {
  const formElement = useRef(null);
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = useForm({
    form: formElement.current,
    additionalData,
  });

  if (status === "success") {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div className="text-2xl">Something bad happened!</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      ref={formElement}
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your message"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      {status !== "loading" && (
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send a message
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;