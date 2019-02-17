import React from "react";
import avatar from "../images/avatar.jpeg";
import "../App.css";

class MediaCard extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="app__container">
          <header className="app__header">
            <div className="Div_img">
              <img src={avatar} className="avatar" alt="logo" />
            </div>
            <div className="Div_text">
              <h4 className="Name"> Nombre y apellido</h4>
              <p className="Date">jueves, 14 de febrero de 2019</p>
            </div>
          </header>
          <p className="App-intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eius sequi explicabo impedit ratione tempora atque. Quae quo ratione
            cumque perspiciatis quos temporibus, sunt rerum, itaque quam,
            explicabo corrupti assumenda.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eius sequi explicabo impedit ratione tempora atque. Quae quo ratione
            cumque perspiciatis quos temporibus, sunt rerum, itaque quam,
            explicabo corrupti assumenda.
        
          </p>
          <footer className="Footer_1">
            <p className="footer_text">Leer más...</p>
            <div className="footer_2">
              <p className="footer_number">37</p>
              <i className="fas fa-heart icon" />
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MediaCard;