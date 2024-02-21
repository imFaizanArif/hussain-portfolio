import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <CaseStudies />
      <Footer />
    </>
  );
}
