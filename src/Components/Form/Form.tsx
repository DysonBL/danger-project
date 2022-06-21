import React from 'react'
import { Button, FormCheck, FormControl } from 'react-bootstrap'
import "../Home/Home.css";
import "./Form.css";
const Form = () => {
  return (
    <div>
              <div className="col-12">
                      <h4 className="Form-name">
                        Let's chat about #FutureReadyHealthcare
                      </h4>
                      <div className="Form-lable row">
                        <div className="Form-input col-5">
                          <div className="lable">
                            <FormControl
                              placeholder="UserName"
                              className="mx-5"
                            />
                          </div>
                          <div className="lable">
                            <FormControl placeholder="Email" className="mx-5" />
                          </div>
                          <div className="lable">
                            <FormControl
                              placeholder="Password"
                              className="mx-5"
                            />
                          </div>
                          <div className="row">
                            <div className="col-5 checkbox">
                              <FormCheck type="checkbox" label="Dis-Agree" />
                            </div>
                            <div className="col-5">
                              <FormCheck type="checkbox" label="Agree" />
                            </div>
                            <div className="Button">
                              <Button >Submit</Button>
                            </div>
                          </div>
                        </div>
                        <div className="col-5 message-box container">
                          <p className="msg-box">Messages</p>
                        </div>
                      </div>
                    </div>
    </div>
  )
}

export default Form