import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    const {id, name, email} = this.props.location.state.contact
    this.state = {
      id,
      name,
      email
    }
  }


  update = (e) => {
    e.preventDefault();
    if(this.state.name ===  "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    } else {
      this.props.updateContactHandler(this.state);
      this.setState({
        name: "",
        email: ""
      })
      this.props.navigate('/');
    }
  }
  render() {
    return (
      <div className="ui main">
        <h2> Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
          </div>
          <button className="ui button blue"> Update </button>
        </form>
      </div>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  let location = useLocation()
  return <EditContact {...props} navigate={navigate} location={location} />
}

export default WithNavigate;