import * as React from 'react';

const Dropdown = () => {

    const options = [
        {label:"Fruit", value:"fruit"},
        {label:"Vegetable", value:"vegetable"},
        {label:"Meat", value:"meat"}
    ];
    
    const [value,setValue]=React.useState('fruit');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label>
                What do we eat?
                <select value={value} onChange={handleChange}>
                    {options.map((option) => ( 
                    <option value={option.value}>{option.label}</option>))}
                </select>
            </label>
            <p>We eate {value}!</p>
        </div>
    );
};

export default Dropdown;