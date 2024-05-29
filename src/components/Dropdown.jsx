import * as React from 'react';

// Dropdown menu for end-user to use avaiable options
// Will act currently as a visual representation
const Dropdown = () => {

    // Options for the dropdown menu
    const options = [
        {label:"Profile", value:"profile"},
        {label:"Settings", value:"settings"},
        {label:"Sign Out", value:"signOut"}
    ];
    
    const [value,setValue]=React.useState('fruit');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // Displays dropdown menu
    return (
        <div>
            <DropdownMenu
                options={options}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

// Logic for component 
const DropdownMenu = ({label, value, options, onChange }) => {
    return (
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};

export default Dropdown;