import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "components/Input";
import { Textarea } from "components/Textarea";

export default function FormspreeForm({ formId }) {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p>Thanks for sending us a message!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-3xl flex flex-col gap-3">
      <div className="w-full">
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="email address"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <Textarea id="message" name="message" placeholder="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        className="btn px-5 py-3"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}
