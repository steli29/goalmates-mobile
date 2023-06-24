import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const CreateGoalSvg = () => {
    return (
        <Svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="29.5" cy="29.5" r="29.5" fill="#7B61FF"/>
            <Path d="M19.25 29.5H39.75" stroke="white" stroke-width="2.5625" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M29.5 39.75V19.25" stroke="white" stroke-width="2.5625" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
};

export default CreateGoalSvg;