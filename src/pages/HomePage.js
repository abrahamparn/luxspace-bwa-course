import react from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import BrowsTheRoom from "parts/HomePage/BrowsTheRoom";
import JustArrive from "parts/HomePage/JustArrive";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Clients from "parts/Clients";
export default function HomePage(){
    return(
        <>
            <Header/>
            <Hero/>
            <BrowsTheRoom/>
            <JustArrive/>
            <Clients/>
            <Sitemap/>
            <Footer/>
        </>
    )
} 