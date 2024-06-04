import Explore from "./button";

export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-6xl font-bold mb-4">Welcome to DevTales</h1>
        <p className="text-xl mb-8">Your source for the latest in web development.</p>
        <Explore />
      </section>
    );
  }