import type { Metadata } from "next";
import { NotFoundScreen } from "../components/not-found-screen";

export const metadata: Metadata = { title: "404 — Page Not Found" };

export default function NotFoundPageRoute() {
  return <NotFoundScreen />;
}
