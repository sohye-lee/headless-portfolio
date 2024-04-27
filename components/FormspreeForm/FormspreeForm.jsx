import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "components/Input";
import { Textarea } from "components/Textarea";
import Link from "next/link";

export default function FormspreeForm({ formId }) {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return (
      <div className="px-4">
        <p className="font-light text-blue-700 ">
          Thanks for sending me a message!
        </p>
        <Link
          href="/"
          className="btn bg-white text-black border border-black hover:bg-gray-100 mt-5 inline-block"
        >
          Back to Home
        </Link>
      </div>
    );
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
      <div>
        <button
          className="btn px-5 py-3 inline-block"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
