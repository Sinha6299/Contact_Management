import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchContactDetail } from '../services/api';

interface Contact {
  id: string;
  name: string;
  
}

const ContactList: React.FC = () => {
  const { data: contacts, isLoading, isError } = useQuery('contacts', fetchContactDetail);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching contacts</div>;
  }

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact: Contact) => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
