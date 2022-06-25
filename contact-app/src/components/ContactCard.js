import React from 'react'
import user from '../images/user.png';

const ContactCard = (props) => {
  const {id, name, email} = props.contact
  return (
    <div className="item">
      <img src={user} alt="" className="ui avatar image" alt="user" />
      <div className="content">
        <div className="header">
          {name}
        </div>
        <div className="">
          {email}
        </div>
      </div>
      <i className="trash alternate outline icon" onClick={() => props.clickHandler(id)} style={{ color: "red", marginTop: "7px" }}></i>
    </div>
  )
}

export default ContactCard;