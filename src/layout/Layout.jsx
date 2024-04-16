import React, {  Component } from 'react'
import Header from '../components/header/header';

import { Outlet } from 'react-router-dom';

import data from '../data'; 

import Footer from '../components/footer/footer';




export default class Layout extends Component {
  render() {
  
    return (
      
        <> 
        <Header  data={data.productData} />
        <Outlet/>
        <Footer/>
         </>
      
    )
  }
}
