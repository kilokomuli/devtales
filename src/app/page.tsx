// import { lusitana } from "./ui/fonts";
import Navbar from './ui/navbar';
import Hero from './ui/hero';
import Footer from './ui/footer';
import Newsletter from './ui/newsletter';


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <Hero />
        <section id="featured" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            {/* Placeholder for featured articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Web Infrastructure.</h3>
                <p className="text-gray-700 mb-4">Unveiling the web: A journey through the infrastructure of typing https://www.google.com and hit Enter</p>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Tales about my portfolio project</h3>
                <p className="text-gray-700 mb-4">A walk through my portfolio project, inspirations and persepectives </p>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">How to create a minigame in python</h3>
                <p className="text-gray-700 mb-4">Build a minigame console app.</p>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
            </div>
          </div>
        </section>
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}