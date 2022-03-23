import React from "react";
import styles from './appform.module.css'

const Step1 = (props) => {
    const { data, handleChange, next } = props;
    return (
        <form>
            <p>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
            </p>
            <p>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </p>
            <button onClick={next}>Next</button>
        </form>
    );
};
export default Step1;