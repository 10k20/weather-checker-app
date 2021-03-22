import React from 'react';
import './Form.scss';

const Form = (props) => (
    <div className="form">
        <form onSubmit={props.weatherMethod}>
            <svg width='16' height='44' viewBox='0 0 16 44' className="search-icon">
                <path fill='%23666666' d='M15.27 28.29l-4.06-4.06a6.113 6.113 0 0 0 1.35-3.83c0-3.39-2.76-6.15-6.15-6.15-3.39 0-6.15 2.76-6.15 6.15s2.76 6.15 6.15 6.15c1.43 0 2.75-.5 3.8-1.33l4.06 4.06 1-.99zM6.4 25.33a4.93 4.93 0 0 1-4.92-4.92c0-2.71 2.2-4.92 4.92-4.92s4.92 2.21 4.92 4.92c.01 2.71-2.2 4.92-4.92 4.92z'></path>
            </svg>
            <input type='text' name='city' placeholder='Your city..' autoComplete="off"/>
            <button>Get weather</button>
        </form>
    </div>
)

export default Form;