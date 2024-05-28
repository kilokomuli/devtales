import { lusitana } from "./fonts";

export default function DevTalesLogo() {
    return (
        <div className={`${lusitana.className} flex flex-row items-center leading-none`}>
            <p className="text-[30px] font-bold">DevTales</p>
        </div>
    );
}