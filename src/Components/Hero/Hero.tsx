import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../Redux/ActionType";
import ReducerComponent from "../Redux/ReducerComponent";
import "../Home/Home.css";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  const api = useSelector((state: any) => state.ReducerComponent);
  let dispatch: any = useDispatch();
  let datas = api?.api[0];
  console.log(datas, "hero");

  // let reports = datas?.map((value: any) => {
  //   return {
  //     ...value,
  //     title1: value.hero[0].title.split("<br>"),
  //     title2: value.hero[1].title.split("<br>"),
  //     title3: value.hero[2].title.split("<br>"),
  //   };
  // });
  // console.log("reports", reports);

  useEffect(() => {
    dispatch(GET_API());
  }, [dispatch]);
  return (
    <div>
      <h1>fgoiwehfop</h1>
      {datas &&
        datas.hero?.map((item: any) => {
          console.log("itemmm", item);
          return (
            <>
              <div className="pic-ctn row ">
                <div className="col-6">
                  <Carousel>
                    <Carousel.Item interval={400}>
                      <img
                        src={item.image}
                        alt=""
                        height="400px"
                        width="1340px"
                        className=""
                      />
                      <div className="hero-cta">{item.cta}</div>
                      <div className="hero-text ">
                        <span>{item.title}</span>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Hero;
