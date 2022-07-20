import React from "react";
import Copyright from "../components/Copyrigth";
import Header from './Header';
import Home from './Home';
import Table from '../components/Table';

function Main() {
  return(
    <>
      <Header />
      <Home />
      <Table />
      <Copyright />
    </>
  )
};

export default Main;
