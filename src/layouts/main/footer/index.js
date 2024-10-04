import { TiArrowForward } from "react-icons/ti";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
export default function Footer() {
    const [showButton, setShowButton] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // 300px'den fazla kaydırıldığında buton görünsün
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll); 
        return () => {
            window.removeEventListener("scroll", handleScroll); // Component unmount olunca event'i kaldır
        };
    }, []);

    // Sayfanın en üstüne kaydıran fonksiyon
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="relative">
            <div className="px-5 md:px-20 bg-cover bg-center w-[1980px] h-full" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/background/images.jpg)` }}>
                <div className="mt-auto text-white flex flex-col md:flex-row">
                    <div className="my-3 pt-6 w-full flex items-center outline-none">
                        <div>
                            <FaPhoneSquareAlt className="w-12 h-12 md:w-20 md:h-20 text-red-500" />
                        </div>

                        <div className="mx-3">
                            <div className="text-lg md:text-xl font-semibold">HIZLI BAŞVURU HATTI</div>
                            <div className="text-xl md:text-2xl sm:text-4xl font-medium">0543 345 43 34</div>
                        </div>
                    </div>

                    <label className="relative block mt-10 md:mt-20 w-full">
                        <div className="text-sm md:text-md sm:text-xl pb-3">Kampanyalarımız ve tüm gelişmeler hakkında detaylı bilgi almak için formu doldurun, hemen sizi arayalım.</div>
                        <div className="absolute pt-3 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 22">
                                <path d="M3.02832 10L10.2246 14.8166C10.8661 15.2443 11.1869 15.4581 11.5336 15.5412C11.8399 15.6146 12.1593 15.6146 12.4657 15.5412C12.8124 15.4581 13.1332 15.2443 13.7747 14.8166L20.971 10M10.2981 4.06879L4.49814 7.71127C3.95121 8.05474 3.67775 8.22648 3.4794 8.45864C3.30385 8.66412 3.17176 8.90305 3.09111 9.161C3 9.45244 3 9.77535 3 10.4212V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V10.4212C21 9.77535 21 9.45244 20.9089 9.161C20.8282 8.90305 20.6962 8.66412 20.5206 8.45864C20.3223 8.22648 20.0488 8.05474 19.5019 7.71127L13.7019 4.06879C13.0846 3.68116 12.776 3.48735 12.4449 3.4118C12.152 3.34499 11.848 3.34499 11.5551 3.4118C11.224 3.48735 10.9154 3.68116 10.2981 4.06879Z" />
                            </svg>
                        </div>

                        <input placeholder="E-posta adresiniz" required id="toggle-button" className="outline-none peer bg-[color:var(--background-secondary)] border-2 border-[color:var(--background-third)] font-bold text-sm md:text-md rounded-lg focus:bg-[color:var(--background-primary)] block w-full px-5 py-3 md:px-5 md:py-3" />
                        <button
                            type="button"
                            className="mt-2 btn btn-danger bg-red-500 hover:bg-[#fffdf5] hover:text-red-500 border-[2px] font-medium rounded-lg w-full md:w-[150px] h-[40px] md:h-[50px]"
                        >
                            Gönder
                        </button>
                    </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 text-white pt-12 md:pt-24 pb-4">
                    <div className="text-lg md:text-2xl font-medium">
                        <div>Tod TV Paketleri</div>
                        <div className="flex justify-start items-center gap-3 mt-5 md:mt-10">
                            <TiArrowForward className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                            <div className="text-white block text-sm md:text-base font-normal">Sporun Yıldızı Paketi Kredi Kartlı</div>
                        </div>
                        <div className="flex justify-start items-center gap-3 mt-5 md:mt-10">
                            <TiArrowForward className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                            <div className="text-white block text-sm md:text-base font-normal">Digiturk Sporun Yıldızı (Kutusuz)</div>
                        </div>
                        <div className="flex justify-start items-center gap-3 mt-5 md:mt-10">
                            <TiArrowForward className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                            <div className="text-white block text-sm md:text-base font-normal">Digiturk Taraftar Paketi (Kutusuz)</div>
                        </div>
                    </div>
                    <div className="text-lg md:text-2xl font-medium">
                        <div>Bein Connect Paketleri</div>
                        <div className="flex justify-start items-center gap-3 mt-5 md:mt-10">
                            <TiArrowForward className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                            <div className="text-white block text-sm md:text-base font-normal">Sporun Yıldızı Paketi Kredi Kartlı</div>
                        </div>
                        <div className="flex justify-start items-center gap-3 mt-5 md:mt-10">
                            <TiArrowForward className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                            <div className="text-white block text-sm md:text-base font-normal">Digiturk Sporun Yıldızı (Kutusuz)</div>
                        </div>
                        <div className="flex justify-start items-center gap-3 mt-5 md:mt-10">
                            <TiArrowForward className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                            <div className="text-white block text-sm md:text-base font-normal">Digiturk Taraftar Paketi (Kutusuz)</div>
                        </div>
                    </div>
                    <div className="text-lg md:text-2xl font-medium">
                        <div>İnternet + TV Kampanyaları</div>
                        <div className="flex justify-start items-center gap-3 mt-5 md:mt-10">
                            <TiArrowForward className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                            <div className="text-white block text-sm md:text-base font-normal">Digitürk İnternetli Sporun Yıldızı (Kutusuz)</div>
                        </div>
                        <div className="flex justify-start items-center gap-3 mt-5 md:mt-10">
                            <TiArrowForward className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                            <div className="text-white block text-sm md:text-base font-normal">Digiturk İnternetli Sporun Yıldızı</div>
                        </div>
                        <div className="flex justify-start items-center gap-3 mt-5 md:mt-10">
                            <TiArrowForward className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                            <div className="text-white block text-sm md:text-base font-normal">Digitürk İnternetli Eğlencenin ve Avrupanın Yıldızı (Kutusuz)</div>
                        </div>
                    </div>
                    <div className="text-base font-normal">
                        <p className="font-medium pb-4">Get the App</p>
                        <img alt="Description of the image" src="/img/logo/AppStore.png" className="w-[100px] md:w-[119px] pb-4" />
                        <img alt="Description of the image" src="/img/logo/GooglePlay.png" className="w-[100px] md:w-[119px] pb-12" />
                        <p className="pb-4 font-medium">Follow Us</p>
                        <div className="grid grid-cols-5">
                            <button className="hover:border w-7 p-1">
                                <img alt="Description of the image" className="text-black" src="/img/logo/youtube.png" />
                            </button>
                            <button className="hover:border w-7 p-1">
                                <img alt="Description of the image" className="text-black" src="/img/logo/Vector9.png" />
                            </button>
                            <button className="hover:border w-7 p-1">
                                <img alt="Description of the image" className="text-black" src="/img/logo/Vector10.png" />
                            </button>
                            <button className="hover:border w-7 p-1">
                                <img alt="Description of the image" className="text-black" src="/img/logo/instagram.png" />
                            </button>
                            <button className="hover:border w-7 p-1">
                                <img alt="Description of the image" className="text-black" src="/img/logo/linkedin.png" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-[#334155] w-[100%]" />
                <div className="text-[#E2E8F0] text-xs md:text-base font-normal flex flex-col md:flex-row justify-between items-center">
                    <p>© 2022 İkra Telekom | Bu sitenin tüm hakları saklıdır.</p>
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 text-[#E2E8F0] pt-4">
                            <p>Terms</p>
                            <p>Privacy</p>
                            <p>Contact</p>
                            <p className="flex gap-2"><img alt="A" src="/img/logo/world.png" className="w-4" />EN</p>
                        </div>
                    </div>
                </div>

            </div>

            {showButton && ( 
                  <button
                  onClick={scrollToTop}
                  className={`fixed bottom-10 right-10 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-700 scroll-button ${showButton ? 'scroll-button-visible' : 'scroll-button-hidden'}`} // Animasyonlu görünme
              >
                  Yukarı Çık
              </button>
            )}
        </div>
    );
}

