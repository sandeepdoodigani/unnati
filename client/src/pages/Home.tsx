import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Programs from "@/components/Programs";
import About from "@/components/About";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ImpactStats />
        <Programs />
        <About />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
