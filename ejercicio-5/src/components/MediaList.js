import React from 'react'
import MediaCard from './MediaCard';
import avatar from "../images/avatar.jpeg";
import avatar2 from "../images/avatar2.jpeg";
import avatar3 from "../images/avatar3.jpeg";

class MediaList extends React.Component {

    render () {
  
      return (
        <React.Fragment>

          <MediaCard name='Nombre y Apellidos' date='14 de febrero de 2019' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
eius sequi explicabo impedit ratione tempora atque. Quae quo ratione
cumque perspiciatis quos temporibus, sunt rerum, itaque quam,
explicabo corrupti assumenda.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
eius sequi explicabo impedit ratione tempora atque. Quae quo ratione
cumque perspiciatis quos temporibus, sunt rerum, itaque quam,
explicabo corrupti assumenda.' comments ='37' avatar={avatar}/>
  
  <MediaCard name='Nombre y Apellidos' date='14 de febrero de 2019' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
eius sequi explicabo impedit ratione tempora atque. Quae quo ratione
cumque perspiciatis quos temporibus, sunt rerum, itaque quam,
explicabo corrupti assumenda.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
eius sequi explicabo impedit ratione tempora atque. Quae quo ratione
cumque perspiciatis quos temporibus, sunt rerum, itaque quam,
explicabo corrupti assumenda.' comments ='24' avatar={avatar2}/>
  
  <MediaCard name='Nombre y Apellidos' date='14 de febrero de 2019' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
eius sequi explicabo impedit ratione tempora atque. Quae quo ratione
cumque perspiciatis quos temporibus, sunt rerum, itaque quam,
explicabo corrupti assumenda.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
eius sequi explicabo impedit ratione tempora atque. Quae quo ratione
cumque perspiciatis quos temporibus, sunt rerum, itaque quam,
explicabo corrupti assumenda.' comments ='12' avatar={avatar3}/>
        </React.Fragment>
      );
    }
  
  }
  
  export default MediaList;