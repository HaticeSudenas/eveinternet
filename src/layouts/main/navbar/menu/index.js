import { useState } from "react";
import { MdMenu, MdClose, MdVideoCameraFront } from "react-icons/md";


export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    // Menüyü açma kapama fonksiyonu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="border-gray-200 px-4 py-2.5 rounded ">

            <div className="flex justify-between items-center">

                <div className="pt-4 pr-[25px] w-[150px] h-[40px]">
                    <img
                        src="https://digiturk-internet.com.tr/Content/assets/img/logo.png"
                        alt="Logo"
                    />
                </div>

                <div className="md:hidden w-30 flex  ">
                    <button
                        onClick={toggleMenu}
                        className="text-3xl pl-24 pr-4 focus:outline-none"
                    >
                        {isOpen ? <MdClose /> : <MdMenu />}
                    </button>
                </div>


                <div className="hidden md:flex">
                    <ul className="gap-4 font-normal text-xl flex p-4 mt-4 rounded-lg md:space-x-10 rtl:space-x-reverse md:mt-0">
                        <button
                            type="button"
                            className="btn btn-danger bg-gradient-to-r from-orange-300 to-gray-800 font-bold rounded-full w-[80px] h-[40px]"
                        >
                            Tod TV
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger bg-gradient-to-r from-purple-800 to-blue-900 font-bold rounded-full w-[160px] h-[40px]"
                        >
                            beIN CONNECT
                        </button>
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-gray text-black border-none text-base  dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Digiturk Paketleri
                            </button>
                        </div>
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-gray text-black border-none text-base  dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Digiturk İnternet Paketleri
                            </button>
                        </div>
                        <button
                            type="button"
                            className="flex btn btn-outline-danger border-[2px]  rounded-lg w-[140px] h-[40px]"
                        >
                            <div className="pt-1 flex">
                                <MdVideoCameraFront className="w-6 h-6" />
                                <div className="pl-2">Canlı Yayın</div>
                            </div>
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger bg-red-500 hover:bg-[#fffdf5] hover:text-red-500 border-[2px]  rounded-lg w-[140px] h-[40px]"
                        >
                            Hemen Başvur
                        </button>
                    </ul>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col p-4 mt-4 space-y-2 bg-gray-100 rounded-lg">
                        <button
                            type="button"
                            className="btn btn-danger bg-gradient-to-r from-orange-300 to-gray-800 font-bold rounded-full w-full h-[50px]"
                        >
                            Tod TV
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger bg-gradient-to-r from-purple-800 to-blue-900 font-bold rounded-full w-full h-[50px]"
                        >
                            beIN CONNECT
                        </button>
                        <button
                            type="button"
                            className="btn btn-gray text-black border-none text-xl font-medium"
                        >
                            Digiturk Paketleri
                        </button>
                        <button
                            type="button"
                            className="btn btn-gray text-black border-none text-xl font-medium"
                        >
                            Digiturk İnternet Paketleri
                        </button>
                        <button
                            type="button"
                            className="flex btn btn-outline-danger border-[2px] font-medium rounded-lg w-full h-[50px]"
                        >
                            <div className="pt-1 flex">
                                <MdVideoCameraFront className="w-6 h-6" />
                                <div className="pl-2">Canlı Yayın</div>
                            </div>
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger bg-red-500 hover:bg-[#fffdf5] hover:text-red-500 border-[2px] font-medium rounded-lg w-full h-[50px]"
                        >
                            Hemen Başvur
                        </button>
                    </ul>
                </div>
            )}
        </nav>
    );
}
