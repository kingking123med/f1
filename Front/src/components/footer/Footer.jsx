import React from "react"
import { footer } from "../data/Data"
import "./footer.scss"

const Footer = () => {
    return (
        <>
        <footer>
            <div className='container'>
            <div className='box'>
                <div className='logo'>
                <h2>Go Ma Ville</h2>
                <h3>Do You Need Help With Anything?</h3>

                
                </div>
            </div>

            {footer.map((val) => (
                <div className='box'>
                <h3>{val.title}</h3>
                <ul>
                    {val.text.map((items) => (
                    <li> {items.list} </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </footer>
        <div className='legal'>
            <span>© 2022 Go Ma Ville. Designd By Yess.</span>
        </div>
        </>
    )
}

export default Footer