import React, { useState } from "react";
import Navs from "../Navs/Navs";
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  FormCheck,
} from "react-bootstrap";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [validate, setValidate] = useState(false);
let navigate =useNavigate()
  const [Data, setData] = useState({
    Name: "",
    Email: "",
    password: "",
    checkbox: "",
  });
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidate(true);
    if (
      Data.Name !== "" &&
      Data.Email !== "" &&
      Data.password !== "" &&
      Data.checkbox !== ""
    ) {
      console.log(Data,"Datavalue");
    }
    localStorage.setItem("Signup", JSON.stringify([Data]));
    navigate("/Home")
  };
  return (
    <div className="bg">
      <Navs/>
      <div>
        <div className="Margin">
          <h1>Login</h1><hr/>
          <Form
            className="sign formClass"
            noValidate
            validated={validate}
            onSubmit={loginSubmit}
          >
            <InputGroup hasValidation>
              <div className="col d-flex">
                <InputGroup.Text id="basic-addon1" className="inputFieldAlign">
                  User Name
                </InputGroup.Text>
                <FormControl
                  placeholder="UserName"
                  className="mx-3"
                  name="Name"
                  type="Name"
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please fill a FirstName.
                </Form.Control.Feedback>
              </div>
            </InputGroup>
            <InputGroup className="mt-3">
              <div className="col d-flex">
                <InputGroup.Text id="basic-addon1" className="inputFieldAlign">
                  Mail ID
                </InputGroup.Text>
                <FormControl
                  placeholder="name@gmail.com"
                  name="Email"
                  className="mx-3"
                  type="Email"
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please fill a name@gmail.com.
                </Form.Control.Feedback>
              </div>
            </InputGroup>
            <InputGroup className="mt-3">
              <div className="col d-flex">
                <InputGroup.Text id="basic-addon1" className="inputFieldAlign">
                  Password
                </InputGroup.Text>
                <FormControl
                  placeholder="Conform password"
                  type="password"
                  name="password"
                  className="mx-3"
                  required
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please fill a Password.
                </Form.Control.Feedback>
              </div>
              <InputGroup className="mt-3"></InputGroup>
              <Form.Group className="lable mt-3">
                <FormCheck
                  onChange={handleChange}
                  type="checkbox"
                  label="Agree with sign In"
                  name="checkbox"
                  required
                />
              </Form.Group>
            </InputGroup>
            <div className="btnAlign">
              <Button
                className="center"
                size="lg"
                variant="dark"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
