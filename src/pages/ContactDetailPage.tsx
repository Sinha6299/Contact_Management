import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchContactDetail } from '../services/api';
import ContactDetails from '../components/ContactDetails';

const ContactDetail: React.FC = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const { data: contactDetail, isLoading, isError } = useQuery(['contactDetails', contactId], () =>
    fetchContactDetail(contactId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching contact detail</div>;
  }

  return (
    <div>
      <h2>Contact Detail</h2>
      <ContactDetails contact={contactDetail} />
    </div>
  );
};

export default ContactDetail;
