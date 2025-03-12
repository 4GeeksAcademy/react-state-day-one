import React from "react";

const Counter = (props) => {
    return (
        <div className="text-center d-flex justify-content-center">
            <p>{Math.floor(props.seconds/10000) % 10}</p>
            <p>{Math.floor(props.seconds/1000) % 10}</p>
            <p>{Math.floor(props.seconds/100) % 10}</p>
            <p>{Math.floor(props.seconds/10) % 10}</p>
            <p>{Math.floor(props.seconds) % 10}</p>
        </div>

    );
};

export default Counter;