import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../Redux/ActionType";
import ReducerComponent from "../Redux/ReducerComponent";
import "../Home/Home.css";
import { Carousel } from "react-bootstrap";
const AppBar = () => {
  const api = useSelector((state: any) => state.ReducerComponent);
  let dispatch: any = useDispatch();
  let datas = api?.api[0]?.trustedPartner[0];
  let dataSecond = api?.api[0]?.trustedPartner[1];

  useEffect(() => {
    dispatch(GET_API());
  }, [dispatch]);
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item interval={400}>
            <div className="row">
              <div className="trist-video col">
                <video
                  width="400"
                  height="300"
                  controls
                  autoPlay={true}
                  // controls={false}
                  src={datas?.video}
                ></video>
              </div>
              <div className="trust-text col containert ">
                <div className="trust-A-box">
                  <h3>{datas?.resources[0].tag}</h3>
                  <hr />
                  <p>{datas?.resources[0].title}</p>
                </div>
                <hr />
                <div className="trust-B-box">
                  <h3>{datas?.resources[1].tag}</h3>
                  <hr />
                  <p>{datas?.resources[1].title}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={400}>
            <div className="row">
              <div className="trist-video col">
                <video
                  width="400"
                  height="300"
                  controls
                  autoPlay={true}
                  // controls={false}
                  src={dataSecond?.video}
                ></video>
              </div>
              <div className="trust-text col containert ">
                <div className="trust-A-box">
                  <h3>{dataSecond?.resources[0].tag}</h3>
                  <hr />
                  <p>{dataSecond?.resources[0].title}</p>
                </div>
                <hr />
                <div className="trust-B-box">
                  <h3>{dataSecond?.resources[1].tag}</h3>
                  <hr />
                  <p>{dataSecond?.resources[1].title}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default AppBar;
