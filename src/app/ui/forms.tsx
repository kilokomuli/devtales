export default function Subscribe() {
    return (
        <div className="flex flex-col">
            <form>
                <input type="email" placeholder="Email Address" />
                <button className="py-1.5 px-3 bg-orange-500 rounded-lg font-semi-bold text-white">Subscribe</button>
            </form>
        </div>
    );
}