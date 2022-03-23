import React from "react";
import styles from './appform.module.css'

const Submit = (props) => {
    const { data } = props;
    const listItems = Object.entries(data).map(([key, value]) => (
        <li>
            <strong>{key}:</strong> {value}
        </li>
    ));
    return (
        <div>
            <ul>{listItems}</ul>
            <button type="submit">Submit</button>
        </div>
    );
};
export default Submit;