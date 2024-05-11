import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./(landing-page)/Navbar";
import Hero from "./(landing-page)/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
    </>
  );
}
