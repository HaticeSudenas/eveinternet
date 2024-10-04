export default function NaviCard({imgr,imgi,head,text}) {
    return (
        <div className="w-[373px] h-[205px]">
            <div className="relative mb-3">
                <img src={imgr} className="ml-8 absolute w-[45px] h-[43px] inset-0" />
                <div className="relative">
                    <img src={imgi} className="w-[64px] h-[64px]" />
                </div>
            </div>
            <div className="font-medium text-xl text-[#0F172A] mb-3">{head}</div>
            <div className="font-normal text-lg text-[#0F172A]">{text}</div>

        </div>
    )
}