import React, { useEffect, useState } from 'react';
import './services.css';
import SideBar from '../components/side-bar/SideBar';
import Header from '../components/header/Header';
import Card from '../components/card/Card';
import { list } from '../components/data/Data';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import PackageSelector from '../components/package-selector/PackageSelector';

const Services = () => {
    const {category}=useParams();
    console.log(category);
    
    return (
        <div className='service'>
            <Header></Header>
            <div className="row-side">
                <SideBar></SideBar>
                <Card lista={category==="All"?list:list.filter(item=>item.category===category)}/>
                <PackageSelector></PackageSelector>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;