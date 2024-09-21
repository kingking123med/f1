import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './detail.scss';

import StarRating from '../../components/star-rating/StarRating';
import { list } from '../../components/data/Data';

import {useCookies} from 'react-cookie';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Detail = () => {
    const {id}=useParams();
    console.log(id);
    const [item, setItem] = useState(list.find(element=> element.id==id));

    const [token,setToken]=useCookies(["user-token"]);

    
    

    const rated=(rate)=> {

        const rateInfo={
            data:{
                rate,
                destId:item.id
            }
        }

        
    }

    

    return (
        <>
            {
                item && (
                    <>
                        <Header></Header>
                        <div className="banner" style={{backgroundImage: `url(${item.cover})`}}></div>
                        <div className="mb-3 dest-content container">
                            <div className="dest-content__poster">
                                <div className="dest-content__poster__img" style={{backgroundImage: `url(${item.cover})`}}></div>
                            </div>
                            <div className="dest-content__info">
                                <h1 className="title">
                                    {item.name}
                                </h1>
                                <div className="genres">
                                    <span className="genres__item">{item.category}</span>
                                </div>
                                <div className='type flex'>
                                    <span style={{ background: item.type === "Closed" ? "#ff98001a" : "#25b5791a", color: item.type === "Open" ? "#25b579" : "#ff9800" }}>{item.type}</span>
                                </div>
                                
                                <div className="infos">
                                    <h2>Rate it :<StarRating rating={rated}/></h2>
                                <div className="section__header">
                                        <h2>Description :</h2>
                                    </div>
                                    <p className="overview">{item.description}</p>
                                    <div className="section__header">
                                        <h2>Location :</h2>
                                    </div>
                                    <p className="overview">{item.location}</p>
                                </div>
                            </div>
                        </div>
                        <Footer></Footer>
                    </>
                )
            }
        </>
    );
}

export default Detail;
