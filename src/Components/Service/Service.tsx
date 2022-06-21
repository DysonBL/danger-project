import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../Redux/ActionType";
import "./Servise.css";
import ReducerComponent from "../Redux/ReducerComponent";
import "../Home/Home.css";
import { Accordion } from "react-bootstrap";
const Service = () => {
  const api = useSelector((state: any) => state.ReducerComponent);
  let dispatch: any = useDispatch();
  let datas = api?.api[0]?.services;
  console.log(datas, "services");

  useEffect(() => {
    dispatch(GET_API());
  }, [dispatch]);
  return (
    <div>
      <div className="row">
        <div className="grid-container col-6 md-4">
          <div className="grid-item row">
            <div className="card">
              <div className="card-servise">
                <h3>{datas?.capabilities.title}</h3>
              </div>
            </div>
          </div>
          <div className="grid-item row">
            <div className="card">
              <div className="card-servise">
                <h3>{datas?.solutions.title}</h3>
              </div>
            </div>
          </div>
          <div className="grid-item row">
            <div className="card">
              <div className="card-servise">
                <h3>{datas?.technology.title}</h3>
              </div>
            </div>
          </div>
          <div className="grid-item row">
            <div className="card">
              <div className="card-servise">
                <h3>{datas?.segments.title}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 md-4">
          <h2>Enabling Outcomes</h2>

          <div className="serviseText row ">
            <p>
              We understand healthcare organizations need to deliver outcomes
              peers and thought-provoking content.
            </p>
            <div className="operatonType">
              <div className="col">
                <Accordion defaultActiveKey="0" className="accordian">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                     <span  className="actitle">Agile Operation</span> {" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="actitle">
                      <span  className="actitle">Co-Comercialaization</span> {" "}

                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="actitle">
                     
                      <span  className="actitle"> Future Ready Healthcare</span> {" "}

                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
