import React from "react";
import './Layout.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import MainContent from './MainContent/MainContent'
import Navigation from "./Navigation/Navigation";
import RightSide from './RightSide/RightSide'
import Login from "../pages/Login/Login";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

function Layout() {

    return (
        <div className="grid-container">
            {/* <div className="item1"><Header /></div> */}
            <div className="item1"><HeaderMobile/></div>
            <div className="item2"><Navigation /></div>
            <div className="item3"><MainContent /></div>
            {/* <div className="item4"><RightSide /></div> */}
            <div className="item5"><Footer /></div>
        </div>

    )
}
export default Layout