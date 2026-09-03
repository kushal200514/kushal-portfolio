import type { Metadata } from "next";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { Contact } from "../sections/contact";

export const metadata: Metadata = { title: "Contact — Kushal" };

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
