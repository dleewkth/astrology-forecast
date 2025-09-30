import React, { useState } from 'react';

const BirthdateInput: React.FC<{ onBirthdateChange: (birthdate: string) => void }> = ({ onBirthdateChange }) => {
    const [birthdate, setBirthdate] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBirthdate(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onBirthdateChange(birthdate);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="birthdate">Enter your birthdate:</label>
            <input
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={handleChange}
                required
            />
            <button type="submit">Get Astrology Forecast</button>
        </form>
    );
};

export default BirthdateInput;