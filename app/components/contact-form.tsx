"use client";

import { useState } from "react";
import { contact } from "../data/content";

const field =
  "w-full rounded-2xl bg-white-1 px-4 py-3 text-body-2 text-black-1 outline-none ring-1 ring-grey-2 transition-shadow placeholder:text-grey-3 focus:ring-2 focus:ring-blue-1";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-hand-1 text-blue-1">{children}</span>;
}

export function ContactForm() {
  const [tab, setTab] = useState(0);

  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const f = contact.form;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      design: formData.get("design"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex w-full max-w-[600px] flex-col items-center gap-6">
      {/* Tabs */}
      <div className="flex items-center gap-1 rounded-full bg-grey-1 p-1.5">
        {contact.formTabs.map((t, i) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              setTab(i);
              setStatus("idle");
            }}
            className={`rounded-full px-5 py-2 text-body-1 transition-colors duration-200 ${
              tab === i
                ? "bg-white-1 text-black-1 shadow-sm"
                : "text-grey-3 hover:text-black-1"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 0 ? (
        <form
          onSubmit={onSubmit}
          className="flex w-full flex-col gap-5 rounded-[28px] bg-grey-1 p-6"
        >
          {/* Name + Email */}
          <div className="flex flex-col gap-5 sm:flex-row">
            <label className="flex flex-1 flex-col gap-2.5">
              <Label>{f.nameLabel}</Label>

              <input
                type="text"
                name="name"
                placeholder={f.namePlaceholder}
                required
                className={field}
              />
            </label>

            <label className="flex flex-1 flex-col gap-2.5">
              <Label>{f.emailLabel}</Label>

              <input
                type="email"
                name="email"
                placeholder={f.emailPlaceholder}
                required
                className={field}
              />
            </label>
          </div>

          {/* Design */}
          <label className="flex flex-col gap-2.5">
            <Label>{f.designLabel}</Label>

            <input
              type="text"
              name="design"
              placeholder={f.designPlaceholder}
              required
              className={field}
            />
          </label>

          {/* Message */}
          <label className="flex flex-col gap-2.5">
            <Label>{f.messageLabel}</Label>

            <textarea
              name="message"
              rows={4}
              placeholder={f.messagePlaceholder}
              required
              className={`${field} resize-y`}
            />
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-1 rounded-full bg-black-1 px-6 py-3.5 text-body-1 text-white-1 transition-all duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "idle"
              ? f.submit
              : status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Message sent ✓"
                  : "Something went wrong"}
          </button>

          {/* Success message */}
          {status === "sent" && (
            <p className="text-center text-body-1 text-green-600">
              Thanks! Your message has been received.
            </p>
          )}

          {/* Error message */}
          {status === "error" && (
            <p className="text-center text-body-1 text-red-500">
              Could not send your message. Please try again.
            </p>
          )}
        </form>
      ) : (
        <div className="flex w-full flex-col items-center gap-5 rounded-[28px] bg-grey-1 p-8 text-center">
          <p className="text-body-2 text-grey-3">
            Pick a time that works for you and let&rsquo;s talk.
          </p>

          <a
            href={contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black-1 px-6 py-3.5 text-body-1 text-white-1 transition-all duration-200 hover:brightness-110"
          >
            Book a Call
          </a>
        </div>
      )}
    </div>
  );
}