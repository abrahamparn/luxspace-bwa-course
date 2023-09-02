import react from "react";
import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowsTheRoom from "parts/HomePage/BrowsTheRoom";
import JustArrive from "parts/HomePage/JustArrive";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Clients from "parts/Clients";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useModalDOM from "helpers/hooks/useModalDOM";
export default function HomePage(){
    useScrollAnchor()
    useModalDOM()
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