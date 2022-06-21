import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../Redux/ActionType";
import ReducerComponent from "../Redux/ReducerComponent";
// import "../Home/Home.css";
import "./Footer.css";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const api = useSelector((state: any) => state.ReducerComponent);
  let dispatch: any = useDispatch();
  let datas = api?.api[0]?.footer;
  console.log(datas,"Footer");

  useEffect(() => {
    dispatch(GET_API());
  }, [dispatch]);
  return (
    <div>
          <div>
                    <div className="row">
                      <div className="col-8 top-menu">
                        <span className="t-menu">
                          {datas?.topMenu[0].cta}
                        </span>
                        <span className="t-menu">
                          {datas?.topMenu[1].cta}
                        </span>
                      </div>
                      <div className="col-4 ">
                        <div>
                          <span className="footer-icons">
                            <BsFacebook />{" "}
                          </span>
                          <span className="footer-icons">
                            {" "}
                            <AiFillInstagram />
                          </span>
                          <span className="footer-icons">
                            {" "}
                            <FaTwitter />
                          </span>
                          <span className="footer-icons">
                            {" "}
                            <BsLinkedin />{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 bottom-menu">
                        <span className="b-menu">
                          {datas?.bottomMenu[0].cta}
                        </span>
                        <span className="b-menu">
                          {datas?.bottomMenu[1].cta}
                        </span>
                        <span className="b-menu">
                          {datas?.bottomMenu[2].cta}
                        </span>
                        <span className="b-menu">
                          {datas?.bottomMenu[3].cta}
                        </span>
                        <span className="b-menu">
                          {datas?.bottomMenu[4].cta}
                        </span>
                        <span className="b-menu">
                          {datas?.bottomMenu[5].cta}
                        </span>
                        <span className="b-menu">
                          {datas?.bottomMenu[6].cta}
                        </span>
                        <span className="b-menu">
                          {datas?.bottomMenu[7].cta}
                        </span>
                      </div>
                    </div>
                  </div>
   
    </div>
  );
};

export default Footer;
