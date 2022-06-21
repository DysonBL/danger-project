import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../Redux/ActionType";

import ReducerComponent from "../Redux/ReducerComponent";
import "../Home/Home.css";
import { Button } from "react-bootstrap";
const Career = () => {
  const api = useSelector((state: any) => state.ReducerComponent);
  let dispatch: any = useDispatch();
  let datas = api?.api[0]?.careers;
  console.log(datas, "careers");

  useEffect(() => {
    dispatch(GET_API());
  }, [dispatch]);
  return <div>
    <div className="row">
                    <div>
                      <img
                        src="https://media.istockphoto.com/photos/need-everyone-to-give-me-their-best-ideas-picture-id863497498?b=1&k=20&m=863497498&s=170667a&w=0&h=_YSsTKP58UjwWE7QxYB2kz5769hjc_VGt_2eoM_DqFg="
                        alt=""
                        height="420px"
                        width="1330px"
                        className="career-img"
                      />
                    </div>

                    <div className="career-text row">
                      <h2 className="career-title">
                        {/* {datas?.careerTitle?.map((item: any) => {
                          return (
                            <>
                              {item}
                              <br />
                            </>
                          );
                        })} */}
                      </h2>
                      <hr />

                      <p>{datas?.description}</p>
                      <div className="col-5 career-buton">
                        <Button className="creer-Butt">
                          {datas?.ctaGroup[0].cta}
                        </Button>
                      </div>
                      <div className="col-4 career-buton">
                        <Button>{datas?.ctaGroup[1].cta}</Button>
                      </div>
                    </div>
                  </div>
  </div>;
};

export default Career;
