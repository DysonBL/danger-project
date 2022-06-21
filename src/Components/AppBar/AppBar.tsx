import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../Redux/ActionType";
import { Navbar, Container, Nav } from "react-bootstrap";
import { TiArrowSortedDown } from "react-icons/ti";
import ReducerComponent from "../Redux/ReducerComponent";
import "../Home/Home.css";
import { FcSearch } from "react-icons/fc";
const AppBar = () => {
  const api = useSelector((state: any) => state.ReducerComponent);
  let dispatch: any = useDispatch();
  let datas = api?.api[0]?.appBar;
  console.log(datas,"AppBar");

  useEffect(() => {
    dispatch(GET_API());
  }, [dispatch]);
  return (
    <div>
    <Navbar bg="blue">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={datas?.logoUrl}
            width="180px"
            height="40px"
          />{" "}
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#deets">{datas?.menu[0]} <TiArrowSortedDown className="arrow"/></Nav.Link>
          <Nav.Link href="#deets">{datas?.menu[0]}<TiArrowSortedDown className="arrow"/></Nav.Link>
          <Nav.Link href="#deets">{datas?.menu[0]}<TiArrowSortedDown className="arrow"/></Nav.Link>
          <Nav.Link href="#deets">{datas?.menu[0]}<TiArrowSortedDown className="arrow"/></Nav.Link>
          <Nav.Link href="#deets">{datas?.menu[0]}<TiArrowSortedDown className="arrow"/></Nav.Link>
          <Nav.Link className="search"><FcSearch/></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  );
};

export default AppBar;
