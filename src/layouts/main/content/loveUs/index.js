import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
export default function LoveUs() {

    const cards = [
        {
            id:"1",
            author: 'Yıldızlar geçidi, tüm zamanların ünlüleri, bol ödüllü, bol yıldızlı klasik filmler ve ödüllü komedi dizileri ile sitcomlar',
            role: 'Film ve Dizi',
            imageUrl: "	https://digiturk-internet.com.tr/Upload/Diger/avengers-altmanset-1.png",
        },
        {
            id:"2",
            author: 'Dünya mutfağının farklı tatlarına uzanan geniş bir içerikle beIN Gurme, yemek ve eğlence temalı beIN H&E ve daha birçok kanal.',
            role: 'Müzik ve Yaşam',
            imageUrl: "https://digiturk-internet.com.tr/Upload/Diger/ayhan-altmanset.png",
        },
        {
            id:"3",
            author: 'Futbol, basketbol ve tenis karşılaşmalarının olduğu spor heyecanını yaşatan yerli ve yabancı spor kanalları.',
            role: 'Spor',
            imageUrl: "https://digiturk-internet.com.tr/Upload/Diger/spor-extra-euroleague-bos.jpg",
        },
        {
            id:"4",
            author: 'Yıldızlar geçidi, tüm zamanların ünlüleri, bol ödüllü, bol yıldızlı klasik filmler ve ödüllü komedi dizileri ile sitcomlar',
            role: 'Film ve Dizi',
            imageUrl: "	https://digiturk-internet.com.tr/Upload/Diger/avengers-altmanset-1.png",
        },
        {
            id:"5",
            author: 'Birbirinden popüler ve kaliteli belgesel kanallarında vahşi yaşam, doğa belgeselleri, popüler bilim ve teknoloji serileri ile tarih belgeselleri',
            role: 'Belgesel',
            imageUrl: "https://digiturk-internet.com.tr/Upload/Diger/nelervar-nat-geo-wild-kucuk.png",
        },
    ];

    const [sliderRef, setSliderRef] = useState(null);
    const goToNext = () => {
        sliderRef.slickNext(); // Sonraki slayta git
    };

    const goToPrev = () => {
        sliderRef.slickPrev(); // Önceki slayta git
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="mt-20 px-20 mb-28 bg-cover bg-center w-full h-[732px] mb-[140px]">
            <div className="text-[#0F172A] text-6xl font-extrabold flex justify-between items-center py-16">
                Neler Var
                <div>
                    <button onClick={goToPrev} className="mr-3"><img src="/img/logo/Button.png" alt="Logo" /></button>
                    <button onClick={goToNext}><img src="/img/logo/Button (1).png" alt="Logo" /></button>
                </div>
            </div>
            <div className="relative ">
                <div  className="shadow-md w-full h-[300px] md:h-[421px] absolute bg-[#fab873]" />
                <Slider className="mb-[30px]" ref={(ref) => setSliderRef(ref)} {...settings}>
                {cards.map((card, index) => (
                        <div  key={card.id} className="text-center h-[430px] w-[1280px] relative top-4 left-32 block group text-left flex gap-3">
                            <div className="bg-white rounded-[20px] shadow-top md:shadow-md p-6 md:w-[384px] md:h-[430px] w-[200px] h-[300px] border border-[#E2E8F0]">
                                <div className=" w-full  items-center block group">
                                    <img src={card.imageUrl} className="md:w-full h-full rounded-md" alt="Description of the image" />
                                    <div className="hidden md:block mx-3 flex-1">
                                        <h6 className="font-normal text-xl font-semibold mt-2">{card.role}</h6>
                                        <div className=" font-normal text-lg text-[#475569] my-1 ">{card.author}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
            <Disclosure>
                    {({ open}) => (
                        <>
                            <Disclosure.Button className={classNames(" shadow-box rounded border-1 border-[#fab873] h-[52px] flex items-center justify-between w-full text-[18px] px-4 font-semibold text-[#4f4f4e] hover:bg-[#fab873] hover:text-white transition-colors my-3", { "rounded-b-lg": open })}>
                                Kampanya Detayları
                                <svg className={classNames({ "rotate-180 text-[color:var(--color-primary)]": open })} viewBox="0 0 24 24" width={18.75} height={18.75}>
                                    <path
                                        fill="currentColor"
                                        d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel >
                                <div className="flex w-full h-full  px-4 mb-[80px]  gap-3 text-[17px] font-normal  transition-colors text-[#4f4f4e]">
                                    Kampanya 12 ay taahhütle Eğlencenin ve Avrupanın Yıldızı Paketi’ni kapsar.
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
        </div>
    )
}



