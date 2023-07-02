import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const TickSvg = () => {
    return (
        <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="10" y="10" width="28" height="28" rx="14" fill="#7B61FF"/>
            <Path d="M22.0001 26.7799L19.2201 23.9999L18.2734 24.9399L22.0001 28.6666L30.0001 20.6666L29.0601 19.7266L22.0001 26.7799Z" fill="#EADDFF"/>
        </Svg>
    );
};

export default TickSvg;
