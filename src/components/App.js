import React, { useState } from 'react';

import shortid from 'shortid';

import useLocalStorage from '../hooks/useLocalStorage';
import ContactForm from './ContactForm';
import ContactsList from './ContactList';
import Filter from './Filter';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleAddContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    if (contacts.find(contact => contact.number === number)) {
      alert(`Number ${number} is already in contacts`);
      return;
    }

    if ((!name || name.trim() === '') && (!number || number.trim() === '')) {
      alert('Fill in the fields "Name" and "Number"');
      return;
    }

    if (!name || name.trim() === '') {
      alert('Field "Name" is empty');
      return;
    }

    if (!number || number.trim() === '') {
      alert('Field "Number" is empty');
      return;
    }
    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const handleRemoveContact = id => {
    setContacts(() => contacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length === 0 ? (
        <p>There are no contacts in the list</p>
      ) : (
        <ContactsList
          contacts={getVisibleContacts()}
          onRemove={handleRemoveContact}
        />
      )}
    </>
  );
};

export default App;
