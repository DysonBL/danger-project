import React from 'react'

const Test = () => {
  return (
    <div>Test</div>
  )
}

export default Test
// import { BsFacebook } from "react-icons/bs";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaTwitter } from "react-icons/fa";
// import { BsLinkedin } from "react-icons/bs";
// import { FcSearch } from "react-icons/fc";
// import { TiArrowSortedDown } from "react-icons/ti";
// import { TiArrowForward } from "react-icons/ti";
// import 'react-multi-carousel/lib/styles.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Navbar,
//   Container,
//   Nav,
//   Button,
//   FormControl,
//   FormCheck,
// } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";

// import "./Home.css";
// const Home = () => {
//   const [Detail, setDetail] = useState<any[]>();
//   const butnSubmit = () => {
//     console.log("submit");
//   };
//   useEffect(() => {
//     axios
//       .get(`https://indegenerep.s3.ap-south-1.amazonaws.com/cdn/home.json`)
//       .then((res: any) => {
//         console.log(res.data, "GetApi Response");
//         setDetail(res.data);
//       })
//       .catch((error) => {
//         console.log(error, "getapiError");
//       });
//   }, []);

//   let reports = Detail?.map((value) => {
//     return {
//       ...value,
//       title1: value.hero[0].title.split("<br>"),
//       title2: value.hero[1].title.split("<br>"),
//       title3: value.hero[2].title.split("<br>"),
//       careerTitle: value.careers.title.split("<br>"),
//     };
//   });

//   return (
//     <>
//       <div>
//         <div className="col-12 md-5 ">
//           {reports?.map((data: any) => {
//             console.log(reports, "me find data");

//             return (
//               <>
//                 <div className="NavbarTop col-12 md-4 ">
//                   <Navbar bg="primary" variant="dark">
//                     <Container>
//                       <Navbar.Brand href="#home">My_proJecT</Navbar.Brand>
//                       <Nav>
//                         <Nav.Link className="navcontent felix">
//                           <li>{data.appBar.topMenu[0]}|</li>
//                         </Nav.Link>
//                         <Nav.Link className="navcontent felix">
//                           <li>{data.appBar.topMenu[1]}|</li>
//                         </Nav.Link>
//                         <Nav.Link className="navcontent felix">
//                           <li>{data.appBar.topMenu[2]}|</li>
//                         </Nav.Link>
//                         <Nav.Link className="navcontent felix">
//                           <li>{data.appBar.topMenu[3]}</li>
//                         </Nav.Link>
//                         <Nav.Link className="navcontent felix">
//                           <Button variant="info">{data.appBar.topMenu[4]} <TiArrowSortedDown/></Button>
//                         </Nav.Link>
//                       </Nav>
//                     </Container>
//                   </Navbar>
//                 </div>
//                 <div className="NavbarBottom">
//                   <Navbar bg="blue">
//                     <Container>
//                       <Navbar.Brand href="#home">
//                         <img
//                           alt=""
//                           src={data.appBar.logoUrl}
//                           width="180px"
//                           height="40px"
//                         />{" "}
//                       </Navbar.Brand>
//                       <Nav>
//                         <Nav.Link href="#deets">{data.appBar.menu[0]} <TiArrowSortedDown className="arrow"/></Nav.Link>
//                         <Nav.Link href="#deets">{data.appBar.menu[1]}<TiArrowSortedDown className="arrow"/></Nav.Link>
//                         <Nav.Link href="#deets">{data.appBar.menu[2]}<TiArrowSortedDown className="arrow"/></Nav.Link>
//                         <Nav.Link href="#deets">{data.appBar.menu[3]}<TiArrowSortedDown className="arrow"/></Nav.Link>
//                         <Nav.Link href="#deets">{data.appBar.menu[4]}<TiArrowSortedDown className="arrow"/></Nav.Link>
//                         <Nav.Link className="search"><FcSearch/></Nav.Link>
//                       </Nav>
//                     </Container>
//                   </Navbar>
//                 </div>
//                 <div className="hero Image col-12 md-5">
//                   <Carousel>
//                     <Carousel.Item interval={400}>
//                       <div className=" col-6 pic-ctn  ">
//                         <img
//                           src={data.hero[0].image}
//                           alt=""
//                           height="400px"
//                           width="1340px"
//                           className=""
//                         />
//                         <div className="hero-cta">{data.hero[0].cta}</div>
//                         <div className="hero-text col-6">
//                           {data?.title1?.map((item: any) => {
//                             return (
//                               <>
//                                 {item}
//                                 <hr />
//                               </>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     </Carousel.Item>
//                     <Carousel.Item interval={400}>
//                       <div className=" col-6 pic-ctn  ">
//                         <img
//                           src={data.hero[1].image}
//                           alt=""
//                           height="400px"
//                           width="1340px"
//                           className=""
//                         />
//                         <div className="hero-cta">{data.hero[1].cta}</div>

//                         <div className="hero-text col-6">
//                           {data?.title2?.map((item: any) => {
//                             return (
//                               <>
//                                 {item}
//                                 <hr />
//                               </>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     </Carousel.Item>

//                     <Carousel.Item interval={400}>
//                       <div className=" col-6 hero-text">
//                         {data?.title2?.map((item: any) => {
//                           return (
//                             <>
//                               {item}
//                               <hr />
//                             </>
//                           );
//                         })}
//                       </div>
//                       <div className="hero-cta">{data.hero[2].cta}</div>

//                       <div className=" col-6 pic-ctn  ">
//                         <img
//                           src={data.hero[2].image}
//                           alt=""
//                           height="400px"
//                           width="1340px"
//                           className=""
//                         />
//                       </div>
//                     </Carousel.Item>
//                   </Carousel>
//                 </div>
              
//                 <div className="container">
//                   <div className="row">
//                     <div className="col-sm-6">
//                         <div className="Text ">{data.intro.description}</div>
//                     </div>
//                     <div className="col-sm-6 intro-video">
//                       <video
//                         width="490"
//                         height="380"
//                         controls={true}
//                         loop={true}
//                         autoPlay={true}
//                         // controls={false}
//                         src={data.intro.video}
//                       ></video>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="services col-12 md-5 d-felix">
//                   <div className="servise-bg col-12 md-8">
//                     <div className="row">
//                       <div className="grid-container col-6 md-4">
//                         <div className="grid-item row">
//                           <div className="card">
//                             <div className="card-servise">
//                               <h3>{data.services.capabilities.title}</h3>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="grid-item row">
//                           <div className="card">
//                             <div className="card-servise">
//                               <h3>{data.services.solutions.title}</h3>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="grid-item row">
//                           <div className="card">
//                             <div className="card-servise">
//                               <h3>{data.services.technology.title}</h3>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="grid-item row">
//                           <div className="card">
//                             <div className="card-servise">
//                               <h3>{data.services.segments.title}</h3>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-6 md-4">
//                         <h2>Enabling Outcomes</h2>

//                         <div className="serviseText row ">
//                           <p>
//                             We understand healthcare organizations need to
//                             deliver outcomes today, while building capabilities
//                             for the future. That's why we support you with
//                             day-to-day operations across the full life cycle,
//                             while enabling your vision through conversations
//                             with industry peers and thought-provoking content.
//                           </p>
//                           <div className="operatonType">
//                             <div className="Co">
//                               <h3>Agile Operation <TiArrowForward className="service-arrow"/></h3>
//                               <hr />
//                               <h3>Co-Comercialaization <TiArrowForward className="service-arrow"/></h3>
//                               <hr />
//                               <h3>Future Ready Healthcare <TiArrowForward className="service-arrow"/></h3>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="whats-new col-12">
//                   <div className="whats-carosal row">
//                     <h2 className="whats-head">what's New</h2>
//                     <div className="carosal-img col-5">
//                       <Carousel>
//                         <Carousel.Item interval={400}>
//                           <div
//                             className="card container"
//                             style={{ width: "15rem" }}
//                           >
//                             <img
//                               src={data.whatNew[0].image}
//                               className="card-img-top"
//                               alt="..."
//                             />
//                             <div className="card-body">
//                               <h5 className="card-title">
//                                 Title:{data.whatNew[0].tag}
//                               </h5>
//                               <p className="card-text">
//                                 Heading:{data.whatNew[0].heading}
//                               </p>
//                               <p>{data.whatNew[0].title}</p>
//                             </div>
//                           </div>
//                         </Carousel.Item>
//                         <Carousel.Item interval={400}>
//                           <div
//                             className="card container"
//                             style={{ width: "15rem" }}
//                           >
//                             <img
//                               src={data.whatNew[1].image}
//                               className="card-img-top"
//                               alt=""
//                             />
//                             <div className="card-body">
//                               <h5 className="card-title">
//                                 {data.whatNew[1].tag} card 2
//                               </h5>
//                               <p className="card-text">
//                                 {data.whatNew[1].heading}{" "}
//                               </p>
//                               <br />
//                               <p>{data.whatNew[1].title}</p>
//                             </div>
//                           </div>
//                         </Carousel.Item>
//                         <Carousel.Item interval={400}>
//                           <div
//                             className="card container"
//                             style={{ width: "15rem" }}
//                           >
//                             <img
//                               src={data.whatNew[2].image}
//                               className="card-img-top"
//                               alt="..."
//                             />
//                             <div className="card-body">
//                               <h5 className="card-title">
//                                 {data.whatNew[2].tag}
//                               </h5>
//                               <p className="card-text">
//                                 {data.whatNew[2].heading}{" "}
//                               </p>
//                               <p>{data.whatNew[2].title}</p>
//                             </div>
//                           </div>
//                         </Carousel.Item>
//                         <Carousel.Item interval={400}>
//                           <div
//                             className="card container"
//                             style={{ width: "15rem" }}
//                           >
//                             <img
//                               src={data.whatNew[3].image}
//                               className="card-img-top"
//                               alt="..."
//                             />
//                             <div className="card-body">
//                               <h5 className="card-title">
//                                 {data.whatNew[3].tag}
//                               </h5>
//                               <p className="card-text">
//                                 {data.whatNew[3].heading}{" "}
//                               </p>
//                               <p>{data.whatNew[3].title}</p>
//                             </div>
//                           </div>
//                         </Carousel.Item>
//                         <Carousel.Item interval={400}>
//                           <div
//                             className="card container"
//                             style={{ width: "15rem" }}
//                           >
//                             <img
//                               src={data.whatNew[4].image}
//                               className="card-img-top"
//                               alt="..."
//                             />
//                             <div className="card-body">
//                               <h5 className="card-title">
//                                 {data.whatNew[4].tag}
//                               </h5>
//                               <p className="card-text">
//                                 {data.whatNew[4].heading}{" "}
//                               </p>
//                               <p>{data.whatNew[4].title}</p>
//                             </div>
//                           </div>
//                         </Carousel.Item>
//                         <Carousel.Item interval={400}>
//                           <div
//                             className="card container"
//                             style={{ width: "15rem" }}
//                           >
//                             <img
//                               src={data.whatNew[5].image}
//                               className="card-img-top"
//                               alt="..."
//                             />
//                             <div className="card-body">
//                               <h5 className="card-title">
//                                 {data.whatNew[5].tag}
//                               </h5>
//                               <p className="card-text">
//                                 {data.whatNew[5].heading}{" "}
//                               </p>
//                               <p>{data.whatNew[5].title}</p>
//                             </div>
//                           </div>
//                         </Carousel.Item>
//                       </Carousel>
//                     </div>
//                   </div>
//                 </div>
//                 <h1 className="services-head">career</h1>

//                 <div className="career col-12 md-5 ">
//                   <div className="row">
//                     <div>
//                       <img
//                         src="https://media.istockphoto.com/photos/need-everyone-to-give-me-their-best-ideas-picture-id863497498?b=1&k=20&m=863497498&s=170667a&w=0&h=_YSsTKP58UjwWE7QxYB2kz5769hjc_VGt_2eoM_DqFg="
//                         alt=""
//                         height="420px"
//                         width="1330px"
//                         className="career-img"
//                       />
//                     </div>

//                     <div className="career-text row">
//                       <h2 className="career-title">
//                         {data?.careerTitle?.map((item: any) => {
//                           return (
//                             <>
//                               {item}
//                               <br />
//                             </>
//                           );
//                         })}
//                       </h2>
//                       <hr />

//                       <p>{data.careers.description}</p>
//                       <div className="col-5 career-buton">
//                         <Button className="creer-Butt">
//                           {data.careers.ctaGroup[0].cta}
//                         </Button>
//                       </div>
//                       <div className="col-4 career-buton">
//                         <Button>{data.careers.ctaGroup[1].cta}</Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="trust col-8 md-5">
//                   <h2 className="trust-title">Trusted Partner</h2>
//                   <div className="row">
//                     <Carousel>
//                       <Carousel.Item interval={400}>
//                         <div className="row">
//                           <div className="trist-video col-4">
//                             <video
//                               width="400"
//                               height="300"
//                               controls
//                               autoPlay={true}
//                               // controls={false}
//                               src={data.trustedPartner[0].video}
//                             ></video>
//                           </div>
//                           <div className="trust-text col-4 containert ">
//                             <div className="trust-A-box">
//                               <h3>{data.trustedPartner[0].resources[0].tag}</h3>
//                               <hr />
//                               <p>{data.trustedPartner[0].resources[0].title}</p>
//                             </div>
//                             <hr />
//                             <div className="trust-B-box">
//                               <h3>{data.trustedPartner[1].resources[1].tag}</h3>
//                               <hr />
//                               <p>{data.trustedPartner[1].resources[1].title}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </Carousel.Item>

//                       <Carousel.Item interval={400}>
//                         <div className="row">
//                           <div className="trist-video col-4">
//                             <video
//                               width="390"
//                               height="280"
//                               controls
//                               // controls={false}
//                               // autoPlay={true}

//                               src={data.trustedPartner[1].video}
//                             ></video>
//                           </div>
//                           <div className="trust-text col-4 containert ">
//                             <div className="trust-A-box">
//                               <h3>{data.trustedPartner[1].resources[0].tag}</h3>
//                               <hr />
//                               <p>{data.trustedPartner[1].resources[0].title}</p>
//                             </div>
//                             <hr />
//                             <div className="trust-B-box">
//                               <h3>{data.trustedPartner[1].resources[1].tag}</h3>
//                               <p>{data.trustedPartner[1].resources[1].title}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </Carousel.Item>
//                     </Carousel>
//                   </div>
//                 </div>
//                 <div className="col-12 counter-box d-felix">
//                   <div className="row">
//                     <div className="col-2 box-a">
//                       <h2>{data.counter[0].title}</h2>
//                       <p>{data.counter[0].subTitle}</p>
//                     </div>
//                     <div className="col-2 box-a">
//                       <h2>{data.counter[1].title}</h2>
//                       <p>{data.counter[1].subTitle}</p>
//                     </div>
//                     <div className="col-2 box-a">
//                       <h2>{data.counter[2].title}</h2>
//                       <p>{data.counter[2].subTitle}</p>
//                     </div>
//                     <div className="col-2 box-a">
//                       <h2>{data.counter[3].title}</h2>
//                       <p>{data.counter[3].subTitle}</p>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-5 testimonial container">
//                       <h4 className="name">
//                         {data.testimonial.heading}
//                         <hr />
//                       </h4>

//                       <div className="testimonial-text ">
//                         <div className="left-coma">"</div>
//                         {data.testimonial.title}{" "}
//                         <div className="right-coma">"</div>
//                       </div>
//                       <div className="testimonial-name">
//                         <h4 className="name">-{data.testimonial.name}</h4>
//                         <p className="testimonial-designation">
//                           {data.testimonial.designation}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Form col-12">
//                   <div className="row">
//                     <div className="col-12">
//                       <h4 className="Form-name">
//                         Let's chat about #FutureReadyHealthcare
//                       </h4>
//                       <div className="Form-lable row">
//                         <div className="Form-input col-5">
//                           <div className="lable">
//                             <FormControl
//                               placeholder="UserName"
//                               className="mx-5"
//                             />
//                           </div>
//                           <div className="lable">
//                             <FormControl placeholder="Email" className="mx-5" />
//                           </div>
//                           <div className="lable">
//                             <FormControl
//                               placeholder="Password"
//                               className="mx-5"
//                             />
//                           </div>
//                           <div className="row">
//                             <div className="col-5 checkbox">
//                               <FormCheck type="checkbox" label="Dis-Agree" />
//                             </div>
//                             <div className="col-5">
//                               <FormCheck type="checkbox" label="Agree" />
//                             </div>
//                             <div className="Button">
//                               <Button onClick={butnSubmit}>Submit</Button>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-5 message-box container">
//                           <p className="msg-box">Messages</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12 md-5 Footer">
//                   <div className="row">
//                     <div className="col-8 top-menu">
//                       <span className="t-menu">
//                         {data.footer.topMenu[0].cta}
//                       </span>
//                       <span className="t-menu">
//                         {data.footer.topMenu[1].cta}
//                       </span>
//                     </div>
//                     <div className="col-4 ">
//                       <div>
//                         <span className="footer-icons">
//                           <BsFacebook />{" "}
//                         </span>
//                         <span className="footer-icons">
//                           {" "}
//                           <AiFillInstagram />
//                         </span>
//                         <span className="footer-icons">
//                           {" "}
//                           <FaTwitter />
//                         </span>
//                         <span className="footer-icons">
//                           {" "}
//                           <BsLinkedin />{" "}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-12 bottom-menu">
//                       <span className="b-menu">
//                         {data.footer.bottomMenu[0].cta}
//                       </span>
//                       <span className="b-menu">
//                         {data.footer.bottomMenu[1].cta}
//                       </span>
//                       <span className="b-menu">
//                         {data.footer.bottomMenu[2].cta}
//                       </span>
//                       <span className="b-menu">
//                         {data.footer.bottomMenu[3].cta}
//                       </span>
//                       <span className="b-menu">
//                         {data.footer.bottomMenu[4].cta}
//                       </span>
//                       <span className="b-menu">
//                         {data.footer.bottomMenu[5].cta}
//                       </span>
//                       <span className="b-menu">
//                         {data.footer.bottomMenu[6].cta}
//                       </span>
//                       <span className="b-menu">
//                         {data.footer.bottomMenu[7].cta}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
