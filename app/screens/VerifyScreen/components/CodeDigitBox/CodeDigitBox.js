import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CodeDigitBox = ({ symbol, onLayout }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.symbolTextStyle} onLayout={onLayout}>
                {symbol}
            </Text>
        </View>
    );
};

CodeDigitBox.propTypes = {
    symbol: PropTypes.any,
    onLayout: PropTypes.func,
};

export default CodeDigitBox;
