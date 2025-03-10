import React from 'react';
import Banner from '../components/Banner';
import Countdown from "@/app/components/wedding-invitations/Cristian&Vanessa/components/Countdown";

const InvitationScreen = () => {
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
      <Banner/>
    </>
  );
};

export default InvitationScreen;
 
