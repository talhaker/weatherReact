import React from 'react';
import WeatherBox from './WeatherBox.js';

const WeatherListBox = (props) => {
    const boxes = props
        .boxes
        .map((item, index) =>
            <WeatherBox
                key={index}
                item={item}
            />)
    return (
        <div>
            {boxes}
        </div>
    );
};

export default WeatherListBox;

