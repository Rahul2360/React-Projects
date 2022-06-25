import React from "react";
import { useNavigate } from 'react-router-dom';

class AddContact extends React.Component {
  // constructor() {
  //   super(props);
  // }

  state = {
    name: "",
    email: ""
  };

  add = (e) => {
    e.preventDefault();
    if(this.state.name ===  "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    } else {
      this.props.addContactHandler(this.state);
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
        <h2> Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
          </div>
          <button className="ui button blue"> Add </button>
        </form>
      </div>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <AddContact {...props} navigate={navigate} />
}

export default WithNavigate;