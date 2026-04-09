'use client'
import NavBar from "@/components/home/NavBar";
import { EventsPage } from "@/components/home/events-page";
import Footer from "@/components/home/Footer";

export default function Page() {
  return (
    <>
      <NavBar />
      <EventsPage />
      <Footer />
    </>
  );
}
