import React from "react";
import "../App.css";

class MediaCard extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="app__container">
          <header className="app__header">
            <div className="Div_img">
              <img src={this.props.avatar} className="avatar" alt="logo" />
            </div>
            <div className="Div_text">
              <h4 className="Name">{this.props.name}</h4>
              <p className="Date">{this.props.date}</p>
            </div>
          </header>
          <p className="app__text">{this.props.text}
          </p>
          <footer className="Footer_1">
            <p className="footer_text">Leer más...</p>
            <div className="footer_2">
              <p className="comments">{this.props.comments}</p>
              <i className="fas fa-heart icon" />
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MediaCard;