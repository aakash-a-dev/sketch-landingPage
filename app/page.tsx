import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./(landing-page)/Navbar";
import Hero from "./(landing-page)/Hero";
import About from "./(landing-page)/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex justify-center items-center">
        <About />
        </div>
    </>
  );
}
