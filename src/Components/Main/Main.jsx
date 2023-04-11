import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div>
           <div className='main-container'>
           <Navbar></Navbar>
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;