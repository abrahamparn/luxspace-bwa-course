import React from 'react'
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import { Link } from 'react-router-dom'
import ErrorPageMessage from 'parts/ErrorPageMessage';
import Footer from "parts/Sitemap";
import Sitemap from "parts/Footer";
export default function Notfound() {
  return (
    <>
    <Header theme = "black"/>
    <ErrorPageMessage/>
   
    <Sitemap/> 
    <Footer/>
    </>

  )
}
