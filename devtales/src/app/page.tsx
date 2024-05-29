// import { lusitana } from "./ui/fonts";
import Navbar from './ui/navbar';
import Hero from './ui/hero';
import Footer from './ui/footer';


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
                <h3 className="text-2xl font-bold mb-2">Article 1</h3>
                <p className="text-gray-700 mb-4">Description of the first featured article.</p>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Article 2</h3>
                <p className="text-gray-700 mb-4">Description of the second featured article.</p>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Article 3</h3>
                <p className="text-gray-700 mb-4">Description of the third featured article.</p>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}