import { BsBadgeHd } from "react-icons/bs";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
export default function JoinUs() {
    return (
        <div className="mt-[-800px] bg-cover bg-center w-[1980px] h-[1100px] md:h-auto">
            <div className="mx-4 md:mx-28 bg-white shadow-2xl rounded-2xl p-4">
                <div className="flex flex-col md:flex-row justify-between w-full h-full transition-colors block group">
                    <div className="w-full md:w-[700px] h-[370px] md:h-[550px] relative mt-6 md:mt-0">
                        <img className="h-full w-full rounded-2xl" src="https://digiturk-internet.com.tr/Upload/Urunler/avrupa-yildizi-1.jpg" alt="Logo" />
                        <div className="absolute inset-0 flex m-4">
                            <span className="w-full md:w-[400px] text-white font-semibold text-lg md:text-xl">Digiturk Eğlencenin ve Avrupanın Yıldızı</span>
                        </div>
                        <div className="absolute inset-0 flex mt-[100px] md:mt-[200px] ml-5">
                            <span className="w-[400px] text-white font-semibold text-lg md:text-lg">Oscar'lı Filmler, Ödüllü Diziler...</span>
                        </div>
                        <div className="absolute inset-0 flex mt-[250px] md:mt-[450px] ml-5">
                            <span className="text-white font-normal text-lg md:text-2xl">12 ay</span>
                        </div>
                        <div className="absolute inset-0 flex mt-[300px] md:mt-[500px] ml-5">
                            <span className="text-white font-black text-3xl md:text-5xl">₺299 / ay</span>
                        </div>
                    </div>
                    <div className="text-[#0F172A] w-full md:w-[700px]">
                        <div className="flex flex-wrap">
                            <div className="text-2xl md:text-4xl pr-2 font-light">Ek ücret ödemeden</div>
                            <div className="text-2xl md:text-4xl pr-2 pt-2"><BsBadgeHd /></div>
                            <div className="text-2xl md:text-4xl font-bold">yüksek kalitede izle!</div>
                        </div>

                        <div className="overflow-hidden w-full mt-10">
                            <div className="flex animate-slide gap-4">
                                <img src="https://digiturk-internet.com.tr/Upload/Galeri/Buyuk/04-17.png" alt="Fotoğraf 1" className="w-[100px] h-[70px] md:w-[150px] md:h-[100px] object-cover" />
                                <img src="https://digiturk-internet.com.tr/Upload/Galeri/Buyuk/10-7.png" alt="Fotoğraf 2" className="w-[100px] h-[70px] md:w-[150px] md:h-[100px] object-cover" />
                                <img src="https://digiturk-internet.com.tr/Upload/Galeri/Buyuk/movies-stars-1.png" alt="Fotoğraf 3" className="w-[100px] h-[70px] md:w-[150px] md:h-[100px] object-cover" />
                                <img src="https://digiturk-internet.com.tr/Upload/Galeri/Buyuk/02-22.png" alt="Fotoğraf 4" className="w-[100px] h-[70px] md:w-[150px] md:h-[100px] object-cover" />
                                <img src="https://digiturk-internet.com.tr/Upload/Galeri/Buyuk/04-17.png" alt="Fotoğraf 1" className="w-[100px] h-[70px] md:w-[150px] md:h-[100px] object-cover" />
                                <img src="https://digiturk-internet.com.tr/Upload/Galeri/Buyuk/10-7.png" alt="Fotoğraf 2" className="w-[100px] h-[70px] md:w-[150px] md:h-[100px] object-cover" />
                                <img src="https://digiturk-internet.com.tr/Upload/Galeri/Buyuk/movies-stars-1.png" alt="Fotoğraf 3" className="w-[100px] h-[70px] md:w-[150px] md:h-[100px] object-cover" />
                                <img src="https://digiturk-internet.com.tr/Upload/Galeri/Buyuk/02-22.png" alt="Fotoğraf 4" className="w-[100px] h-[70px] md:w-[150px] md:h-[100px] object-cover" />
                            </div>
                        </div>

                        <div className="flex justify-start items-center gap-3 mt-10">
                            <MdOutlineLibraryAddCheck className="w-6 h-6 md:w-6 md:h-6" />
                            <div className="text-gray-400 block text-base md:text-xl font-normal">Premier League, Ligue 1, Türkiye Basketbol Ligi...</div>
                        </div>
                        <div className="flex justify-start items-center gap-3 my-3">
                            <MdOutlineLibraryAddCheck className="w-6 h-6 md:w-6 md:h-6" />
                            <div className="text-gray-400 block text-base md:text-xl font-normal">Digiturk beIN CONNECT'le istediğiniz zaman...</div>
                        </div>
                        <div className="flex justify-start items-center gap-3 mb-10">
                            <MdOutlineLibraryAddCheck className="w-6 h-6 md:w-6 md:h-6" />
                            <div className="text-gray-400 block text-base md:text-xl font-normal">2024 Formula 1 Heyecanı</div>
                        </div>

                        <button
                            type="button"
                            className="btn shadow-2xl mb-3 hover:bg-[#fab873] hover:text-white duration-500 border-[2px] text-lg md:text-xl font-medium rounded-lg w-full h-[60px] md:h-[80px]"
                        >
                            Digitürk Eğlencenin ve Avrupanın Yıldızı 12 ay ₺299 Satın Al Anında İzle!
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger bg-red-500 hover:bg-[#fffdf5] hover:text-red-500 border-[2px] text-sm md:text-base font-medium rounded-lg w-full md:w-[200px] h-[40px] md:h-[50px]"
                        >
                            Satın Al Anında İzle!
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
}
