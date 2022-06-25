import React from 'react'
import user from '../images/user.png';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
  const { id, name, email } = props.contact
  return (
    <div className="item">
      <img src={user} alt="" className="ui avatar image" />
      <div className="content">
        <Link to={`contact/${id}`} state={{contact: props.contact}}> 
          <div className="header">
            {name}
          </div>
          <div className="">
            {email}
          </div>
        </Link>
      </div>
      <i className="trash alternate outline icon" onClick={() => props.clickHandler(id)} style={{ color: "red", marginTop: "7px" }}></i>
    </div>
  )
}

export default ContactCard;