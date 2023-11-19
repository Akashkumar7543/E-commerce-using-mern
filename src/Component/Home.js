import React from "react";
import Navbar from './Navbar';
import Carousel from './Carousel';
import Featured from './Featured';
import Banner from "./Banner";
import Ourproduct from './Ourproduct';
import Footer from './Footer';
function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Featured />
            <Banner />
            <Ourproduct />
            <Footer />
        </div>
    );
}

export default Home;