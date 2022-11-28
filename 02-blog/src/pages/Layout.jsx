import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <div className="wrapper-content">
        <Header />
          <Outlet/>
          <div className="spacing" />
        <Footer />
    </div>
  )
}
