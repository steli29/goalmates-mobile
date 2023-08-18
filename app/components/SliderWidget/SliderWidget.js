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
    const [isSliderUsed, setIsSliderUsed] = useState(false);

    const onSlidingComplete = () => {
        setIsSliderUsed(true);
    }

    return (
        <>
            {!disabled && (
                <Slider
                    minimumValue={minValue}
                    maximumValue={maxValue}
                    step={step}
                    value={value}
                    onValueChange={setValue}
                    disabled={isSliderUsed}
                    onSlidingComplete={onSlidingComplete}
                />
            )}
            <View style={styles.ratingContainer}>
                {!disabled && <Text style={styles.countText}>Rating: {value}</Text>}
                <Text style={styles.countText}>Total Rating: {value}</Text>
            </View>
        </>
    );
};

SliderWidget.propTypes = {
    disabled: PropTypes.bool,
};

export default SliderWidget;
