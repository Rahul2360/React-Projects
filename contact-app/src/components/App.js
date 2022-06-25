import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      id: "1",
      name: "Rahul",
      email: "r@r.com"
    },
    {
      id: "3",
      name: "Sahil",
      email: "s@s.com"
    }
  ]
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
