import React from 'react';
import './index3.css';
import {FaAlignLeft, FaAlignRight, FaAlignCenter, FaBold, FaUnderline, FaItalic } from 'react-icons/fa';

function f1() {
    //function to make the text bold using DOM method
    document.getElementById("textarea1").style.fontWeight = "bold";
}
  

    function f2() {
    //function to make the text italic using DOM method
    document.getElementById("textarea1").style.fontStyle = "italic";
}
  
function f3() {
    //function to make the text alignment left using DOM method
    document.getElementById("textarea1").style.textAlign = "left";
}
  
function f4() {
    //function to make the text alignment center using DOM method
    document.getElementById("textarea1").style.textAlign = "center";
}
  
function f5() {
    //function to make the text alignment right using DOM method
    document.getElementById("textarea1").style.textAlign = "right";
}
  
function f6() {
    //function to make the text in Uppercase using DOM method
    document.getElementById("textarea1").style.textTransform = "uppercase";
}
  
function f7() {
    //function to make the text in Lowercase using DOM method
    document.getElementById("textarea1").style.textTransform = "lowercase";
}
  
function f8() {
    //function to make the text capitalize using DOM method
    document.getElementById("textarea1").style.textTransform = "capitalize";
}
  
function f9() {
    //function to make the text back to normal by removing all the methods applied 
    //using DOM method
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";
}

export default function EmailBody(){
    return(
        <div>
                    <div className="container bootdey">
                    <div className="email-app">
                        <nav>
                            <a href="#" className="btn btn-danger btn-block">New Email</a>
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-inbox"></i> Inbox <span className="badge badge-danger">4</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-star"></i> Stared</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-rocket"></i> Sent</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-trash-o"></i> Trash</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-bookmark"></i> Important</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-inbox"></i> Inbox <span className="badge badge-danger">4</span></a>
                                </li>
                            </ul>
                        </nav>
                        <main>
                        
                        <div>
                                <div className="col-lg-12 bg-dark text-white">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h3 className="pt-2" style={{color: "white"}}>New Message</h3>
                                        </div>
                                        <div className="col-lg-6 pt-2 message-box-icon">
                                            <span className="pull-right">
                                                
                                                <a href="/"><i className="fa fa-times pr-2" aria-hidden="true" style={{fontSize: "30px", color: "white"}}></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div><br/><br/>
                                <div className="form-row mb-3">
                                    <label for="to" className="col-2 col-sm-1 col-form-label">To:</label>
                                    <div className="col-10 col-sm-11">
                                        <input type="email" style={{backgroundColor: "white"}} className="form-control" id="to" name="title" placeholder="Type email"/>
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <label for="cc" className="col-2 col-sm-1 col-form-label">CC:</label>
                                    <div className="col-10 col-sm-11">
                                        <input type="email" style={{backgroundColor: "white"}} className="form-control" id="cc" name="cc" placeholder="Type email"/>
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <label for="bcc" className="col-2 col-sm-1 col-form-label">BCC:</label>
                                    <div className="col-10 col-sm-11">
                                        <input type="email" style={{backgroundColor: "white"}} className="form-control" id="bcc" name="bcc" placeholder="Type email"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-sm-11 ml-auto">
                                    <div className="toolbar" role="toolbar">
                                        <div className="flex-box">
                                                <div className="col">
                                                    <button type="button" 
                                                            onClick={f1}
                                                            className=" shadow-sm btn btn-outline-secondary color1" 
                                                            data-toggle="tooltip"
                                                            data-placement="top" 
                                                            title="Bold Text">
                                                        Bold
                                                    </button>
                                                    <button type="button" 
                                                            onClick={f2}
                                                            className="shadow-sm btn btn-outline-success color1" 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Italic Text">
                                                            Italic
                                                    </button>
                                                    <button type="button" 
                                                            onClick={f3}
                                                            className=" shadow-sm btn btn-outline-primary color1" 
                                                            data-toggle="tooltip" 
                                                            data-placement="top"
                                                            title="Left Align">
                                                    <FaAlignLeft style={{marginTop: "-7px"}}/></button>
                                                    <button type="button" 
                                                            onClick={f4} 
                                                            className="btn shadow-sm btn-outline-secondary color1" 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Center Align">
                                                    <FaAlignCenter style={{marginTop: "-7px"}}/></button>
                                                    <button type="button" 
                                                            onClick={f5}
                                                            className="btn shadow-sm btn-outline-primary color1" 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Right Align">
                                                    <FaAlignRight style={{marginTop: "-7px"}}/></button>
                                                    <button type="button" 
                                                            onClick={f7}
                                                            className="btn shadow-sm btn-outline-secondary color1" 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Uppercase Text">
                                                        Upper Case
                                                    </button>
                                                    <button type="button" 
                                                            onClick={f8}
                                                            className="btn shadow-sm btn-outline-primary color1" 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Lowercase Text">
                                                        Lower Case
                                                    </button>
                                                    <button type="button" 
                                                            onClick={f9}
                                                            className="btn shadow-sm btn-outline-primary color1 side" 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Tooltip on top">
                                                            Reset Text
                                                    </button>
                                                {/* <div className="btn shadow-sm btn-outline-primary color1 side color1">
                                                <button className="fontStyle" id = "f10" onClick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                                                </button></div>
                                                <div className="btn shadow-sm btn-outline-primary color1 side color1">
                                                <button className="fontStyle" onClick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text"><b>B</b>
                                                </button></div>
                                                <div className="btn shadow-sm btn-outline-primary color1 side color1">
                                                <button className="fontStyle" onClick="document.execCommand( 'underline',false,null);"><u>U</u>
                                                </button></div> */}
                                            </div>
                                        </div>     
                            </div>
                                    {/* <div className="form-group mt-4">
                                    <div className="form-control" id="textarea1" name="body" rows="12" contenteditable style={{height: "450px"}}></div>
                                    </div> */}
                                    <div className="form-group mt-4">
                                        <textarea className="form-control" id="textarea1" style={{height: "450px"}}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success">Send</button>
                                        <button type="submit" className="btn btn-light">Draft</button>
                                        <button type="submit" className="btn btn-danger">Discard</button>
                                        <span className="attachment">
                                        <i className="fa fa-smile-o" aria-hidden="true" style={{marginLeft: "10px"}}></i>
                                        <input type="file" id="imgupload" style={{marginLeft: "10px"}}/>
                                            <a href="#" onClick="$('#imgupload').trigger('click'); return false;"></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                        </main>
                        
                    </div>
                    </div>

        </div>
    );
}