import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { GET_API } from "../Redux/ActionType";
import ReducerComponent from "../Redux/ReducerComponent";

const WhatsNew = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
  };

  const api = useSelector((state: any) => state.ReducerComponent);
  let dispatch: any = useDispatch();
  let datas = api?.api[0]?.whatNew;
  console.log(datas,"whatNew");

  useEffect(() => {
    dispatch(GET_API());
  }, [dispatch]);
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={900}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          {/* <div className="card container" style={{ width: "15rem" }}>
            <img
              src={datas[].image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Title:{datas[0].tag}</h5>
              <p className="card-text">Heading:{datas?.heading}</p>
              <p>{datas?.title}</p>
            </div>
          </div> */}
        </div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div></div>
      </Carousel>
      ;
    </div>
  );
};

export default WhatsNew;
