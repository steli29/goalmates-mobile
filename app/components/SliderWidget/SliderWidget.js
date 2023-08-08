import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const SliderWidget = ({ disabled }) => {
    const step = 1;
    const minValue = 0;
    const maxValue = 5;
    const [value, setValue] = useState(0);

    return (
        <>
            <Slider
                minimumValue={minValue}
                maximumValue={maxValue}
                step={step}
                value={value}
                onValueChange={setValue}
                disabled={disabled}
            />
            <View style={styles.ratingContainer}>
                <Text style={styles.countText}>Rating: {value}</Text>
                <Text style={styles.countText}>Total Rating: {value}</Text>
            </View>
        </>
    );
};

SliderWidget.propTypes = {
    disabled: PropTypes.bool,
};

export default SliderWidget;
