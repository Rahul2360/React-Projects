import React, { useState, useEffect } from "react";
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from "./ContactDetails";
import api from "../api/contacts";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // Retrive Contacts
  const retriveContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  }

  const addContactHandler = async (contact) => {
    console.log(contact);
    const payload = {
      id: uuid(), 
      ...contact
    }
    const response = await api.post('/contacts', payload);
    setContacts([...contacts, response.data])
    // setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`./contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    // const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContact) {
    //   setContacts(retriveContact);
    // }
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      console.log(allContacts)
      if(allContacts) {
        setContacts(allContacts);
      }
    }
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetails/>}/>
        </Routes>
      </Router>
      {/* <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>
  );
}

export default App;
