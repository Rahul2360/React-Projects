import React from 'react'
import user from "../images/user.jpeg";
import { Link, useLocation } from 'react-router-dom';

const ContactDetails = (props) => {
  const location = useLocation()
  const { id, name, email } = location.state.contact
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="" />
          <div className="content">
            <div className="name">
              {name}
            </div>
            <div className="description">
              {email}
            </div>
          </div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">Back to contact list</button>
        </Link>
      </div>
    </div>
  )
}

export default ContactDetails