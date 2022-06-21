import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../Redux/ActionType";

import ReducerComponent from "../Redux/ReducerComponent";
import "../Home/Home.css";

const Counter = () => {
  const api = useSelector((state: any) => state.ReducerComponent);
  let dispatch: any = useDispatch();
  let datas = api?.api[0]?.counter;
  let data = api?.api[0]?.testimonial;

  console.log(datas, "counter");
  console.log(data, "testimonial");

  useEffect(() => {
    dispatch(GET_API());
  }, [dispatch]);
  return (
    <div>
      <div className="row">
        {datas?.map((item: any) => {
          return (
            <>
              <div className="col-2 box-a">
                <h2>{item.title}</h2>
                <p>{item.subTitle}</p>
              </div>
            </>
          );
        })}
      </div>

      <div className="row">
        <div className="col-5 testimonial container">
          <h4 className="name">
            {data?.heading}
            <hr />
          </h4>

          <div className="testimonial-text ">
            <div className="left-coma">"</div>
            {data?.title} <div className="right-coma">"</div>
          </div>
          <div className="testimonial-name">
            <h4 className="name">-{data?.name}</h4>
            <p className="testimonial-designation">{data?.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
