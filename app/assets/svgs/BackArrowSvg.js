import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackArrowSvg = () => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <Path
                d='M12.6668 8H3.3335'
                stroke='#667085'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
            <Path
                d='M8.00016 12.6667L3.3335 8.00004L8.00016 3.33337'
                stroke='#667085'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </Svg>
    );
};

export default BackArrowSvg;
