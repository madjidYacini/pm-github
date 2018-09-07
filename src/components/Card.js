import React from "react";
import Rectangle from 'react-rectangle';

import './comp.css';

const Card = (props) => {
    
    return <div style={{ textAlign: "center" }}>
    
        <Rectangle aspectRatio={(20, 10)}>
          <div >
            <div className="card-content" style = {{paddingTop : "3em"}}>
              <article className="card">
                <div style={{ fontSize: "1.25em", fontWeight: "bold", marginLeft: 29, marginTop: 50 }}>
                  <h2>  {props.name} </h2>
                </div>

                <div>created at: {props.created_at}</div>
               
                <div>pushed at : {props.pushed_at}</div>
                <div>
             </div>
              </article>
            </div>
            <div />
          </div>
        </Rectangle>
      </div>;

};

export default Card;