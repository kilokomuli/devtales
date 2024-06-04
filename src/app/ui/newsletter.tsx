import Subscribe from "./forms";

export default function Newsletter() {
    return (
        <section className="relative flex flex-col items-center text-center py-20 bg-gray-100">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}></div>
            <div className="relative z-10 max-w-3xl mx-auto px-6 py-10 bg-white bg-opacity-90 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h1>
                <p className="text-l mb-8">Get the latest posts delivered right to your inbox</p>
                <Subscribe />
            </div>
        </section>
    );
}