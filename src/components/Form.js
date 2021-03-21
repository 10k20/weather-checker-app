import React from 'react';

const Form = (props) => (
    <div className="form">
        <form onSubmit={props.weatherMethod}>
            <input type='text' name='city' placeholder='Your city..' />
            <button>Get weather</button>
        </form>
    </div>
)

export default Form;