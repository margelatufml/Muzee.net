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

export class Disclaimer extends Component {
  
  render() {

    return (
      <div className="disclaimer">
      <p>This website was made only for education purpose!</p>
      </div> 
    );
  }
}
