export default function BestCard({img,title,subTitle,button}){
    return(
        <div className="shadow-box max-w-sm border-1 border-[#0F172A] bg-[#0F172A] rounded-[10px] shadow ">
                    <div className="mb-12">
                        <img src={img} className="h-[220px] w-[394px] w-full rounded-[10px]" alt="Description of the image"/>
                    </div>
                    <div className="mx-4">
                        <div className="h-[26px] gap-4 w-[330px]">
                            <h6 className="text-2xl font-bold text-white">{title}</h6>
                        </div>
                        <div className="font-normal text-lg text-white my-3">{subTitle}</div>
                        <div className="h-15 my-6">
                            <div className="flex justify-center items-center gap-3 w-full  text-white border-[2px] rounded-lg block text-base border-white px-3 py-1.5 text-xl">
                               <img src="/img/logo/Vector.png" alt="Logo" />
                                {button}
                            </div>
                        </div>
                    </div>
                </div>
    )
}