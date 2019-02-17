import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MediaCard from "./components/MediaCard";
import avatar from "./images/avatar.jpeg";


ReactDOM.render(<MediaCard name='Nombre y Apellidos' date='14 de febrero de 2019' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
eius sequi explicabo impedit ratione tempora atque. Quae quo ratione
cumque perspiciatis quos temporibus, sunt rerum, itaque quam,
explicabo corrupti assumenda.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
eius sequi explicabo impedit ratione tempora atque. Quae quo ratione
cumque perspiciatis quos temporibus, sunt rerum, itaque quam,
explicabo corrupti assumenda.' comments ='37' avatar={avatar}/>, document.getElementById("root"));;