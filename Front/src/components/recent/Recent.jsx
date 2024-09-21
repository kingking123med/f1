import React from "react";
import Heading from './../heading/Heading';
import "./recent.scss";
import Card from "../card/Card";
import { listHome } from "../data/Data"
const Recent = () => {
    return (
        <>
            <section className='recent padding'>
                <div className='container'>
                <Heading title='The best locations' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                <Card lista={listHome}/>
                </div>
            </section>
        </>
    )
}

export default Recent