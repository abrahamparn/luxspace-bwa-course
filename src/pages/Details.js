import react from "react";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";

// import BrowsTheRoom from "parts/HomePage/BrowsTheRoom";
// import JustArrive from "parts/HomePage/JustArrive";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Clients from "parts/Clients";
export default function HomePage(){
    return(
        <>
            <Header theme = "black"/>
            <Breadcrumb
                list={[
                { url: "/", name: "Home" },
                { url: "/categories/91231", name: "Office Room" },
                { url: "/categories/91231/products/7888", name: "Details" },
                ]}
            ></Breadcrumb>
            <Clients/>
            <Sitemap/>
            <Footer/>
        </>
    )
} 