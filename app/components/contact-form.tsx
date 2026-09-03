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
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const f = contact.form;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <div className="flex w-full max-w-[600px] flex-col items-center gap-6">
      {/* tabs */}
      <div className="flex items-center gap-1 rounded-full bg-grey-1 p-1.5">
        {contact.formTabs.map((t, i) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(i)}
            className={`rounded-full px-5 py-2 text-body-1 transition-colors duration-200 ${
              tab === i ? "bg-white-1 text-black-1 shadow-sm" : "text-grey-3 hover:text-black-1"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 0 ? (
        <form onSubmit={onSubmit} className="flex w-full flex-col gap-5 rounded-[28px] bg-grey-1 p-6">
          <div className="flex flex-col gap-5 sm:flex-row">
            <label className="flex flex-1 flex-col gap-2.5">
              <Label>{f.nameLabel}</Label>
              <input type="text" name="name" placeholder={f.namePlaceholder} className={field} />
            </label>
            <label className="flex flex-1 flex-col gap-2.5">
              <Label>{f.emailLabel}</Label>
              <input type="email" name="email" placeholder={f.emailPlaceholder} className={field} />
            </label>
          </div>
          <label className="flex flex-col gap-2.5">
            <Label>{f.designLabel}</Label>
            <input type="text" name="design" placeholder={f.designPlaceholder} className={field} />
          </label>
          <label className="flex flex-col gap-2.5">
            <Label>{f.messageLabel}</Label>
            <textarea name="message" rows={4} placeholder={f.messagePlaceholder} className={`${field} resize-y`} />
          </label>
          <button
            type="submit"
            disabled={status !== "idle"}
            className="mt-1 rounded-full bg-black-1 px-6 py-3.5 text-body-1 text-white-1 transition-all duration-200 hover:brightness-110 disabled:opacity-90"
          >
            {status === "idle" ? f.submit : status === "sending" ? "Sending…" : "Message sent ✓"}
          </button>
        </form>
      ) : (
        <div className="flex w-full flex-col items-center gap-5 rounded-[28px] bg-grey-1 p-8 text-center">
          <p className="text-body-2 text-grey-3">Pick a time that works for you and let&rsquo;s talk.</p>
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
