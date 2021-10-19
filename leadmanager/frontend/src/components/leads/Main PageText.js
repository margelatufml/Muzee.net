import React, { Component } from "react";
import imgMuz from "./images/muzee.png";
import "./style.css";

export class MainPageTxt extends Component {
  render() {
    return (
      <div>
        <div className="content2">
          <img src={imgMuz} />
          <h1>
            This is a site made only for the romanian museums and is especially
            made for tourists that want to visit our country's most popular
            museums.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            dolores aliquam provident sunt doloremque assumenda ratione corrupti
            inventore culpa omnis consectetur incidunt officiis accusantium
            magni, quae aut totam molestias odit eaque minima vero tenetur
            recusandae quibusdam. Possimus voluptatem suscipit consequuntur
            similique voluptatum perspiciatis tenetur amet totam necessitatibus
            repellat, fuga assumenda, sequi ea illo ratione mollitia expedita
            autem debitis quasi, aliquam laborum vero. Fugiat tempora veritatis
            quae aut. Dignissimos, provident officiis? Laboriosam quia sit
            facere, alias possimus sed, quaerat blanditiis doloribus quasi quod
            labore atque voluptatibus iste quae eos commodi dolores, repellendus
            esse rem dicta cum! Dolor, quam eos. Saepe nulla facilis sit ullam
            vel, illum repellendus iure at minima commodi a corporis iusto quia
            ducimus dolorum. Ipsa quidem et placeat beatae ullam est alias
            aliquam quia eligendi asperiores hic, similique ducimus voluptatum
            omnis, necessitatibus reprehenderit fugiat delectus officia
            excepturi ipsam! Minus necessitatibus quisquam cumque, aliquid quia
            incidunt quidem obcaecati tempora fugiat nisi voluptates placeat
            odit libero eaque. Quo, est dicta.
          </p>
        </div>
        <a className="gotopbtn" href="#">
          {" "}
          <i className="fas fa-arrow-up"></i> Scroll to Top{" "}
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    );
  }
}
