import React from 'react';
import './index3.css';

export default function Sent(){
    return(
        <div>
            <div>
                                <div className="col-lg-12 bg-dark text-white">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h3 className="pt-2">New Message</h3>
                                        </div>
                                        <div className="col-lg-6 pt-2 message-box-icon">
                                            <span className="pull-right">
                                                
                                                <i className="fa fa-times pr-2" aria-hidden="true" style={{fontSize: "30px"}}></i>
                                            </span>
                                        </div>
                                    </div>
                                </div><br/><br/>
                                <div className="form-row mb-3">
                                    <label for="to" className="col-2 col-sm-1 col-form-label">To:</label>
                                    <div className="col-10 col-sm-11">
                                        <input type="email" className="form-control" id="to" name="title" placeholder="Type email"/>
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <label for="cc" className="col-2 col-sm-1 col-form-label">CC:</label>
                                    <div className="col-10 col-sm-11">
                                        <input type="email" className="form-control" id="cc" name="cc" placeholder="Type email"/>
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <label for="bcc" className="col-2 col-sm-1 col-form-label">BCC:</label>
                                    <div className="col-10 col-sm-11">
                                        <input type="email" className="form-control" id="bcc" name="bcc" placeholder="Type email"/>
                                    </div>
                                </div>
                            </div>
        </div>
    );
}