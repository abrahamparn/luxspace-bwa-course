import React from 'react'
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import { Link } from 'react-router-dom'

import Footer from "parts/Sitemap";
import Sitemap from "parts/Footer";
export default function Congratulations() {
  return (
    <>
    <Header theme = "black"/>
           
   
    <Sitemap/> 
    <Footer/>
    </>

  )
}
