import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const HomeIconSvg = ({ color }) => {
    return (
        <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M30.06 10.23L21.42 4.18503C19.065 2.53503 15.45 2.62503 13.185 4.38003L5.66999 10.245C4.16999 11.415 2.98499 13.815 2.98499 15.705V26.055C2.98499 29.88 6.08998 33 9.91498 33H26.085C29.91 33 33.015 29.895 33.015 26.07V15.9C33.015 13.875 31.71 11.385 30.06 10.23ZM19.125 27C19.125 27.615 18.615 28.125 18 28.125C17.385 28.125 16.875 27.615 16.875 27V22.5C16.875 21.885 17.385 21.375 18 21.375C18.615 21.375 19.125 21.885 19.125 22.5V27Z" fill={color}/>
        </Svg>
    );
};

HomeIconSvg.propTypes = {
    color: PropTypes.string,
};

export default HomeIconSvg;
