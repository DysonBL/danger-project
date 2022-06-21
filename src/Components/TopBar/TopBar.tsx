import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../Redux/ActionType";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { TiArrowSortedDown } from "react-icons/ti";
import ReducerComponent from "../Redux/ReducerComponent";
import "../Home/Home.css";
import "./Top.css"
const TopBar = () => {
  const api = useSelector((state: any) => state.ReducerComponent);
  let dispatch: any = useDispatch();
  let datas = api?.api[0]?.appBar;

  useEffect(() => {
    dispatch(GET_API());
  }, [dispatch]);
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My_proJecT</Navbar.Brand>
          <Nav>
            <Nav.Link className="navcontent">{datas?.topMenu[0]}|</Nav.Link>
            <Nav.Link className="navcontent">{datas?.topMenu[1]}|</Nav.Link>
            <Nav.Link className="navcontent">{datas?.topMenu[2]}|</Nav.Link>
            <Nav.Link className="navcontent">
            <Button variant="info">{datas?.topMenu[3]}<TiArrowSortedDown/></Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
