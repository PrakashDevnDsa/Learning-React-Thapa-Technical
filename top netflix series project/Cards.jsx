import React from "react";

function Card(props){
    console.log(props);
    return(
       <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="picture" className="card_image" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
    )
  }


export {Card};