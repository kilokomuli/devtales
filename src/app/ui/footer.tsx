export default function Footer () {
    return (
        <footer>
            <div className="flex justify-center items-center py-6 bg-gray-800 text-white">
                <p className="text-lg font-bold">&copy; {new Date().getFullYear()} DevTales. All rights reserved.</p>
            </div>
        </footer>
    );
}