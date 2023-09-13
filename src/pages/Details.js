import React from "react"; 
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import { useParams } from "react-router-dom";

import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Clients from "parts/Clients";
import useAsync from "helpers/hooks/useAsync";
import fetch from "helpers/fetch";
import { useEffect } from "react";

export default function HomePage(){
const { data, error, run, isLoading, isError } = useAsync();
const { idp } = useParams();
console.log(idp)
  React.useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run]);
  console.log(data)
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
            {isLoading ? "isloading" :          
              <ProductDetails data={data}/>
            }
            {isLoading ? "isloading" :          
            <Suggestion data={data?.relatedProducts || {}}/>
            }
            <Clients/>
            <Sitemap/>
            <Footer/>
        </>
    )
} 