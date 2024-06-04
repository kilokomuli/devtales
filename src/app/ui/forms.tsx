export default function Subscribe() {
    return (
        <form className="flex flex-col md:flex-row w-full max-w-md mx-auto">
            <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            />
            <button
                type="submit"
                className="px-6 py-3 rounded-r-lg bg-blue-500 text-white font-bold uppercase border-blue-500 border-t border-b border-r"
            >
                Subscribe
            </button>
        </form>

    );
}