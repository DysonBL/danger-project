import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../Redux/ActionType";
import ReducerComponent from "../Redux/ReducerComponent";
import "../Home/Home.css";
const Intro = () => {
  const api = useSelector((state: any) => state.ReducerComponent);
  let dispatch: any = useDispatch();
  let datas = api?.api[0]?.intro;
  console.log(datas, "intro");

  useEffect(() => {
    dispatch(GET_API());
  }, [dispatch]);
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="Text ">{datas?.description}</div>
      </div>
      <div className="col-sm-6 intro-video">
        <video
          width="490"
          height="380"
          controls={true}
          loop={true}
          autoPlay={true}
          // controls={false}
           src={datas?.video}
        ></video>
      </div>
    </div>
  );
};

export default Intro;
