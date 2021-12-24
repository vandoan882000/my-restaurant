import React from 'react';
import '../../App.css';
import AboutInfor from '../AboutInfor';
import Banner from '../Banner';
import OrderInfor from '../OrderInfor';

function Home() {
  return (
    <>
      <Banner />
      <OrderInfor/>
      <AboutInfor/>
    </>
  );
}

export default Home;