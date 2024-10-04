import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/outline';
export default function Collection() {

    return (
        <div className=" md:w-[1850px] border-2 border-black-400 ml-4 mb-20  w-[1300px] h-[500px] bg-white shadow-2xl rounded-2xl p-4 mt-24">
            <div className="text-3xl font-bold text-center">Digiturk Eğlencenin ve Avrupanın Yıldızı Sıkça Sorulan Sorular</div>
            <div className=" p-4">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full text-left bg-[#f8f3ed] text-[#fab873] border border-[#fab873] font-bold text-2xl py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mb-12">
                                <span >Digiturk Avrupanın Yıldızı Paketi Nedir ?</span>
                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${open ? 'transform rotate-180' : ''}`} />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 p-4 border border-blue-300 rounded bg-blue-50">
                                <p className="text-gray-700">
                                    "Digiturk Avrupanın Yıldızı Paketi'ni takip etmek oldukça basittir ve içeriğinden en iyi şekilde yararlanmak için aşağıdaki adımları izleyebilirsiniz:
                                </p>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full text-left bg-[#f8f3ed] text-[#fab873] border border-[#fab873] font-bold text-2xl py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mb-12">
                                <span >Digiturk Avrupanın Yıldızı Paketi Nasıl İzlenir?</span>
                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${open ? 'transform rotate-180' : ''}`} />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 p-4 border border-blue-300 rounded bg-blue-50">
                                <p className="text-gray-700">
                                    "Digiturk Avrupanın Yıldızı Paketi'ni takip etmek oldukça basittir ve içeriğinden en iyi şekilde yararlanmak için aşağıdaki adımları izleyebilirsiniz:

                                    1. Digiturk Aboneliği: İlk olarak, Digiturk Avrupanın Yıldızı Paketi'nden faydalanmak için bir Digiturk üyeliğinizin olması gereklidir. Eğer zaten bir Digiturk abonesiyseniz, kolaylıkla Dizinin Yıldızı Paketi'ne geçiş yapabilirsiniz. Abone değilseniz, Digiturk resmi web sitesi veya müşteri hizmetleri aracılığıyla abonelik başvurusu yapmanız gerekebilir.

                                    2. Paket Seçimi: Aboneliğinizi aldıktan veya güncelledikten sonra, Digiturk'ün geniş kanal ve paket seçenekleri arasından "Digiturk Avrupanın Yıldızı Paketi"ni tercih etmelisiniz. Bu seçenek, size geniş bir film ve dizi içeriği sunacaktır.

                                </p>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full text-left bg-[#f8f3ed] text-[#fab873] border border-[#fab873] font-bold text-2xl py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                                <span >Digiturk Avrupanın Yıldızı Paketi'ne Nasıl Abone Olunur ?</span>
                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${open ? 'transform rotate-180' : ''}`} />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 p-4 border border-blue-300 rounded bg-blue-50">
                                <p className="text-gray-700">
                                    "Digiturk Avrupanın Yıldızı Paketi'ne sahip olmak, oldukça basit bir adımlar dizisiyle gerçekleşir. İşte bu özel pakete nasıl abone olabileceğinizi adım adım bulabilirsiniz:

                                    1. Digiturk Resmi Web Sitesi: İlk olarak, Digiturk'ün resmi web sitesini ziyaret edin. Genellikle ana sayfada bulunan "Paketler" veya "Abonelik" sekmesine tıklayarak abonelik işlemlerine hızla erişebilirsiniz.
                                </p>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}