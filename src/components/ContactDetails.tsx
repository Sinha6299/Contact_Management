import React from 'react';

interface Contact {
  id: string;
  name: string;
  email: string;
  age: number;
  // ... other properties
}

interface ContactDetailsProps {
  contact: Contact;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ contact }) => {
  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Age: {contact.age}</p>
      {/* Display other contact details */}
    </div>
  );
};

export default ContactDetails;
