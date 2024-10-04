export default function LogoButton({ button ,className}) {
    return (

            <div className={`text-[#78350F] border-[2px] rounded-lg block text-base border-[#78350F] ${className}`}>
                <img src="/img/logo/Vector.png" alt="Logo" />
                {button}
            </div>
    )
}