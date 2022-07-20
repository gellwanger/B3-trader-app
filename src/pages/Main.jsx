import React, { useContext } from "react";

import Copyright from "../components/Copyrigth";
import Header from './Header';
import Home from './Home';
import Table from '../components/Table';

import ChallengeContext from '../context/ChallengeContext';

function Main() {
  const {
    list,
  } = useContext(ChallengeContext);

  return(
    <>
      <Header />
      <Home />
      {
        list.length > 0 && <Table />
      }
      <Copyright />
    </>
  )
};

export default Main;
