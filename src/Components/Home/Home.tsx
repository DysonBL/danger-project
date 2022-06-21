import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Carousel from "react-bootstrap/Carousel";

import "./Home.css";
import TopBar from "../TopBar/TopBar";
import AppBar from "../AppBar/AppBar";
import Intro from "../Intro/Intro";
import Service from "../Service/Service";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import Counter from "../Counter/Counter";
import Trusted from "../Trusted/Trusted";
import Career from "../Career/Career";
import Hero from "../Hero/Hero";
import WhatsNew from "../WhatsNew/WhatsNew";

const Home = () => {
  

  return (
    <>
      <div>
        <div className="col-12 md-5 ">
          <div className="NavbarTop col-12 md-4 ">
            <TopBar />
          </div>
          <div className="NavbarBottom">
            <AppBar />
          </div>
          <div className="hero Image col-12 md-5">{/* <Hero/> */}</div>

          <div className="container">
            <div className="row">
              <Intro />
            </div>
          </div>

          <div className="services col-12 md-5 d-felix">
            <div className="servise-bg col-12 md-8">
              <Service />
            </div>
          </div>
          <div className="whats-new col-12">
            <div className="whats-carosal row">
              <h2 className="whats-head">what's New</h2>
              <div className="carosal-img col-5">
                {/* <WhatsNew /> */}
              </div>
            </div>
          </div>
          <h1 className="services-head">career</h1>

          <div className="career col-12 md-5 ">
            <Career />
          </div>
          <div className="trust col-8 md-5">
            <h2 className="trust-title">Trusted Partner</h2>
            <div className="row">
              <Trusted />
            </div>
          </div>
          <div className="col-12 counter-box d-felix">
            <Counter />
          </div>
          <div className="Form col-12">
            <div className="row">
              <Form />
            </div>
          </div>
          <div className="col-12 md-5 Footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
