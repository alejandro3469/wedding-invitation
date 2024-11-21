import React from 'react';
import Banner from '../components/InvitationBanner';
import InvitationBanner from '../components/InvitationBanner';

const FirstInvitationScreen = () => {
  const weddingDetails = {
    couple: {
      bride: {
        firstname: 'Jane',
        surname: 'Doe'
      },
      groom: {
        firstname: 'Jhon',
        surname: 'Doe'
      }
    },
    date: '2025-05-22T04:30:00.000Z',
    location: {
      title: "Location Title",
      address: "State or province, City, Street, Number",
      link: "https-google-maps-link"
    },
    song: {
      name: ''
    }
  };
  return (
    <>
      <InvitationBanner/>
    </>
  );
};

export default FirstInvitationScreen;
