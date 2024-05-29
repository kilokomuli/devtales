import Subscribe from "./forms";

export default function Newsletter() {
    return (
        <section className="flex flex-col items-center text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Subscribe to My Newsletter</h1>
            <p className="text-xl mb-8">Get the latest posts delivered right to your inbox</p>
            <Subscribe />
        </section>
    );
}