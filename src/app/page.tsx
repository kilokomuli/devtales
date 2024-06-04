// import { lusitana } from "./ui/fonts";
import Navbar from './ui/navbar';
import Hero from './ui/hero';
import Footer from './ui/footer';
import Newsletter from './ui/newsletter';
import About from './ui/about';
import Features from './ui/features';


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <Hero />
        <Features />
        <About />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}