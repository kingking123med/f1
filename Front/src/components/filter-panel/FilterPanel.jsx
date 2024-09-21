import React from 'react';
import { categoryList } from "../data/Data";
import FilterListToggle from './FilterListToggle';
import './filterpanel.scss';

const FilterPanel = ({
    selectedCategory,
    selectCategory,
}) => (
    <div>
        <div className='input-group'>
        <p className='label'>Category</p>
        <FilterListToggle
            options={categoryList}
            value={selectedCategory}
            selectToggle={selectCategory}
        />
        </div>
    </div>
);

export default FilterPanel;