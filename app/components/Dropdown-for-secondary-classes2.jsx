'use client'
import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import '../styles/dropdownSS.css'
import styles from '../styles/special.module.scss'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Mathematics', 'English Language', 'Musical Instrument', 'Photograph', 'Fashion Designing', 'Baking'];

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className={`dropdown-header ${isOpen ? 'open' : ''}`} onClick={handleDropdownToggle}>
        {selectedOption || 'Mathematics'}
        <FaCaretUp className="dropdown-icon" />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
