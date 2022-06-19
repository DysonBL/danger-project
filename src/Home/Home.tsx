import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import "./Home.css";
const Home = () => {
  const [Detail, setDetail] = useState<any[]>();
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    axios
      .get(`https://indegenerep.s3.ap-south-1.amazonaws.com/cdn/home.json`)
      .then((res: any) => {
        console.log(res.data, "GetApi Response");
        setDetail(res.data);
      })
      .catch((error) => {
        console.log(error, "getapiError");
      });
  }, []);

  console.log(Detail, "Alldatas is State");
  return (
    <>
      <div>
        <div className="col-12 md-5 ">
          {Detail?.map((data: any) => {
            console.log(data.trustedPartner[0].video, "me find data");

            return (
              <>
                <div className="NavbarTop col-12 md-4 ">
                  <Navbar bg="primary" variant="dark">
                    <Container>
                      <Navbar.Brand href="#home">My_proJecT</Navbar.Brand>
                      <Nav>
                        <Nav.Link className="navcontent felix">
                          <li>{data.appBar.topMenu[0]}|</li>
                        </Nav.Link>
                        <Nav.Link className="navcontent felix">
                          <li>{data.appBar.topMenu[1]}|</li>
                        </Nav.Link>
                        <Nav.Link className="navcontent felix">
                          <li>{data.appBar.topMenu[2]}|</li>
                        </Nav.Link>
                        <Nav.Link className="navcontent felix">
                          <li>{data.appBar.topMenu[3]}</li>
                        </Nav.Link>
                        <Nav.Link className="navcontent felix">
                          <li>{data.appBar.topMenu[4]}</li>
                        </Nav.Link>
                      </Nav>
                    </Container>
                  </Navbar>
                </div>
                <div className="NavbarBottom">
                  <Navbar bg="blue">
                    <Container>
                      <Navbar.Brand href="#home">
                        <img
                          alt=""
                          src={data.appBar.logoUrl}
                          width="180px"
                          height="40px"
                        />{" "}
                      </Navbar.Brand>
                      <Nav>
                        <Nav.Link href="#deets">{data.appBar.menu[0]}</Nav.Link>
                        <Nav.Link href="#deets">{data.appBar.menu[1]}</Nav.Link>
                        <Nav.Link href="#deets">{data.appBar.menu[2]}</Nav.Link>
                        <Nav.Link href="#deets">{data.appBar.menu[3]}</Nav.Link>
                        <Nav.Link href="#deets">{data.appBar.menu[4]}</Nav.Link>

                        <div>
                          <div className="search-box">
                            <i className="bi bi-search"></i>
                          </div>
                        </div>
                      </Nav>
                    </Container>
                  </Navbar>
                </div>
                <div className="hero Image col-12 md-5">
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item interval={800}>
                      <div className=" col-6 pic-ctn  ">
                        <img
                          src={data.hero[0].image}
                          alt=""
                          height="400px"
                          width="1340px"
                          className=""
                        />
                        <div className="hero-cta">{data.hero[0].cta}</div>
                        <div className="hero-text col-5">
                          {data.hero[0].title}
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                      <div className=" col-6 pic-ctn  ">
                        <img
                          src={data.hero[1].image}
                          alt=""
                          height="400px"
                          width="1340px"
                          className=""
                        />
                        <div className="hero-cta">{data.hero[1].cta}</div>

                        <div className="hero-text col-5">
                          {data.hero[1].title}
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item interval={800}>
                      <div className="hero-text">{data.hero[2].title}</div>
                      <div className="hero-cta">{data.hero[2].cta}</div>

                      <div className=" col-6 pic-ctn  ">
                        <img
                          src={data.hero[2].image}
                          alt=""
                          height="400px"
                          width="1340px"
                          className=""
                        />
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="intro col-12 md-4 ">
                  <div className="row">
                    <div className="Text col-4 md-5">
                      <span>{data.intro.description}</span>
                    </div>

                    <div className="vedio col-5 md-4">
                      <video
                        width="390"
                        height="280"
                        controls
                        src={data.intro.video}
                      ></video>
                    </div>
                  </div>
                </div>
                <div className="services col-12 md-5 d-felix">
                  <div className="servise-bg col-10 md-8">
                    <div className="row felix">
                      <div className="grid-container col-6 md-4">
                        <div className="grid-item row">
                          <div className="card">
                            <div className="card-body">
                              <h3>{data.services.capabilities.title}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item row">
                          <div className="card">
                            <div className="card-body">
                              <h3>{data.services.solutions.title}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item row">
                          <div className="card">
                            <div className="card-body">
                              <h3>{data.services.technology.title}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item row">
                          <div className="card">
                            <div className="card-body">
                              <h3>{data.services.segments.title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 md-4">
                        <h2>Enabling Outcomes</h2>

                        <div className="serviseText row ">
                          <p>
                            We understand healthcare organizations need to
                            deliver outcomes today, while building capabilities
                            for the future. That's why we support you with
                            day-to-day operations across the full life cycle,
                            while enabling your vision through conversations
                            with industry peers and thought-provoking content.
                          </p>
                          <div className="operatonType">
                            <div className="Co">
                              <h3>Agile Operation</h3>
                              <hr />
                              <h3>Co-Comercialaization</h3>
                              <hr />
                              <h3>Future Ready Healthcare</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="whats-new col-9">
                  <div className="whats-carosal row">
                    <h2 className="whats-head">what's New</h2>
                    <div className="carosal-img col-8">
                      <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item interval={400}>
                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              src={data.whatNew[0].image}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">
                                Title:{data.whatNew[0].tag}
                              </h5>
                              <p className="card-text">
                                Heading:{data.whatNew[0].heading}
                              </p>
                              <br />
                              <p>{data.whatNew[0].title}</p>
                            </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              src={data.whatNew[1].image}
                              className="card-img-top"
                              alt=""
                            />
                            <div className="card-body">
                              <h5 className="card-title">
                                {data.whatNew[1].tag} card 2
                              </h5>
                              <p className="card-text">
                                {data.whatNew[1].heading}{" "}
                              </p>
                              <br />
                              <p>{data.whatNew[1].title}</p>
                            </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              src={data.whatNew[2].image}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">
                                {data.whatNew[2].tag}
                              </h5>
                              <p className="card-text">
                                {data.whatNew[2].heading}{" "}
                              </p>
                              <br />
                              <p>{data.whatNew[2].title}</p>
                            </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              src={data.whatNew[3].image}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">
                                {data.whatNew[3].tag}
                              </h5>
                              <p className="card-text">
                                {data.whatNew[3].heading}{" "}
                              </p>
                              <br />
                              <p>{data.whatNew[3].title}</p>
                            </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              src={data.whatNew[4].image}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">
                                {data.whatNew[4].tag}
                              </h5>
                              <p className="card-text">
                                {data.whatNew[4].heading}{" "}
                              </p>
                              <br />
                              <p>{data.whatNew[4].title}</p>
                            </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              src={data.whatNew[5].image}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">
                                {data.whatNew[5].tag}
                              </h5>
                              <p className="card-text">
                                {data.whatNew[5].heading}{" "}
                              </p>
                              <br />
                              <p>{data.whatNew[5].title}</p>
                            </div>
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                </div>
                <div className="career col-12 md-5 ">
                  <div className="col-6 felix">
                    <img
                      src="https://media.istockphoto.com/photos/need-everyone-to-give-me-their-best-ideas-picture-id863497498?b=1&k=20&m=863497498&s=170667a&w=0&h=_YSsTKP58UjwWE7QxYB2kz5769hjc_VGt_2eoM_DqFg="
                      alt=""
                      height="400px"
                      width="1330px"
                      className="career-img"
                    />
                    <div className="career-text row">
                      <h2 className="career-title">{data.careers.title}</h2>
                      <hr />

                      <p>{data.careers.description}</p>
                      <div className="col-5 career-buton">
                        <Button className="creer-Butt">
                          {data.careers.ctaGroup[0].cta}
                        </Button>
                      </div>
                      <div className="col-4 career-buton">
                        <Button>{data.careers.ctaGroup[1].cta}</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trust col-8 md-5">
                  <h2 className="trust-title">Trusted Partner</h2>
                  <div className="row">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                      <Carousel.Item interval={500}>
                        <div className="trist-video col-4">
                          <video
                            width="390"
                            height="280"
                            controls
                            src={data.trustedPartner[0].video}
                          ></video>
                        </div>
                        <div className="trust-text col-5 containert ">
                          <div className="trust-A-box">
                            <h3>{data.trustedPartner[0].resources[0].tag}</h3>
                            <hr />
                            <p>{data.trustedPartner[0].resources[0].title}</p>
                          </div>
                          <hr />
                          <div className="trust-B-box">
                            <h3>{data.trustedPartner[1].resources[1].tag}</h3>
                            <p>{data.trustedPartner[1].resources[1].title}</p>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item interval={500}>
                        <div className="trist-video col-4">
                          <video
                            width="390"
                            height="280"
                            controls
                            src={data.trustedPartner[1].video}
                          ></video>
                        </div>
                        <div className="trust-text col-4 containert ">
                          <div className="trust-A-box">
                            <h3>{data.trustedPartner[1].resources[0].tag}</h3>
                            <hr />
                            <p>{data.trustedPartner[1].resources[0].title}</p>
                          </div>
                          <hr />
                          <div className="trust-B-box">
                            <h3>{data.trustedPartner[1].resources[1].tag}</h3>
                            <p>{data.trustedPartner[1].resources[1].title}</p>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
