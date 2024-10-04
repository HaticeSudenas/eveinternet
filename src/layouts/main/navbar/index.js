
import Menu from "./menu";

export default function NavBar() {
    return (
        <nav className="px-20 bg-[#fffdf2] fixed bg-center w-full h-[170px] top-0 left-0 right-0 z-50  duration-300">
            <div className="pt-2 pb-2 flex items-center justify-between">
                <Menu />
            </div>
            <div className="h-px bg-[#cfcfcf] w-[100%]" />          
        </nav>
    )
}

