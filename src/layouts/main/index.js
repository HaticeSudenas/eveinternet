import Content from "./content";
import Footer from "./footer";
import NavBar from "./navbar";

export default function MainLayout(){
    return(
        <div style={{backgroundColor:"#fffdf5"}}>
            <div className="h-[1044px] mx-auto">
                <NavBar />
            </div>
            <div className="h-full mx-auto">
                <Content/>
            </div>
            <div className="md:h-[790px] h-[1650px] mx-auto">
                <Footer/>
            </div>
        </div>
    )
}