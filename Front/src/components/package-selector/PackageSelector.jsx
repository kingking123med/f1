import React, { useState } from 'react';
import './package-selector.css';
import { list } from '../data/Data';
const PackageSelector = () => {
    const [selectedPackage, setSelectedPackage] = useState({
        restaurant: '',
        park: '',
        gym: '',
        hotel: '',
    });


    const handleChange = (e) => {
    setSelectedPackage({
        ...selectedPackage,
        [e.target.name]: e.target.value,
    });
    };

    return (
        <form className="package-selector">
        <label className="package-selector__label">
            Select Restaurant:
            <select 
            className="package-selector__select" 
            name="restaurant" 
            onChange={handleChange}>
            {list.filter(item=>item.category==="Cafe-Resto").map(item => (
                <option key={item.name} value={item.name}>
                {item.name}
                </option>
            ))}
            </select>
        </label>
        <br />
        <label className="package-selector__label">
            Select Park:
            <select 
            className="package-selector__select" 
            name="park" 
            onChange={handleChange}>
            {list.filter(item=>item.category==="Park").map(item => (
                <option key={item.name} value={item.name}>
                {item.name}
                </option>
            ))}
            </select>
        </label>
        <br />
        <label className="package-selector__label">
            Select Gym:
            <select 
            className="package-selector__select" 
            name="gym" 
            onChange={handleChange}>
            {list.filter(item=>item.category==="Gym").map(item => (
                <option key={item.name} value={item.name}>
                {item.name}
                </option>
            ))}
            </select>
        </label>
        <br />
        <label className="package-selector__label">
            Select Hotel:
            <select 
            className="package-selector__select" 
            name="hotel" onChange={handleChange}>
            {list.filter(item=>item.category==="Hotel").map(item => (
                <option key={item.name} value={item.name}>
                {item.name}
                </option>
            ))}
            </select>
        </label>
        <br />
        <button type="submit">Submit</button>
        </form>
    );
};

export default PackageSelector;
