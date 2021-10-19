import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";
import { Leads } from "./Leads";
import "./style.css";
import imgMoveElem from "./images/logoul.png";
import imgMenu from "./images/menu.png";
import imgInsta from "./images/ig.png";
import imgFaceb from "./images/fb.png";
import imgTwi from "./images/tw.png";
import imgInfo from "./images/info.png";
import imgShare from "./images/share.png";
import { MainPageTxt } from "./Main PageText";
import imgBack from "./images/backg.png";

//THE LAST OPTION :*(
/*const muzee ={
      width                   : '100%',
    display                 : 'flex',
    color                   :'black',
    background_color        :'black',
    align_items             : 'center',
    justify_content         : 'space_around',
    position                : 'absolute',
    bottom                  : '-70px',
}
*/

export class MainPage extends Component {
  
  render() {
   function ana(){
document.createElement('side-bar').style.width=100;
   }
    return (
      <div className="hero">
      <img src={imgBack} className="modification1"/>
        <div className="navbar">

        </div>
        <div className="content">
        <img src={imgMoveElem} className="logo" />
          <small>Welcome To Our</small>
          <h1>Site</h1>
          <h2> of </h2>
          <h1 className="mus">Museums!</h1>
          <button type="button" className="tat">
            Take a tour
          </button>
        </div>
        <div className="side-bar">
          <img src={imgMenu} className="menu" onClick='ana()'/>
          <div className="social-link1">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={imgFaceb} />
            </a>
          </div>
          <div className="social-link2">
            <a href="https://www.instagram.com/" target="_blank">
              <img src={imgInsta} />
            </a>
          </div>
          <div className="social-link3">
            <a href="https://twitter.com/?lang" target="_blank">
              <img src={imgTwi} />
            </a>
          </div>
          <div className="useful-link1">
            <img src={imgShare} />
          </div>
          <div className="useful-link2">
            <img src={imgInfo} />
            <a href="#content2"></a>
          </div>
          <button
            type="button"
            className="close"
            aria-label="Close"
          ></button>
          <span aria-hidden="true">&times;</span>
        </div>
        <div className="muzee">
          <img src={imgMoveElem} />
          <img src={imgMoveElem} />
          <img src={imgMoveElem} />
          <img src={imgMoveElem} />
          <img src={imgMoveElem} />
          <img src={imgMoveElem} />
          <img src={imgMoveElem} />
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <MainPageTxt/>
      </div> 
    );
  }
}
