import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import './date-picker.scss';

const DatePicker = ({ className, onChange }) => {
  const [date, setDate] = useState(new Date());

  const handleChange = (value) => {
    onChange(value);
    setDate(value);
  };

  return (
    <>
      <ReactDatePicker
        selected={date}
        onChange={handleChange}
        popperClassName={`date-picker ${className}`}
        placeholderText='DOB'
      />
    </>
  );
};

export default DatePicker;
